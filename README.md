# Bitscale Data Grid Application

A modern, responsive data grid application built with Next.js, React, and Glide Data Grid for managing and visualizing data with advanced interactive features.

## Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

3. **Build for production**
   ```bash
   npm run build
   npm start
   ```

## Features

### Interactive Data Grid
- Data rendering using Glide Data Grid
- Displays multiple data columns including names, dates, companies, emails, job titles, locations, phone numbers, and more
- Smooth scrolling and navigation

### Responsive Design
- **Mobile-First Approach**: Optimised for mobile devices with enhancements for larger screens
- **Horizontal Scrolling**: Toolbar and footer support horizontal scrolling on smaller devices
- **Adaptive Header**: Breadcrumb text truncates on mobile, less critical buttons hide on smaller screens

### Touch-Optimised Dropdowns
- **Click Release Mechanism**: Dropdowns open only when the user releases the click/touch, preventing accidental opens
- **Mobile-Friendly**: Better experience on touch devices compared to traditional click-to-open dropdowns
- **Smart Interaction**: Cancels if the user drags away from the button before releasing

### Dropdown Menus
Every interactive button has a dropdown with relevant options:

- **Load Data**: Import from CSV, Database, or API
- **Sort**: Sort by Name (A-Z, Z-A), Date (Newest, Oldest), Company, or Status
- **Filter**: Filter by Status, Company, Date Range, or Clear Filters
- **Action**: Export Data, Delete Selected, Duplicate Rows, Bulk Edit
- **Enrichment**: Enrich with Email, Company Data, Social Profiles, or Bulk Enrichment

## Technology Stack

- **Framework**: Next.js 16.0.10
- **UI Library**: React 19.2.0
- **Data Grid**: Glide Data Grid
- **UI Components**: shadcn/ui
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Type Safety**: TypeScript

---
