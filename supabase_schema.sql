-- Create the announcements table
CREATE TABLE announcements (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    title TEXT NOT NULL,
    subtitle TEXT,
    content TEXT,
    category TEXT DEFAULT 'General',
    cta_text TEXT,
    cta_link TEXT,
    is_active BOOLEAN DEFAULT TRUE,
    image_url TEXT,
    registration_deadline TIMESTAMP WITH TIME ZONE
);

-- Enable Row Level Security (RLS)
ALTER TABLE announcements ENABLE ROW LEVEL SECURITY;

-- Create Policy: Allow Public Read Access
CREATE POLICY "Enable read access for all users" ON announcements
    FOR SELECT USING (true);

-- Create Policy: Allow Authenticated Users (Admin) to Insert/Update/Delete
-- Note: You need to be logged in via Supabase Auth to write, or use the Service Role Key.
-- For simplicity in this demo, we are only enabling Public Read.
-- Writing is assumed to be done via Supabase Dashboard.
