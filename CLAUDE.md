# Claude Skills

A collection of custom Claude Code skills for personal projects, published as `@gokulkrishh/claude-skills`.

## Skills

### Model Council (`/council`)

Multi-agent debate system inspired by Grok 4.20's council architecture. Four agents (Captain, Scholar, Logician, Contrarian) deliberate on queries through independent analysis, debate, and synthesis phases.

Skill file: `skills/model-council.md`

### PR Reviewer (`/review`)

Thorough code review checking for web security (OWASP), performance, accessibility, and code quality. Outputs structured findings with severity levels (Critical/Warning/Suggestion/Good) and a verdict.

Skill file: `skills/pr-reviewer.md`

## Project Structure

- `skills/` — Skill markdown files (the prompts)
- `index.js` — Package entry point
- `package.json` — npm package config

## Adding New Skills

1. Create a new `.md` file in `skills/`
2. Follow the existing skill format (trigger, phases, prompt)
3. Register it in `index.js` skills map
