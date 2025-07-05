# RBB Lead Capture

A modern lead capture and agent dashboard web application built with [Next.js](https://nextjs.org), [Supabase](https://supabase.com), and [shadcn/ui](https://ui.shadcn.com/). This project enables users to submit property leads and provides agents with a real-time dashboard to manage and track submissions.

## Features
- **Lead Capture Form:** Collects name, email, phone, and property address from users.
- **Agent Dashboard:** Displays all leads, their status, and updates in real time.
- **Supabase Integration:** Stores and retrieves leads from a hosted database.
- **Modern UI:** Built with shadcn/ui components and Tailwind CSS for a clean, responsive design.

## Architecture
- **Frontend:** Next.js (App Router), React 19, shadcn/ui, Tailwind CSS
- **Backend/Database:** Supabase (PostgreSQL, Auth, Realtime)
- **API:** Form submission posts to a webhook (see `NEXT_PUBLIC_WEBHOOK_URL` in `src/pages/index.tsx`)

## Getting Started

### Prerequisites
- Node.js 18+
- Supabase project (see [Supabase docs](https://supabase.com/docs))
- Environment variables:
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
  - `NEXT_PUBLIC_WEBHOOK_URL`

### Installation

```bash
npm install
# or
yarn install
```

### Development

```bash
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000) to view the app.

### Production

```bash
npm run build
npm start
```

## Project Structure
- `src/pages/index.tsx` – Lead capture form
- `src/pages/admin.tsx` – Agent dashboard
- `src/components/ui/` – Reusable UI components
- `src/lib/supabase.ts` – Supabase client setup
- `src/lib/utils.ts` – Utility functions

---

> This project was bootstrapped with [create-next-app](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
