# Security Audit Report: Why Your Game is Vulnerable

## 🚨 Critical Vulnerabilities Found

### 1. Exposed Secrets in Client Code (The "Hole")
You asked where the "hole" is. It is right here in `src/App.jsx`:

```javascript
const config = {
    registrationLink: "...",
    SECRET_SALT: "SainsDataCommunity_Secure2025" // <--- THIS IS PUBLIC
};
```

**Why this is a problem:**
- **Client-Side Code is Public:** When you deploy a React app (Vite), all your code is bundled into JavaScript files that the browser downloads. Anyone can "Inspect Element" -> "Sources" or just read the JS files and see this string.
- **Forging Signatures:** Since the "Secret Salt" is known, your friend can use the exact same MD5 logic you wrote to generate a valid signature for *any* score they want. They don't need to play the game; they just need to run a small script to generate the hash.

### 2. Exposed `.env` in GitHub
You mentioned: *"file .env yang berisi supabase key dan supabase anon key nya ada di github juga"*

**Why this is a problem:**
- **Global Access:** Anyone who views your GitHub repository has your database keys.
- **Direct Database Access:** With the `VITE_SUPABASE_ANON_KEY` and `VITE_SUPABASE_URL`, an attacker doesn't even need to use your API or your Game. They can use the Supabase client directly to insert data into your `leaderboard` table.
- **Bypassing the API:** Your `api/submit-score.js` has logic to check answers and signatures. But if I have your Supabase keys, I can ignore that API completely and talk directly to your database.

### 3. Weak Database Rules (RLS)
This is an assumption, but highly likely. If your friend could "set their own score", they probably bypassed your API entirely.
- If your Supabase Row Level Security (RLS) policy says "Enable insert for all users" (which is common for public apps), and you exposed the keys, then **anyone can write anything** to your database.

---

## 🛡️ Recommended Fixes

### Step 1: Secure Your Secrets
1.  **Remove `.env` from GitHub**: Delete it from the repo immediately. Add `.env` to your `.gitignore` file so it never gets committed again.
2.  **Rotate Your Keys**: Go to your Supabase Dashboard -> Project Settings -> API and **Generate New Keys**. The old ones are compromised forever.

### Step 2: Move Logic to the Server
The "Secret Salt" must **NEVER** be in the React code (`src/App.jsx`).
- **Remove the Salt from Client:** The client should not be signing anything. The client should only send the *answers*.
- **Server Calculates Score:** Your `api/submit-score.js` already does this, which is good!
- **Trust the Server, Not the Client:** The server receives answers, calculates the score, and saves it. The client does not send the score.

### Step 3: Lock Down the Database
You need to ensure that **ONLY** your API can write to the `leaderboard` table, not the public client.
1.  **Disable Client Inserts:** In Supabase, change the RLS policy for the `leaderboard` table.
    - **Current (Likely):** `INSERT` allowed for `anon` role.
    - **New:** `INSERT` allowed **ONLY** for `service_role`.
2.  **Use Service Role in API:** Your API (`api/submit-score.js`) should use the `SUPABASE_SERVICE_ROLE_KEY` (which is kept secret in Vercel env vars) to write to the database. The client (`src/App.jsx`) should only have read access (to show the leaderboard).

### Step 4: Anti-Botting (Advanced)
Even with the above, a smart user can send a request with "all correct answers". To prevent this:
- **Time Validation:** The server should know when the game started. If the answers come in 2 seconds later, it's a bot.
- **Server-Side Session:** The server issues a "Game Token" at the start. The submission must include this token.
