const mysql2 = require('mysql2');

const pool = mysql2.createPool({
  host: 'bqrtrrwe7luaqt4me6aj-mysql.services.clever-cloud.com',
  user: 'uhccvg8e63vwkkj1',
  password: 'TblcIYsmbmsPvB2lJIBA', 
  database: 'bqrtrrwe7luaqt4me6aj',
});

module.exports = pool.promise();

