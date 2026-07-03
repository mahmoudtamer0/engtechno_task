# University Landing Page

A pixel-perfect university landing page built with **Next.js**, **TypeScript**, and **Payload CMS**.

The project focuses on creating a fully editable marketing website where all content is managed through the Payload CMS dashboard.

---

## Tech Stack

- Next.js 15
- React
- TypeScript
- Payload CMS
- MongoDB
- CSS Modules

---

## Features

- Pixel-perfect responsive UI
- Fully editable content using Payload CMS
- Mega Menu Navigation
- Hero Section
- Campus / Experience Tabs
- Partners Coverflow
- Marquee Ribbons
- Programs Slider
- Events Slider
- Testimonials Coverflow
- Admission Steps
- News Slider
- Contact Form
- Footer

---

# Project Structure

```
├── src
│   ├── app
│   │
│   ├── components
│   │
│   ├── payload
│   │   ├── collections
│   │   └── globals
│   │
│   └── lib
│       └── cms
│
├── public
│
├── payload.config.ts
│
└── package.json
```
```

---

# Getting Started

## 1. Clone the repository

```bash
git clone <repository-url>
```

---

## 2. Install dependencies

```bash
npm install
```

---

## 3. Create an environment file

Create a `.env` file in the project root.

Example:

```env

DATABASE_URL=mongodb+srv://mamoidtamer300_db_user:mahmoudtamerdb@mahmoud.mljn6sw.mongodb.net/university_project?appName=Mahmoud
PAYLOAD_SECRET=bc6a660930c4174cb7fc9274
NEXT_PUBLIC_SERVER_URL=http://localhost:3000

leaved to run the application
and also leaved the .env file to run the application
```

Fill in the values according to your environment.

---

## 4. Run the development server

```bash
npm run dev
```

The application will start on:

```
http://localhost:3000
```

---

# Payload CMS

Dashboard:

```
http://localhost:3000/admin
```

Demo credentials:

**Email**

```
mahmoud.tamer.developer@gmail.com
```

**Password**

```
Mahmoudtamer@1234
```

---

# Available Scripts

```bash
npm run dev
```

Runs the development server.

```bash
npm run build
```

Creates a production build.

```bash
npm run start
```

Starts the production server.

---

# Notes

- All website content is managed through Payload CMS.
- Images are uploaded through the CMS Media Collection.
- Navigation, Hero, Sections, Footer, and other page content are editable from the dashboard.

---

# Contact

**Mahmoud Tamer**

Email:

```
mahmoud.tamer.developer@gmail.com
```

Phone:

```
01123511914
```