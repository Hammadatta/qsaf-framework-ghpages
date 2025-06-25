# QSAF Framework

This repository contains a prebuilt version of the site under `dist/`.
Due to missing platform-specific binaries in `node_modules`, running the
original Vite scripts fails in this environment. To preview the site
without reinstalling packages, start a simple server:

```bash
npm run dev
```

This will serve the `dist` directory at [http://localhost:3000](http://localhost:3000).
Building the site from source requires reinstalling dependencies with
network access.
