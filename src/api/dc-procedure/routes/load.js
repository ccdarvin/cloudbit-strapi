

module.exports = {
    routes: [
      { // Path defined with a URL parameter
        method: 'POST',
        path: '/dc-procedures/load',
        handler: 'dc-procedure.loadData',
        config: {
            policies: ['global::currentApp']
        }
      },
    ]
  }