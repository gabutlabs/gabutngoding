# Gabut Ngoding Project - QWEN Context

## Project Overview

**Gabut Ngoding** is a Nuxt.js portfolio website that showcases personal projects and provides contact information. The name "Gabut Ngoding" translates to "Idle Coding" in Indonesian, representing a place where the developer shares projects created during free time.

### Key Technologies & Architecture

- **Framework**: Nuxt.js v4 (Nuxt 4.2.1)
- **UI Components**: Nuxt UI v4.1.0
- **Content Management**: Nuxt Content v3.8.2 (using JSON data files)
- **Icons**: Lucide and Simple Icons
- **Database**: Better SQLite3 (for content)
- **Language**: TypeScript
- **Package Manager**: pnpm

### Project Structure

```
/Users/madina/Projects/js/gabutngoding/
├── app/                    # Nuxt application root
│   ├── assets/            # Static assets and styles
│   ├── components/        # Vue components
│   ├── pages/             # Page components (index.vue)
│   ├── app.config.ts      # App-level configuration (UI colors)
│   └── app.vue            # Main application component
├── content/               # Content files (projects JSON)
│   └── projects/          # Project data in JSON format
├── public/                # Public assets
├── nuxt.config.ts         # Nuxt framework configuration
├── content.config.ts      # Content collections configuration
├── package.json           # Project dependencies and scripts
└── README.md              # Project documentation
```

The app uses a main layout defined in `app.vue` with:
- Header containing logo and navigation
- Main content area
- Footer with copyright information
- SEO meta tags and social sharing configuration

### Content Management

Projects are stored as JSON files in the `content/projects/` directory. The content configuration uses Zod schema validation for project data:

```typescript
schema: z.object({
  project_name: z.string(),
  description: z.string(),
  image: z.string(),
  url: z.string(),
})
```

The homepage (`app/pages/index.vue`) queries this collection via `queryCollection("projects")` and displays projects in a card layout.

### UI Customization

UI colors are configured in `app/app.config.ts` with:
- Primary color: lime
- Neutral color: slate

### Key Features

1. **Project Showcase**: Displays personal projects in a responsive card layout
2. **Contact Section**: Provides links to GitHub, WhatsApp, and Telegram
3. **SEO Optimized**: Includes meta tags and social sharing features
4. **Dark/Light Mode**: Color mode toggle functionality
5. **Responsive Design**: Mobile-friendly layout

## Development Setup

### Prerequisites

- Node.js (latest LTS version)
- pnpm package manager (as specified in package.json)

### Installation

```bash
pnpm install
```

### Development Server

```bash
pnpm dev
```

This starts the development server on `http://localhost:3000`

### Building for Production

```bash
pnpm build
```

### Preview Production Build

```bash
pnpm preview
```

### Additional Scripts

- `pnpm lint` - Run ESLint to check code quality
- `pnpm typecheck` - Run TypeScript type checking

### Development Conventions

- Code follows ESLint style guide with:
  - No trailing commas in objects/arrays
  - 1TBS brace style
- TypeScript is used throughout the application
- Vue 3 Composition API with `<script setup>`
- Nuxt auto-imports for composables and components
- Responsive design using Nuxt UI components

## Project Purpose

The Gabut Ngoding website serves as a personal portfolio to showcase projects created during free time. It demonstrates the developer's skills and provides a platform for potential clients to explore their work and get in touch for collaboration opportunities.