import mysql from 'mysql';
const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123',
    database:'nodeDB'
})
var values = [
    ['Harish', 'Gwalior'],
    ['Daya', 'Gudur'],
    ['Anjali', 'Mahgaown'],
    ['Dharmendra', 'Datia']
]
con.connect(err=>{
    if(err) throw err;
    console.log("Connected");
    con.query("INSERT INTO customers(name, address) VALUES ?", [values], (err, results)=>{
        if (err) throw err;
        console.log("Number of records inserted: " + results.affectedRows);
        con.end();
    });
});