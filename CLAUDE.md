# Skills

A collection of custom Agent Skills for AI coding agents.

Uses the [Agent Skills spec](https://agentskills.io/specification) — each skill is a directory with a `SKILL.md` file containing YAML frontmatter + instructions.

## Skills

### Model Council (`/council`)

Skill: `skills/model-council/SKILL.md`

### Code Review (`/review`)

Skill: `skills/code-review/SKILL.md`

### Commit (`/commit`)

Skill: `skills/commit/SKILL.md`

### UX Writing (`/ux-writing`)

Skill: `skills/ux-writing/SKILL.md`

### Web Animation Design (`/web-animation-design`)

Skill: `skills/web-animation-design/SKILL.md`

### Motion Base UI (`/motion-base-ui`)

Skill: `skills/motion-base-ui/SKILL.md`

## Project Structure

- `skills/<name>/SKILL.md` — Skill files (Agent Skills format)
- `commands/` — Claude Code slash commands
- `.claude-plugin/` — Plugin manifest and marketplace config

## Adding New Skills

1. Create `skills/<name>/SKILL.md` with frontmatter (`name`, `description`)
2. Add `commands/<name>.md` for Claude Code
3. Add skill path to `.claude-plugin/marketplace.json`

## Versioning

Keep `.claude-plugin/plugin.json` version in sync. Use **minor** for new skills, **patch** for fixes to existing skills.
