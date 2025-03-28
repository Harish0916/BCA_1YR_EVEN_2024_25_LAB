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
    con.query("ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY;", (err)=>{
        if (err) throw err;
        console.log("Table altered successfully.");
        con.end();
    });
});