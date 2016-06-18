'use strict';

//  clog model
//  code to interact with clog data

const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const uuid = require('uuid');

let dbPath = path.join(__dirname, '../data/database.db')

const db = new sqlite3.Database(dbPath);


db.run(`create table if not exists clogs(
        id TEXT,
        price REAL,
        material TEXT
      );`);


exports.getAll = cb => {
  db.all('select * from clogs', cb);
};


exports.create = (clog, cb) => {
  // input validation
  if(!clog.price || !clog.material) {
    return cb({ error: 'Missing required field.' });
  }

  db.run('insert into clogs (id, price, material) values (?, ?, ?)', uuid(), clog.price, clog.material, cb);
};

