import { defineConfig } from 'bumpp'

export default defineConfig({
  commit: 'Release: %s',
  all: true,
  files: [
    'package.json',
    'package-lock.json',
    'packages/*/package.json',
    'packages/*/package-lock.json',
  ],
})
