# Article Dashboard

A React and Vite frontend for managing articles. It supports viewing articles by status, creating and editing articles, and previewing published articles.

## Requirements

- Node.js and npm
- A running article API server

## Run locally

1. Install the dependencies:

   ```bash
   npm install
   ```

2. Set the API server's base URL in the root `.env` file:

   ```env
   VITE_API_BASE_URL=http://localhost:8080
   ```

   Replace the example URL with the address of your API server. The frontend calls the `/articles/` and `/article/` endpoints on that server.

3. Start the development server:

   ```bash
   npm run dev
   ```

   Open the local URL printed by Vite in your browser.

## Other commands

```bash
npm run build    # Create a production build in dist/
npm run preview  # Preview the production build locally
npm run lint     # Run ESLint
```

If you change the `.env` file while Vite is running, restart the development server for the change to take effect.
