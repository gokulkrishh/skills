import { readFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

export function getSkill(name) {
  const skillPath = join(__dirname, 'skills', name, 'SKILL.md')
  return readFileSync(skillPath, 'utf-8')
}

export const skills = {
  'model-council': 'skills/model-council/SKILL.md',
  'code-review': 'skills/code-review/SKILL.md',
  'commit': 'skills/commit/SKILL.md',
}
