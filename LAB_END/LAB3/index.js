import http from "http";
import url from 'url'

const PORT = 8000;
const server = http.createServer((req, res) => {
    // res.write(`<h1>welcome${req.url}</h1>`);

    // const q = url.parse(req.url, true).query;
    // res.write(`<h1>Hello ${q.name} and ${q.age}</h1>`);

    const datetime = new Date().toLocaleString()
    res.write(`
        <html>
            <head>
                <meta http-equiv="refresh" content="1">
            </head>
            <body>
                <h1>${datetime}</h1>
            </body>
        </html>
    `)

    res.end();
});
server.listen(PORT, () => {
  console.log(`server started http://localhost:${PORT}`);
});











//   const q = url.parse(req.url, true).query;
//   res.write(`<h1>welcome ${q.name}</h1>`);



