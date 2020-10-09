var express = require('express');
var router = express.Router();
const pool = require('../models/db');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/:id', function (req, res, next) {
  const sql = 'SELECT * FROM story WHERE id = ?';

  pool.query(sql, [req.params.id], function (err, result, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      id: req.params.id,
      result: result
    });
  });
});

module.exports = router;
