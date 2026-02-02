# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Archiba is a portfolio website for an architect, built with the Webinity Framework (Slim Framework 4 skeleton), Twig templating, and Vite for asset bundling.

## Development Commands

```bash
# Install dependencies
npm install
composer install

# Start PHP development server (port 8081)
npm run server

# Start Vite dev server with hot reload (port 5174)
npm run dev

# Production build
npm run build

# Format Twig templates
npm run prettier
```

Both servers should run simultaneously during development - PHP server handles routing, Vite serves assets with HMR.

## Architecture

### Directory Structure

- `/app/Controllers` - Route controllers (namespace: `Webinity\App\Controllers`)
- `/config` - App configuration (`app.php` for services/routes, `twig.php` for templating)
- `/routes` - Route definitions (`web.php` for pages, `api.php` for JSON endpoints)
- `/resources/templates` - Twig templates (`/pages` for page content, `/partials` for components)
- `/resources/js` - JavaScript entry point (`app.js`)
- `/resources/scss` - SCSS styles (modular component files)
- `/resources/lang` - Translations (`/cs`, `/en` folders with `strings.php`)
- `/public` - Web root with compiled assets in `/assets`

### Framework Flow

1. `public/index.php` bootstraps the Slim app via `/bootstrap/bootstrap.php`
2. Routes in `/routes/web.php` render Twig templates
3. Templates use `asset()` helper for versioned asset paths
4. Localization set via session (`$_SESSION['app_locale']`) and available in Twig as `app_locale`

### Environment Modes

Set `ENVIRONMENT="DEV"` in `.env` for development:
- CSS loaded from Vite dev server
- Hot module replacement enabled

Set `ENVIRONMENT="PROD"` for production:
- CSS loaded from compiled `/public/assets/`

### Key Frontend Components

- **Swiper.js** - Multiple slider instances configured in `app.js`
- **Navigation** - Responsive hamburger menu with toggle logic
- **Multilingual** - Czech (default) and English via `/locale` POST endpoint

## Configuration

- **Vite** (`vite.config.js`) - Builds from `resources/` to `public/assets/`
- **App** (`config/app.php`) - Services, routes, locale settings; database disabled by default
- **Prettier** (`.prettierrc`) - 4-space tabs, no semicolons, single quotes, Twig melody plugin
