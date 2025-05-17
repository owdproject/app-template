export default {
  id: 'ext.domain.app',
  title: 'Template',
  singleton: true,
  icon: 'meteor-icons:robot',
  windows: {
    main: {
      component: () => import('./components/Window/WindowTemplate.vue'),
      resizable: false,
      size: {
        width: 448,
        height: 240,
      },
      position: {
        x: 400,
        y: 240,
        z: 0,
      },
    },
  },
  entries: {
    myApp: {
      command: 'myApp',
    },
  },
  commands: {
    myApp: (app: IApplicationController) => {
      app.openWindow('main')
    },
  },
}
