---
name: commit
description: Generates a conventional commit (conventionalcommits.org) with a clear title and description based on staged or unstaged changes. Analyzes the diff to determine the type, scope, and whether it's a breaking change. Use when the user wants to commit code changes.
license: MIT
user-invokable: true
---

# Commit

Analyzes code changes and creates a [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) compliant git commit.

## Instructions

**STEP 1 — GATHER CHANGES**

- Run `git status` to see what files have changed
- Run `git diff --staged` to see staged changes
- If nothing is staged, run `git diff` for unstaged changes and stage them
- Run `git log --oneline -5` to understand the repo's commit style

**STEP 2 — ANALYZE**

Determine:

- The **type** of change (see types below)
- The **scope** — which module, component, or area is affected (always include when one can be reasonably determined)
- Whether this is a **breaking change**
- The "why" behind the change, not just the "what"

**STEP 3 — COMMIT**

Create the commit following the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification:

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

### Format

- **Title line:** `<type>(<scope>): <description>` — under 70 characters
- **Body:** Explain why the change was made, with brief context on what changed. 1-3 lines. Separate from title with a blank line. Always include a body for non-trivial commits.
- **Breaking changes:** Add `BREAKING CHANGE:` in the footer, or `!` after the type/scope (e.g. `feat!:` or `feat(api)!:`)

### Types

- `feat` — new feature (correlates with MINOR in SemVer)
- `fix` — bug fix (correlates with PATCH in SemVer)
- `docs` — documentation only
- `style` — formatting, whitespace, semicolons (no code change)
- `refactor` — code change that neither fixes a bug nor adds a feature
- `perf` — performance improvement
- `test` — adding or updating tests
- `build` — build system or external dependencies
- `ci` — CI configuration and scripts
- `chore` — other changes that don't modify src or test files

### Examples

Simple:

```
feat(auth): add OAuth2 login flow
```

With body:

```
fix(parser): handle empty input without crashing

Previously the parser would throw a NullPointerException when given
an empty string. Now it returns an empty result set.
```

Breaking change:

```
feat(api)!: remove deprecated /users endpoint

BREAKING CHANGE: The /users endpoint has been removed.
Use /v2/users instead.
```

**STEP 4 — SUMMARY**

After committing, show a summary:

```
Committed: <commit hash>
Branch: <branch name>
Files: <number of files changed>

<commit title>

<commit body>
```

## Rules

- Title must be under 70 characters
- Title should be imperative mood ("add feature" not "added feature")
- Description should be lowercase, no period at the end
- Body should explain why the change was made, not just restate the title
- Do not commit files that look like secrets (.env, credentials, tokens)
- If there are no changes to commit, say so and stop
- Stage specific files, not `git add .` or `git add -A`
- Use `!` or `BREAKING CHANGE:` footer for breaking changes
