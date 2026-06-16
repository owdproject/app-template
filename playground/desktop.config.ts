import { defineDesktopConfig } from '@owdproject/core'

export default defineDesktopConfig({
  theme: '@owdproject/theme-nova',
  apps: ['@owdproject/app-template'],
  modules: [],
  systemBar: {
    enabled: true,
    startButton: true,
  },
})
