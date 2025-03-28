import mysql from 'mysql'

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123",
  database: "nodeDB"
});

con.connect(function(err) {
  if (err) throw err;
  const add = 'Gwalior';
  const sql = "SELECT * FROM customers WHERE address = " + mysql.escape(add);
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.table(result);
    con.end();
  });
});