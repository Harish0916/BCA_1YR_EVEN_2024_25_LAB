import http from 'http';
import url from 'url';
const PORT = 3000;
let books = [], idCounter = 1;

const server = http.createServer((req, res)=>{
    const {url, method} = req;

    if(url === '/books' && method === 'GET'){
        res.end(JSON.stringify(books));
        return
    }
    if(url === '/books' && method === 'POST'){
        let body = ""
        req.on('data', chunk=> body+=chunk)
        req.on('end', ()=>{
            const {title, author} = JSON.parse(body)
            let book = {id:idCounter++, title, author}
            books.push(book)
            res.end(JSON.stringify(book));
        })
        return
    }
    const id = url.startsWith('/books/') && +url.split('/')[2];

    if(id && method === 'PUT'){
        let body = ''
        req.on('data', chunk => body+=chunk)
        req.on('end', ()=>{
            const {title, author} = JSON.parse(body);
            const book = books.find((b)=>b.id===id)
            if(!book) res.end(JSON.stringify("book not found"))
            Object.assign(book, {title, author});
            res.end(JSON.stringify(book));
        })
        return
    }

    if(id && method === 'DELETE'){
        const index = books.findIndex(b=>b.id === id)
        if(index === -1) res.end(JSON.stringify("book not found"))
        books.splice(index,1)
        return res.end(JSON.stringify("Book deleted successfully"));
    }

    res.end("Path Not found")
})

server.listen(PORT, ()=>{
    console.log(`Server started http://localhost:${PORT}`)
})