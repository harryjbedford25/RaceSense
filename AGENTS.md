# AGENTS.md

## Project Context

This is a React application built with Vite. Treat it as user-owned application code, keep changes focused on the user's request, and preserve existing project conventions.

Start with `README.md` for local setup and development instructions.

## Key Files

- Application files are in the root directory (React components, utilities, etc.)
- `vite.config.js`: Vite configuration.
- `package.json`: Dependencies and scripts.
- `.env.local`: local-only environment values; never commit secrets.

## Working Notes

- Use `npm run dev` for local development.
- Use `npm run build` to create a production build.
- Run the relevant checks from `package.json` before finishing code changes.

## Base44 Dev Environment

- The app runs via `docker compose -f docker-compose.base44.yml up -d` (Node 22 + Vite dev server, port 3000).
- It is a pure frontend Vite + React app — no backend, no database, no required secrets to boot.
- The only env var is `VITE_CONTACT_EMAIL` (in `config.js`); it has a built-in default, so no credentials are required.
- Frontend edits hot-reload automatically; no service restart needed for `.jsx`/`.css` changes.
