# University Landing Page

A pixel-perfect university landing page built with **Next.js**, **TypeScript**, and **Payload CMS**.

---

# Setup

### 1. Clone the repository

```bash
git clone <repository-url>
cd <project-name>
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root.

```env
DATABASE_URL=mongodb+srv://mamoidtamer300_db_user:mahmoudtamerdb@mahmoud.mljn6sw.mongodb.net/university_project?appName=Mahmoud
PAYLOAD_SECRET=bc6a660930c4174cb7fc9274
NEXT_PUBLIC_SERVER_URL=http://localhost:3000

leaved to run the application
and also leaved the .env file to run the application
```

### 4. Seed the database

No manual seed is required.

All required content is already available through the provided database.

### 5. Run the project

```bash
npm run dev
```

Application:

```
http://localhost:3000
```

---

# Payload CMS

Admin Dashboard

```
http://localhost:3000/admin
```

Credentials

```
Email:
mahmoud.tamer.developer@gmail.com

Password:
Mahmoudtamer@1234
```

All website content (Header, Hero, Sections, Footer, etc.) can be edited directly from the Payload dashboard.

---

# Architecture Decisions

- Built using **Next.js App Router** with **Payload CMS** as a headless CMS.
- Content is organized into **Globals** and **Collections** to keep the CMS maintainable and scalable.
- Data fetching is abstracted inside `lib/cms` to keep components clean and reusable.
- The UI is split into reusable React components, each responsible for a single section.
- Styling is implemented using **CSS Modules** for component-level encapsulation.
- Pages use **server-side data fetching** from Payload to ensure content is always up to date while keeping the frontend simple.

---

# Trade-offs & Future Improvements

- Add image optimization with responsive image sizes.
- Improve accessibility (ARIA attributes and keyboard navigation).
- Add loading skeletons and better error handling.
- Add unit and integration tests.
- Optimize caching strategy for production using Next.js revalidation.
- Enhance mobile navigation with nested accordions and animations.
