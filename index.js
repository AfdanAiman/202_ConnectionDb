const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;
const pool = new Pool({
  user: 'postgres',        
  host: 'localhost',
  database: 'mahasiswa',
  password: 'afdan123',  
  port: 5432,
});

module.exports = pool;