import fs from 'fs';
import CryptoJS from 'crypto-js';

// Read the original file
const bankSoalContent = fs.readFileSync('src/data/bank_soal.js', 'utf8');

// Extract the array content (hacky but works for this simple file)
// We need to execute the file to get the array, or parse it.
// Since it's an ES module export, let's just use regex to extract the array part or import it if we can run as module.
// Easier: just regex replace the answer field.

const SECRET_SALT = 'SADACOM_SECRET_SALT_2024';

// Regex to find "answer: <number>,"
// We want to replace it with "answerHash: '<hash>',"
// And remove the original answer.

let newContent = bankSoalContent.replace(/answer:\s*(\d+),/g, (match, answerIndex) => {
    // We need the ID to salt it properly.
    // This regex approach is risky because we need the ID which is on a previous line.
    return `TEMP_MARKER:${answerIndex},`;
});

// Now we need to process line by line or object by object to get the ID.
// Let's try a different approach: Parse the array.
// Since we can't easily import the file in this script without setting up package.json type module etc.
// Let's just do a robust regex loop.

const lines = bankSoalContent.split('\n');
let currentId = null;
let outputLines = [];

for (let line of lines) {
    // Find ID
    const idMatch = line.match(/id:\s*(\d+),/);
    if (idMatch) {
        currentId = parseInt(idMatch[1]);
    }

    // Find Answer
    const answerMatch = line.match(/answer:\s*(\d+),/);
    if (answerMatch && currentId !== null) {
        const answerIndex = parseInt(answerMatch[1]);
        const payload = `${currentId}-${answerIndex}-${SECRET_SALT}`;
        const hash = CryptoJS.MD5(payload).toString();

        // Replace line
        // We comment out the original answer for reference? No, remove it to hide it.
        // But wait, if we remove it, we can't verify easily.
        // The goal is to HIDE it.
        outputLines.push(line.replace(/answer:\s*\d+,/, `answerHash: "${hash}",`));
    } else {
        outputLines.push(line);
    }
}

const finalContent = outputLines.join('\n');

fs.writeFileSync('src/data/bank_soal_hashed.js', finalContent);
console.log('Hashed bank soal created at src/data/bank_soal_hashed.js');
