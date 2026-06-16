import { nextTick } from 'vue'
import { defineNuxtPlugin } from 'nuxt/app'
import { useApplicationManager } from '@owdproject/core/runtime/composables/useApplicationManager'

const APP_ID = 'ext.domain.app'
const WINDOW_MODEL = 'main'

/** Dev playground: open Template after register + mount. */
export default defineNuxtPlugin({
  name: 'app-template-playground-launch',
  dependsOn: ['desktop-app-template-register'],
  async setup(nuxtApp) {
    if (!import.meta.dev) return

    const applicationManager = useApplicationManager()

    async function surfaceTemplateWindow() {
      if (!applicationManager.isAppDefined(APP_ID)) {
        return false
      }

      const app = applicationManager.getAppById(APP_ID)!

      if (app.storeWindows.$persistedState) {
        await app.storeWindows.$persistedState.isReady()
      }

      // Playground: drop stale minimized/hidden window state from prior sessions.
      app.closeAllWindows()
      app.storeWindows.windows = {}

      await applicationManager.execAppCommand(APP_ID, 'myApp')

      const window = app.getFirstWindowByModel(WINDOW_MODEL)
      if (window) {
        window.actions.setActive(true)
        window.actions.bringToFront()
      }

      return Boolean(window)
    }

    nuxtApp.hook('app:mounted', async () => {
      await nextTick()

      for (let attempt = 0; attempt < 80; attempt++) {
        if (await surfaceTemplateWindow()) return
        await new Promise((resolve) => setTimeout(resolve, 50))
      }

      console.warn(
        '[app-template playground] Template app was not registered — check @owdproject/app-template plugin.',
      )
    })
  },
})
