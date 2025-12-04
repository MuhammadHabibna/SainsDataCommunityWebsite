import { createClient } from '@supabase/supabase-js';
import CryptoJS from 'crypto-js';

// Initialize Supabase Client
// We use the Service Role Key here to ensure we can read everything, 
// but we must be careful not to expose sensitive data.
const supabaseUrl = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

const SECRET_SALT = 'SADACOM_SECRET_SALT_2024';

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        // Fetch all questions
        const { data: questions, error } = await supabase
            .from('questions')
            .select('*')
            .order('id', { ascending: true });

        if (error) {
            throw error;
        }

        // Sanitize and Hash Answers
        const sanitizedQuestions = questions.map(q => {
            // Calculate Hash for the correct answer
            // We need to replicate the logic: MD5(id-index-SALT)
            const payload = `${q.id}-${q.answer_index}-${SECRET_SALT}`;
            const answerHash = CryptoJS.MD5(payload).toString();

            return {
                id: q.id,
                question: q.question,
                options: q.options,
                difficulty: q.difficulty,
                answerHash: answerHash
                // EXCLUDE answer_index
            };
        });

        res.status(200).json(sanitizedQuestions);

    } catch (err) {
        console.error('Error fetching questions:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
