var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/users', function (req, res, next) {
  res.send({
    id: '1',
    nombre: 'Diego'
  }, {
    id: '2',
    nombre: 'Enzo'
  });
});

module.exports = router;
