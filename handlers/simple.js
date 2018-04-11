/*jshint esversion: 6 */
const querystring = require('querystring'),
 Helper = require('./helpers');

module.exports = {
  "welcome" : welcome
};


function welcome(query){
  return Helper.sayMsg("Thank you for calling");
}
