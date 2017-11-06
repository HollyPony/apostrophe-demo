module.exports = {
  addFields: [
    {
      name: 'globalOnlyString',
      type: 'string'
    },
    {
      name: 'widgetOverrideString',
      type: 'string'
    },
    {
      name: 'analytic-tags',
      type: 'array',
      schema: [
        {
          name: 'key',
          label: 'Key Tag',
          type: 'string'
        }, {
          name: 'value',
          label: 'Value Tag',
          type: 'string'
        }
      ]
    }
  ],

  overrideOptions: {
    fixed: {
      'apos.myapp-buttons-widgets.widget-global-only-string': 'globalOnlyString',
      'apos.myapp-buttons-widgets.widget-override-string': 'globalString',
      'apos.myapp-buttons-widgets.widget-global-only-array': ['globalItem1'],
      'apos.myapp-buttons-widgets.widget-override-overwrite-array': ['globalItem1'],
      'apos.myapp-buttons-widgets.widget-override-append-array': ['globalItem1']
    },
    editable: {
      'apos.myapp-buttons-widgets.analytic-tags': { $append: 'analytic-tags' },
      'apos.myapp-buttons-widgets.global-only-string': 'globalOnlyString',
      'apos.myapp-buttons-widgets.global-override-string': 'widgetOverrideString'
    }
  }
}
