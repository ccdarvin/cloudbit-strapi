

module.exports = {
    routes: [
      { // Path defined with a URL parameter
        method: 'GET',
        path: '/dc-procedure/load',
        handler: 'dc-procedure.loadData',
        config: {
            policies: ['global::currentAppGet']
        }
      },
    ]
  }