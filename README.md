# Skills

A collection of custom [Agent Skills](https://agentskills.io) for AI coding agents. Works with Claude Code, GitHub Copilot, Cursor, Cline, and more.

## Skills

| Skill                                            | Command    | Description                                                                                                                                     |
| ------------------------------------------------ | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| [Model Council](./skills/model-council/SKILL.md) | `/council` | 4-agent debate system inspired by Grok 4.20's council. Agents (Captain, Scholar, Logician, Contrarian) analyze, debate, and synthesize answers. |
| [Code Review](./skills/code-review/SKILL.md)     | `/review`  | Code review for security (OWASP), performance, accessibility, and code quality with severity-based findings.                                    |
| [Commit](./skills/commit/SKILL.md)               | `/commit`  | Analyzes changes and creates a conventional commit with a clear title and description.                                                          |

## Install

### Via [skills.sh](https://skills.sh)

```bash
npx skills add https://github.com/gokulkrishh/skills
```

### Via Claude Code (Commands)

Clone this repo and the commands are available via `.claude/commands/`:

```bash
/council Should I use RSC or client-side rendering for my app?
/review https://github.com/user/repo/pull/42
```

### As npm Package

```bash
npm install @gokulkrishh/skills
```

```js
import { getSkill } from '@gokulkrishh/skills'

const prompt = getSkill('model-council')
```

## Creating a Skill

1. Create a new directory in `skills/` with a `SKILL.md` file
2. Add YAML frontmatter with `name` and `description` ([spec](https://agentskills.io/specification))
3. Add a command file in `.claude/commands/` for Claude Code
4. Register it in `index.js`

## License

MIT
