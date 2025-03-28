import mysql from 'mysql'

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123",
  database: "nodeDB"
});

con.connect(function(err) {
  if (err) throw err;
  const name = 'Daya'
  const add = 'G%';
  const sql = "SELECT * FROM customers WHERE name = ? OR address = ?";
  con.query(sql, [name, add], function (err, result) {
    if (err) throw err;
    console.table(result);
    con.end();
  });
});