var express = require('express')
var os = require("os");

var hostname = os.hostname();
var app = express()
 
app.get('/demo', function(req, res) {
  res.json({
    message: "Welcome to OpenShift! This data is brought to you by backend pod " + hostname,
    data: null
  })
})
 
app.listen(3000)
