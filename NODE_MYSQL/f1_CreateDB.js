import mysql from 'mysql';
const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123'
})
con.connect(err=>{
    if (err) throw err;
    console.log("Connected")
    con.query("CREATE DATABASE nodeDB", err=>{
        if (err) throw err;
        console.log("Database created successfully.");
        con.end();
    })
})