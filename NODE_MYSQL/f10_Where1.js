import mysql from 'mysql'

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123",
  database: "nodeDB"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM customers WHERE address LIKE 'G%'", function (err, result) {
    if (err) throw err;
    console.table(result);
    con.end();
  });
});