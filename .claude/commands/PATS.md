---
description: Commit and push all changes in PlaywrightAutomationTS to GitHub, updating the README if the project structure changed.
---

Commit and push the current state of this repository (PlaywrightAutomationTS) to `origin main` on https://github.com/vishvastav/PlaywrightAutomationTS.

Steps:
1. Run `git status` and `git diff` to review all staged/unstaged/untracked changes.
2. If the `tests/` folder structure changed (new numbered module folders or reorganization), update the "Project structure" section in [README.md](README.md) to match.
3. Stage the relevant files with `git add` (avoid `git add -A` blindly — check for stray files like build output, `.env`, or secrets first).
4. Commit with a concise message describing what changed and why, following this repo's existing commit style.
5. Push to `origin main`.
6. Report back the commit hash and confirm the push succeeded.

Do not force-push. If there are merge conflicts or the push is rejected, stop and ask before taking any destructive action.
