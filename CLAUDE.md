# Skills

A collection of custom Agent Skills for AI coding agents, published as `@gokulkrishh/skills`.

Uses the [Agent Skills spec](https://agentskills.io/specification) — each skill is a directory with a `SKILL.md` file containing YAML frontmatter + instructions.

## Skills

### Model Council (`/council`)

Skill: `skills/model-council/SKILL.md`

### Code Review (`/review`)

Skill: `skills/code-review/SKILL.md`

### Commit (`/commit`)

Skill: `skills/commit/SKILL.md`

## Project Structure

- `skills/<name>/SKILL.md` — Skill files (Agent Skills format)
- `.claude/commands/` — Claude Code slash commands
- `index.js` — npm package entry point

## Adding New Skills

1. Create `skills/<name>/SKILL.md` with frontmatter (`name`, `description`)
2. Add `.claude/commands/<name>.md` for Claude Code
3. Register in `index.js` skills map
