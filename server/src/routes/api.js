var express = require('express');

var router = new express.Router();

router.get('/dashboard', (req, res) => {
  res.status(200).json({
      message: "You are obviously cool enough to be her right now!!"
  });
});

module.exports = router;
