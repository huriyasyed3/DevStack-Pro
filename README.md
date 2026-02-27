# 🚀 DevStack Pro – AI Tools & PDF Suite

**Live Demo:** [https://devstack-pro-pdf.vercel.app](https://devstack-pro-pdf.vercel.app)  
**Lighthouse Report:** [Click here to view Performance Report](https://pagespeed.web.dev/report?url=https://devstack-pro-pdf.vercel.app)

DevStack Pro is a high-performance, SEO-optimized SaaS platform built with Next.js 14. It features AI-enhanced PDF processing, an advanced user dashboard, and a scalable architecture designed to support 1000+ dynamic tool pages.

## 📸 Screenshots
<p align="center">
  <img src="./public/screenshots/dashboard.png" width="45%" alt="Dashboard UI">
  <img src="./public/screenshots/converter.png" width="45%" alt="Tool Interface">
</p>

## 🛠️ Tech Stack & Architecture
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript for type-safe development
- **Styling:** Tailwind CSS + ShadCN UI
- **State Management:** Zustand (History & Persistance)
- **Document Engine:** PDF.js, Docx, PDF-lib, Mammoth.js

## 🌟 Key Features
### 1. High Performance & SEO
- **Lighthouse 95+ Score:** Optimized LCP, CLS, and TBT for instant loading.
- **Dynamic SEO:** Automated JSON-LD, FAQ Schema, and OpenGraph generation for 1000+ routes.
- **Real Extraction:** Integrated `pdfjs-dist` for client-side text layer reconstruction.

### 2. Pro Document Processing
- **Binary Integrity:** Uses `Packer.toBlob` for DOCX to ensure files unlock native editing tabs in Word/WPS.
- **Word-to-PDF:** `mammoth.js` structural parsing ensures layout integrity.
- **Smart Images:** Canvas-based JPEG generation to prevent blank previews in mobile viewers.

### 3. Advanced Dashboard
- **Analytics:** Visual trends via Recharts.
- **Theme Sync:** Fully accessible Dark/Light mode synchronization.

## 🏗️ Scalability Strategy
- **ISR (Incremental Static Regeneration):** Used for tool pages to ensure sub-second performance.
- **Edge Middleware:** Global auth guards and subscription gating.

## 🚀 Installation
```bash
npm install
npm run dev