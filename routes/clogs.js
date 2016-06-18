'use strict';

const express = require('express');
let router = express.Router();

let Clog = require('../models/clog');

//   /clogs

//  Clog  - (uppercase singular) - the model

//  clog  - (lowercase singular) - an instance of the data (a row)
//                   a single clog object

//  clogs  - (lowercase plural) - an array of clog objects (rows)

//  GET /clogs
router.get('/', (req, res) => {
  Clog.getAll(function(err, clogs) {
    res.status(err ? 400 : 200).send(err || clogs);
  });
});

// POST /clogs
router.post('/', (req, res) => {
  // { price: 100, material: 'wood' }

  Clog.create(req.body, function(err) {
    if(err) return res.status(400).send(err);

    res.send();
  });
});

module.exports = router;
