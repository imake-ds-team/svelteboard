# Svelteboard

An imageboard created with Svelte. No client-side Javascript so is safe for TOR and other applications.

## Deployment

First, clone the repo

```bash
git clone
```

Then, populate your dotenv file:

```bash
cd svelteboard
touch .env
echo IMAGEBOARD_NAME="insert_name_here" >> .env
echo IMAGEBOARD_DESCRIPTION="insert description here" >> .env
echo SUPABASE_KEY="insert supabase anon key here" >> .env
```