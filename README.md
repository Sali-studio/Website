# さりさば Website Version 1.0.0

## Project Overview

This is the official website for Salientten.jp, built with Next.js. The website aims to provide an intuitive and modern user experience (UI/UX) based on Material 3 Expressive design principles.

## Features

- **Dynamic Access Counter**: Tracks unique visitors with IP-based and local storage checks to prevent duplicate counts.
- **Sali Studio Projects Showcase**: Displays GitHub repositories from the Sali-studio organization, fetching real-time star and fork counts.
- **News Section**: A dedicated tab for news updates, featuring a clean Material 3-inspired design with smooth animations.
- **Responsive Design**: Optimized for various screen sizes using Material-UI.

## Technologies Used

- **Next.js**: React framework for production.
- **React**: JavaScript library for building user interfaces.
- **Material-UI (MUI)**: React components for faster and easier web development. Utilizes Material 3 design principles.
- **Framer Motion**: A production-ready motion library for React.
- **TypeScript**: Superset of JavaScript that adds static types.
- **Node.js**: JavaScript runtime for the backend API routes.

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

Make sure you have Node.js (LTS version recommended) and npm (or yarn) installed on your machine.

- Node.js (v18.x or later)
- npm (v8.x or later) or Yarn (v1.x or later)

### Installation

1.  **Clone the repository (if you haven't already):**

    ```bash
    git clone <repository-url>
    cd expressive-website
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

### Running the Development Server

To start the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

### Building for Production

To build the application for production:

```bash
npm run build
# or
yarn build
```

This command optimizes the application for production and creates a `.next` folder.

### Running in Production Mode

To run the built application:

```bash
npm start
# or
yarn start
```
