/*jshint esversion: 6 */

const express = require("express"),
  app = express(),
  IVR_ROUTER = require('./ivr'),
  config = require('config.json');

// Tell express to use this router with /api before.
// You can put just '/' if you don't want any sub path before routes.

app.use("/ivr", IVR_ROUTER);

// Listen to this Port

app.listen(config.port, function(){
  console.log("Live at Port " + config.port);
});
