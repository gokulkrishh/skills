---
name: commit
description: Generates a commit with a clear title and description based on staged or unstaged changes. Analyzes the diff to determine the nature of the change (feature, fix, refactor, etc.) and writes a conventional commit message. Use when the user wants to commit code changes.
license: MIT
metadata:
  author: gokulkrishh
  version: '0.1.0'
---

# Commit

Analyzes code changes and creates a well-structured git commit with a title and description.

## Instructions

**STEP 1 — GATHER CHANGES**

- Run `git status` to see what files have changed
- Run `git diff --staged` to see staged changes
- If nothing is staged, run `git diff` for unstaged changes and stage them
- Run `git log --oneline -5` to understand the repo's commit style

**STEP 2 — ANALYZE**

Determine:

- The nature of the change: feature, fix, refactor, docs, test, chore, style, perf
- Which files/modules are affected
- The "why" behind the change, not just the "what"

**STEP 3 — COMMIT**

Create the commit using this format:

```
<type>: <short title under 70 chars>

<description explaining what changed and why, 1-3 lines>
```

Types:

- `feat` — new feature or functionality
- `fix` — bug fix
- `refactor` — code restructuring without behavior change
- `docs` — documentation changes
- `test` — adding or updating tests
- `chore` — tooling, deps, config changes
- `style` — formatting, whitespace, naming
- `perf` — performance improvement

## Rules

- Title must be under 70 characters
- Title should be imperative mood ("add feature" not "added feature")
- Description should explain the why, not repeat the what
- Do not commit files that look like secrets (.env, credentials, tokens)
- If there are no changes to commit, say so and stop
- Stage specific files, not `git add .` or `git add -A`
