import dotenv from 'dotenv';
dotenv.config();

console.log("Loaded keys:", Object.keys(process.env));
console.log("SUPABASE_URL present:", !!process.env.SUPABASE_URL);
console.log("VITE_SUPABASE_URL present:", !!process.env.VITE_SUPABASE_URL);
console.log("SUPABASE_SERVICE_ROLE_KEY present:", !!process.env.SUPABASE_SERVICE_ROLE_KEY);
