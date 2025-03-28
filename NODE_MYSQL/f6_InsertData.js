import mysql from 'mysql';
const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123',
    database:'nodeDB'
})
con.connect(err=>{
    if(err) throw err;
    console.log("Connected");
    con.query("INSERT INTO customers(name, address) VALUES ('Daya', 'Gwalior')", (err, results)=>{
        if (err) throw err;
        console.log("Number of records inserted: " + results.affectedRows + " with ID:" + results.insertId);
        con.end();
    });
});