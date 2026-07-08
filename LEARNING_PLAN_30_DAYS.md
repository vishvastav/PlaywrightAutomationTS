# 🎭 Playwright + TypeScript — 30 Day Plan (1 hour/day)

> Taught simple, like explaining to a friend. Tick `[x]` when you finish a day.
> Rule: **30 min learn + 30 min do it yourself.** Doing beats watching.

---

## 🟢 WEEK 1 — The Basics (Days 1–7)
*Goal: understand what Playwright is and write simple tests.*

- [ ] **Day 1 — What is Playwright & setup**
  What automation testing means (a robot using a website for you). Install Node.js, VS Code, Playwright. Understand the folder structure.
- [ ] **Day 2 — Your first test**
  `test()`, `page`, `page.goto()`, `expect().toHaveTitle()`. Run a test. Read the report.
- [ ] **Day 3 — Actions**
  `fill()`, `click()`, `type()`, `check()`, `press()`. Fill and submit a login form.
- [ ] **Day 4 — Locators (finding elements) Part 1**
  CSS selectors: `#id`, `.class`, `tag`. `page.locator()`. Why a locator is "lazy".
- [ ] **Day 5 — Locators Part 2 (the recommended ones)**
  `getByRole`, `getByText`, `getByLabel`, `getByPlaceholder`, `getByTestId`. Why these are best.
- [ ] **Day 6 — Assertions (checking things)**
  Web-first assertions & auto-retry: `toBeVisible`, `toHaveText`, `toHaveURL`, `toHaveValue`, `toBeEnabled`.
- [ ] **Day 7 — Review + mini project**
  Write a full login → dashboard test from scratch with NO help. Re-quiz yourself.

---

## 🟡 WEEK 2 — Real Interactions (Days 8–14)
*Goal: handle everything a real website throws at you.*

- [ ] **Day 8 — Auto-waiting & waits**
  Why Playwright waits automatically. `waitFor()`, `waitForURL()`. Why we avoid `sleep`.
- [ ] **Day 9 — Multiple elements**
  `locator.all()`, `.nth()`, `.first()`, `.last()`, `.count()`. Loop through a list.
- [ ] **Day 10 — Dropdowns, checkboxes, radio buttons**
  `selectOption()`, `check()`, `uncheck()`, `setChecked()`.
- [ ] **Day 11 — Handling special stuff**
  Alerts/dialogs, new tabs/popups, iframes, file uploads.
- [ ] **Day 12 — Keyboard & mouse**
  `hover()`, `dblclick()`, drag & drop, `keyboard.press()`.
- [ ] **Day 13 — Screenshots & debugging**
  `screenshot()`, trace viewer, `--debug`, `page.pause()`, Playwright Inspector.
- [ ] **Day 14 — Review + mini project**
  Automate a small e-commerce flow: search → add to cart → checkout page.

---

## 🟠 WEEK 3 — Writing Professional Tests (Days 15–21)
*Goal: organize tests the way real companies do.*

- [ ] **Day 15 — Test hooks**
  `beforeEach`, `afterEach`, `beforeAll`, `afterAll`, `test.describe()` (grouping).
- [ ] **Day 16 — TypeScript basics you actually need**
  Types, `interface`, functions, `async/await` explained simply, `import/export`.
- [ ] **Day 17 — Page Object Model (POM) Part 1**
  Why we don't repeat code. Build your first Page class (LoginPage).
- [ ] **Day 18 — Page Object Model Part 2**
  Multiple page objects working together. Reuse across tests.
- [ ] **Day 19 — Fixtures**
  What fixtures are, custom fixtures, sharing setup (like an auto logged-in user).
- [ ] **Day 20 — Config file deep dive**
  `playwright.config.ts`: baseURL, timeouts, browsers, `projects`, retries.
- [ ] **Day 21 — Review + mini project**
  Convert Week 2's project into clean Page Object Model style.

---

## 🔴 WEEK 4 — Advanced & Job-Ready (Days 22–30)
*Goal: the skills that get you hired.*

- [ ] **Day 22 — Handling login smartly (auth state)**
  Save login once, reuse it (`storageState`) so tests run fast.
- [ ] **Day 23 — API testing with Playwright**
  `request` fixture: GET/POST, checking status codes and response data.
- [ ] **Day 24 — Mixing API + UI**
  Use API to set up data fast, then test the UI. (Very common in real jobs.)
- [ ] **Day 25 — Data-driven testing**
  Run one test with many data sets. Reading data from arrays/JSON.
- [ ] **Day 26 — Cross-browser & parallel runs**
  Chromium/Firefox/WebKit, mobile emulation, running tests in parallel.
- [ ] **Day 27 — CI/CD (GitHub Actions)**
  Make tests run automatically when code changes. Read the HTML report.
- [ ] **Day 28 — Best practices & flaky tests**
  What makes tests break randomly and how to fix them. Good vs bad locators.
- [ ] **Day 29 — Interview prep day**
  50 common Playwright interview questions. Explain concepts out loud.
- [ ] **Day 30 — Final capstone project**
  Build a complete framework: POM + fixtures + API setup + config + report. This is your portfolio piece.

---

## 📌 Daily Routine (every day, 1 hour)
1. **5 min** — read yesterday's notes (quick recall).
2. **25 min** — learn the new topic (video/reading).
3. **25 min** — write the code yourself, no copy-paste.
4. **5 min** — write 1 line: "Today I learned ___" + 1 interview Q you can now answer.

## 🏆 Rules to succeed
- Type code by hand. Copy-pasting doesn't build memory.
- Break something on purpose, then read the error. Errors are teachers.
- If stuck 15 min, ask me — I'll explain it 9th-grade simple.
