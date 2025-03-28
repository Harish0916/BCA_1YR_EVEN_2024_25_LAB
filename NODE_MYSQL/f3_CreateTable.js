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
    con.query("CREATE TABLE customers(name VARCHAR(255), address VARCHAR(255))", err=>{
        if (err) throw err;
        console.log("Table created successfully");
        con.end();
    });
});