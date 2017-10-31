var apos = require('apostrophe')({
  shortName: 'myapp',
  title: 'Demo',

  modules: {
    'apostrophe-users': {
      groups: [
        {
          title: 'guest',
          permissions: []
        },
        {
          title: 'admin',
          permissions: ['admin']
        }
      ]
    },
    'apostrophe-override-options': {},
    'myapp-buttons-widgets': {}
  }
})
