import { readFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

export function getSkill(name) {
  const skillPath = join(__dirname, 'skills', `${name}.md`)
  return readFileSync(skillPath, 'utf-8')
}

export const skills = {
  'model-council': 'skills/model-council.md',
  'pr-reviewer': 'skills/pr-reviewer.md',
}
