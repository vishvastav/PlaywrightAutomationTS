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
tests/
  00_Task/                          Practice/assignment tasks
  01_Basics/                       Basic Playwright test syntax and annotations
  02_first_tests/                  Browser/context/page (BCP) fundamentals
  03_Locators_Commands/            Locator strategies and commands
  04_Session_Storage/              Session/local storage handling
  05_Allure_Reporting/             Allure reporting setup
  06_Multiple_Element_/            Working with multiple elements
  07_WebTables/                    Web table automation
  08_Web_Select_Frames_Iframe/     Select dropdowns and iframes
  09_Frame_Iframe/                 Frame/iframe handling
  10_Keyboard_Hover_Drag_Drop/     Keyboard, hover, and drag-and-drop actions
  11_JS_Alerts/                    JavaScript alert/dialog handling
  12_Handle_SVG/                   SVG element handling
  13_Shadow_DOM/                   Shadow DOM automation
  14_FileUpload/                   File upload flows
  15_File_Download/                File download flows
  16_Scroll_toElement/             Scrolling to elements
  17_Expect_Assertions/            Assertion patterns
  18_Test_hooks/                   Test hooks (beforeEach, afterEach, etc.)
  19_Data_Driven_Testing/          Data-driven test patterns
  20_Page_Object_Model/            Page Object Model design
  21_Fixture/                      Custom fixtures
  22_Misc_Concepts/                Miscellaneous concepts
  23_Advance_Framework/            Advanced framework topics
  Projects/                        End-to-end project test suites
playwright.config.ts   Playwright configuration (browsers, reporters, retries)
package.json           Project dependencies and scripts
```
