var express = require('express')
var os = require("os");

var hostname = os.hostname();
var app = express()

function nocache(req, res, next) {
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  res.header('Expires', '-1');
  res.header('Pragma', 'no-cache');
  next();
}
 
app.get('/demo', nocache, function(req, res) {
  res.json({
    message: "Welcome to OpenShift! This data is brought to you by backend pod " + hostname,
    data: null
  })
})
 
app.listen(3000)
