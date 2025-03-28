import mysql from 'mysql';
const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123'
})
con.connect(err=>{
    if(err) throw err;
    console.log("Connected");
    con.query("SHOW DATABASES", (err, results)=>{
        if(err) throw err;
        console.log("Databases List:\n");
        results.forEach((row, i) => {
            console.log(i+1, row.Database)
        });
        con.end()
    })
})