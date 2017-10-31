module.exports = {
  extend: 'apostrophe-widgets',
  label: 'Buttons',

  addFields: [
    {
      name: 'globalKey',
      label: 'Global Key',
      type: 'string'
    },
    {
      name: 'specificKey',
      label: 'Specific Key',
      type: 'string'
    },
    {
      name: 'localKey',
      label: 'Local Key',
      type: 'string'
    }
  ],
  overrideOptions: {
    editable: {
      'apos.apostrophe-global.globalKey': 'globalKey',
      'apos.myapp-buttons-widgets.specificKey': 'specificKey',
      'apos.myapp-buttons-widgets.localKey': 'localKey'
    }
  }
}
