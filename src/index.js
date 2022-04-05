const { mpxx } = require('./mpxx')

module.exports = (code, sizing) => mpxx(code, sizing).toJs()
