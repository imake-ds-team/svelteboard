# Svelteboard

An imageboard created with Svelte. No client-side Javascript so is safe for TOR and other applications.

## Deployment

Deploying other people's software, especially the ones you find in their GitHub repos, is a huge pain in the ass. If something in here confuses you, please open an issue or DM me!

### Priors (you'll need):
- A Supabase instance, local or cloud is fine. If you want maximum control over your data, though, i.e., you live under an oppressive government, look into performing a local deployment of Supabase.
- NodeJS and NPM.

### Installation & Setup
First, clone the repo

```bash
git clone https://github.com/imake-ds-team/svelteboard.git
```

Then, install all dependencies
```bash
npm install
```

Then, populate your dotenv file:

```bash
cd svelteboard
touch .env
echo IMAGEBOARD_NAME="'insert_name_here'" >> .env
echo IMAGEBOARD_DESCRIPTION="'insert description here'" >> .env
echo SUPABASE_KEY="'insert supabase anon key here'" >> .env
echo PROJECT_URL="'insert supabase project url here'" >> .env
```

