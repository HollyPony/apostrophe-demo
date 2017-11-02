module.exports = {
  extend: 'apostrophe-widgets',
  label: 'Buttons',

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
      'fooString': 'fooString',
      'analytic-tags': 'analytic-tags'
    }
  }
}
