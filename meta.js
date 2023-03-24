import { writeFileSync, readFileSync } from "fs";

const project = JSON.parse(readFileSync('package.json', 'utf8'))


const output = [
  'export default {',
  `name: "Newton School Coding Club, PCCOE",`,
  `version: "${project.version}",`,
  `buildAt: "${new Date().toISOString()}",`,
  `platform: "${process.platform}",`,
  `}`
]

writeFileSync('./src/metadata.ts', output.join('\n'));