# PlaywrightAutomationTS

Playwright end-to-end test automation project written in TypeScript.

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- npm

## Setup

```bash
npm install
npx playwright install
```

## Running tests

```bash
npx playwright test
```

Run a specific browser project:

```bash
npx playwright test --project=chromium
```

Run in headed mode:

```bash
npx playwright test --headed
```

## Viewing the report

```bash
npx playwright show-report
```

## Project structure

```
tests/                 Test specs
playwright.config.ts   Playwright configuration (browsers, reporters, retries)
package.json           Project dependencies and scripts
```
