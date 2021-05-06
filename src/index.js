const mpxx = require('./mpxx')

module.exports = code => mpxx(code).toJs()
