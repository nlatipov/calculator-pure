# Calculator - Clean Architecture Demo

A calculator built with **Clean Architecture** principles in TypeScript, demonstrating separation of concerns across layers.

## Architecture

```
src/
├── core/              # Business logic (pure, no dependencies)
├── adapters/          # Interface adapters (connecting core to infrastructure)
└── infrastructure/    # Delivery mechanisms (Web UI, CLI)
```

The same core logic powers two independent interfaces - a **web app** and a **CLI** - without any code duplication, proving that the architecture is truly decoupled.

## Tech Stack

- **TypeScript** — strict mode, no `any`
- **Vite** — fast build and dev server
- **Clean Architecture** — core → adapters → infrastructure
- **CI/CD** — GitHub Actions (CI, deploy to GitHub Pages, CodeQL security analysis)

## Getting Started

```bash
npm install

# Web version
npm run web

# CLI version
npm run cli

# Build
npm run build
```

## Why This Project

This is a deliberately simple app used to demonstrate architectural thinking — how to structure code so that business logic is portable, testable, and independent of frameworks or delivery mechanisms. The same pattern scales to complex applications.
