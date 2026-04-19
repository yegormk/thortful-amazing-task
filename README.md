# Thortful Amazing Task

![App preview](./src/assets/done.webp)

Angular single-page app for browsing cat images and exploring cat breeds.

Live demo:
- GitHub Pages: `https://yegormk.github.io/thortful-amazing-task/`

What the app includes:
- `Cats Search` page to load cat images by breed
- `Breeds Library` page to browse and search breed details
- Data loaded from The Cat API
- Angular Material UI
- Reactive forms for search controls
- Signal store state management with `@ngrx/signals`
- Unit tests with Vitest

## Requirements

- Node.js 20+ recommended
- npm 11+ recommended

## Install

```bash
npm install
```

## API setup

This app uses The Cat API:
- Docs: `https://thecatapi.com/`
- API base URL: `https://api.thecatapi.com/v1`

Before starting the app locally, extract the API key from source control and keep it in your local environment config files instead.

Create these files from `src/environments/environment.example.ts`:
- `src/environments/environment.ts`
- `src/environments/environment.development.ts`

Then add your own API key in both files:

```ts
export const environment = {
  production: false,
  apiUrl: 'https://api.thecatapi.com/v1',
  API_KEY: 'PUT_YOUR_API_KEY_HERE',
};
```

The app sends the key through the `x-api-key` header via `src/app/utils/api-token-interceptor.ts:1`.

## Start locally

```bash
npm start
```

Then open:

```text
http://localhost:4200/
```

## Available scripts

Start development server:

```bash
npm start
```

Build the app:

```bash
npm run build
```

Run unit tests:

```bash
npm test
```

Build for GitHub Pages:

```bash
npm run github-build
```

Deploy to GitHub Pages:

```bash
npm run github-deploy
```

## Routes

- `/cats-search` - search cats by breed and picture count
- `/breeds-library` - browse and search breed information

## Tech stack

- Angular 21
- Angular Material
- Tailwind CSS
- RxJS
- `@ngrx/signals`
- Vitest
