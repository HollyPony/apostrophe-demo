module.exports = {
  addFields: [
    {
      name: 'specificKey',
      label: 'Specific Key',
      type: 'string'
    },
    {
      name: 'globalKey',
      label: 'Global Key',
      type: 'string'
    }
  ],

  overrideOptions: {
    editable: {
      'apos.apostrophe-global.globalKey': 'globalKey',
      'apos.myapp-buttons-widgets.specificKey': 'specificKey'
    }
  }
}
