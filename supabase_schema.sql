-- Create the questions table
CREATE TABLE IF NOT EXISTS public.questions (
    id BIGINT PRIMARY KEY,
    question TEXT NOT NULL,
    options JSONB NOT NULL, -- Storing options as a JSON array ["A", "B", "C", "D"]
    answer_index INTEGER NOT NULL, -- 0, 1, 2, or 3
    difficulty TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security
ALTER TABLE public.questions ENABLE ROW LEVEL SECURITY;

-- Policy: Allow public read access to questions (but we will filter columns in API)
-- Actually, for better security, we can restrict this to only be accessible via Service Role (Backend)
-- and let the Backend API decide what to return.
-- But for simplicity in fetching, let's allow read.
CREATE POLICY "Enable read access for all users" ON public.questions
    FOR SELECT
    USING (true);

-- Policy: Allow insert/update only for Service Role (for seeding)
CREATE POLICY "Enable insert for service role only" ON public.questions
    FOR INSERT
    WITH CHECK (auth.role() = 'service_role');

CREATE POLICY "Enable update for service role only" ON public.questions
    FOR UPDATE
    USING (auth.role() = 'service_role');
