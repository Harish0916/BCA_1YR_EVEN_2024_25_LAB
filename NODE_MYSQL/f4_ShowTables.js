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
    con.query("SHOW TABLES", (err, results)=>{
        if (err) throw err;
        console.log("Tables:");
        results.forEach((table, i) => {
            console.log(i+1,table.Tables_in_nodedb)
        });
        con.end();
    });
});