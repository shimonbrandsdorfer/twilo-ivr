/*jshint esversion: 6 */
const Twilio = require('twilio');


module.exports = {
  sayMsg : sayMsg
};


function sayMsg(msg){
  let VoiceResponse = Twilio.twiml.VoiceResponse,
      response = new VoiceResponse();

  response.say(msg);
  return Promise.resolve(response);
}
