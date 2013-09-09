
module.exports = process.env.DHTMLPLUS_COV
  ? require('./lib-cov/dhtmlplus')
  : require('./lib/dhtmlplus');