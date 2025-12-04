import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import CryptoJS from 'crypto-js';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

// Load environment variables
dotenv.config();

// Workaround for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SUPABASE_URL = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    console.error('Error: SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are required in .env');
    process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

// Read bank_soal.js
// Since it's an ES module export, we can try to import it dynamically or parse it.
// Dynamic import is cleaner if we are in module mode.
// Let's try dynamic import.
const bankSoalPath = path.resolve(__dirname, '../src/data/bank_soal.js');
// We need to use file:// URL for dynamic import on Windows
const bankSoalUrl = 'file://' + bankSoalPath;

const SECRET_SALT = 'SADACOM_SECRET_SALT_2024';

async function seed() {
    console.log('Importing bank_soal.js...');
    const module = await import(bankSoalUrl);
    const bankSoal = module.default;

    console.log(`Found ${bankSoal.length} questions.`);

    const rowsToInsert = [];

    for (const q of bankSoal) {
        // Recover Answer Index from Hash
        let recoveredIndex = -1;
        for (let i = 0; i < q.options.length; i++) {
            const payload = `${q.id}-${i}-${SECRET_SALT}`;
            const hash = CryptoJS.MD5(payload).toString();
            if (hash === q.answerHash) {
                recoveredIndex = i;
                break;
            }
        }

        if (recoveredIndex === -1) {
            console.error(`Failed to recover answer index for Question ID ${q.id}`);
            continue;
        }

        rowsToInsert.push({
            id: q.id,
            question: q.question,
            options: q.options, // Supabase handles JSON automatically
            answer_index: recoveredIndex,
            difficulty: q.difficulty
        });
    }

    console.log(`Prepared ${rowsToInsert.length} rows for insertion.`);

    // Insert in batches to be safe
    const { error } = await supabase
        .from('questions')
        .upsert(rowsToInsert, { onConflict: 'id' });

    if (error) {
        console.error('Error inserting data:', error);
    } else {
        console.log('Successfully seeded questions table!');
    }
}

seed().catch(err => console.error(err));
