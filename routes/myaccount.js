var express = require('express');
var router = express.Router();

router.get('/myaccount', function(req, res, next) {
 res.send("MY ACCOUNT PAGE WORKS")
});

  console.log("ACCOUNT PAGE WORKS");

  module.exports = router;