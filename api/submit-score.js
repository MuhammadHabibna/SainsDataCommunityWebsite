import { createClient } from '@supabase/supabase-js';
import CryptoJS from 'crypto-js';

// Initialize Supabase Client
const supabaseUrl = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { playerName, answers } = req.body;
        const clientSignature = req.headers['x-signature'];

        if (!playerName || !answers || !Array.isArray(answers)) {
            return res.status(400).json({ error: 'Invalid data format' });
        }

        // 1. Verify Signature
        const SECRET_SALT = 'SADACOM_SECRET_SALT_2024'; // Must match frontend
        const payload = playerName + JSON.stringify(answers) + SECRET_SALT;
        const serverSignature = CryptoJS.MD5(payload).toString();

        if (clientSignature !== serverSignature) {
            console.warn(`Signature Mismatch! User: ${playerName}`);
            return res.status(401).json({ error: 'Security verification failed. Score rejected.' });
        }

        // 2. Fetch Questions from DB to validate answers
        const questionIds = answers.map(a => a.questionId);

        if (questionIds.length === 0) {
            return res.status(200).json({ score: 0, message: 'No answers submitted' });
        }

        const { data: dbQuestions, error } = await supabase
            .from('questions')
            .select('id, answer_index, difficulty')
            .in('id', questionIds);

        if (error) {
            console.error("Error fetching questions for validation:", error);
            throw error;
        }

        // Create a map for faster lookup
        const questionMap = new Map();
        dbQuestions.forEach(q => questionMap.set(q.id, q));

        // 3. Calculate Score
        let calculatedScore = 0;
        let currentStreak = 0;
        const processedQuestions = new Set();

        for (const answer of answers) {
            if (processedQuestions.has(answer.questionId)) continue;
            processedQuestions.add(answer.questionId);

            const question = questionMap.get(answer.questionId);
            if (question) {
                if (answer.selectedAnswerIndex === question.answer_index) {
                    let points = 10;
                    if (question.difficulty === 'Medium') points = 13;
                    if (question.difficulty === 'Hard') points = 16;

                    currentStreak++;
                    const comboBonus = (currentStreak - 1) * 2;
                    calculatedScore += (points + comboBonus);
                } else {
                    currentStreak = 0;
                }
            } else {
                currentStreak = 0;
            }
        }

        // 4. Cap Score
        if (calculatedScore > 2000) {
            calculatedScore = 2000;
        }

        console.log(`User: ${playerName}, Calculated Score: ${calculatedScore}`);

        // 5. Save to Leaderboard
        const { error: insertError } = await supabase
            .from('leaderboard')
            .insert([{ name: playerName, score: calculatedScore }]);

        if (insertError) {
            console.error('Error saving to leaderboard:', insertError);
            return res.status(500).json({ error: 'Failed to save score' });
        }

        res.status(200).json({ message: 'Score submitted successfully', score: calculatedScore });

    } catch (err) {
        console.error('Server Error:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
