# RBB Lead Capture

A modern lead capture and agent dashboard web application built with [Next.js](https://nextjs.org), [Supabase](https://supabase.com), and [shadcn/ui](https://ui.shadcn.com/). This project enables users to submit property leads and provides agents with a real-time dashboard to manage and track submissions.

Demo Video: https://drive.google.com/file/d/144iUA-MnTvy3awd67zOQFaOaXYT2zDK4/view?usp=sharing
Live Link: https://rbb-lead-capture.vercel.app/

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

## n8n Automation Flow

This repository includes an `n8n_flow.json` file, which you can import directly into your [n8n](https://n8n.io/) instance to set up the automation for lead capture.

**How to use:**
1. Open your n8n dashboard.
2. Click the menu and select **Import Workflow**.
3. Upload the `n8n_flow.json` file from this repository.
4. Update any credentials (Supabase, SMTP, Twilio) as needed for your environment.

**What this flow does:**
- Receives lead submissions via a webhook (the URL should match your `NEXT_PUBLIC_WEBHOOK_URL`).
- Stores the lead in your Supabase `leads` table.
- Sends a confirmation email to the lead.
- Sends an SMS to the lead using Twilio.
- Updates the lead's status in Supabase to "Texted".
- Responds to the webhook with a success message.

This makes it easy to get started with the backend automation for the lead capture app—no manual setup required!
