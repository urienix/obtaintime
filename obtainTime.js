const moment = require('moment-timezone');

exports.obtainTime = function(){
  let now = Date.now();
  return moment.tz(now, 'America/New_York').format('MMMM Do YYYY h:mm:ss a');
}
