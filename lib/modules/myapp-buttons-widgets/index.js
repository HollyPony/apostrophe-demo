module.exports = {
  extend: 'apostrophe-widgets',
  label: 'Buttons',

  addFields: [
    {
      name: 'aThing',
      type: 'string'
    }
  ],

  overrideOptions: {
    editable: {
      'aThing': 'aThing'
    }
  }
}
