module.exports = {
  addFields: [
    {
      name: 'fooString',
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
    editable: {
      'apos.myapp-buttons-widgets.analytic-tags': 'analytic-tags',
      'apos.myapp-buttons-widgets.fooString': 'fooString'
    }
  }
}
