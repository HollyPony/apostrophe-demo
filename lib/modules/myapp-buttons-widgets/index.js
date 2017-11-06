module.exports = {
  extend: 'apostrophe-widgets',
  label: 'Buttons',

  addFields: [
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
      'apos.myapp-buttons-widgets.widget-override-string': 'widgetString',
      'apos.myapp-buttons-widgets.widget-override-overwrite-array': ['widgetItem1'],
      'apos.myapp-buttons-widgets.widget-override-append-array': { $append: ['widgetItem1']}
    },
    editable: {
      'analytic-tags': { $append: ['analytic-tags'] },
      'global-override-string': 'widgetOverrideString'
    }
  }
}
