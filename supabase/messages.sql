-- Optional: run in Supabase → SQL Editor
create table if not exists messages (
  id bigint generated always as identity primary key,
  name text, email text, phone text, domain text, message text,
  created_at timestamptz default now()
);
alter table messages enable row level security; -- no public policies: only the server key can write
