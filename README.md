# julien.care

Source code for [julien.care](https://julien.care) — a personal website about life, creativity, and figuring things out. Written from Brussels with love.

Open-sourced to be transparent and to inspire others to build their own.

## What's inside

A bilingual (EN/FR) personal site with essays, notes, projects, and an about page. Built with React, styled with Tailwind CSS, and backed by Supabase for storage and data.

## Stack

- **React** + **TypeScript** — UI
- **Vite** — build tool
- **Tailwind CSS** — styling
- **shadcn/ui** — component library
- **Supabase** — database & file storage
- **Lovable** — used for initial scaffolding

## Running locally

```sh
git clone https://github.com/raclettemeister/accelerating.git
cd accelerating
npm install
```

Copy the example env file and fill in your own Supabase credentials:

```sh
cp .env.example .env
```

Then start the dev server:

```sh
npm run dev
```

## Making it your own

Fork this repo, swap out the content in `src/data/` and `src/pages/`, point it at your own Supabase project, and you've got yourself a personal site.

## License

MIT — see [LICENSE](./LICENSE). Do whatever you want with it.
