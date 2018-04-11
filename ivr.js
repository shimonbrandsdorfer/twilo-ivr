/*jshint esversion: 6 */

const express = require('express');
const app = express();
const router = express.Router();
const simple = require('./handlers/simple');

//handle simple steps
router.get('/simple/:step', (req, res) => {
  simple[req.params.step](req.query)
  .then(twiml => {
    res.type('text/xml');
    res.send(twiml.toString());
  })
  .catch(err => {
    res.sendError(err);
  });
});


module.exports = router;
