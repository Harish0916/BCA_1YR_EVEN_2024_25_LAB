import http from 'http';

let books = [], idCounter = 1;

const server = http.createServer((req, res) => {
    const { method, url } = req;
    const id = url.startsWith('/books/') && +url.split('/')[2];
        
    if (url === '/books' && method === 'GET') return res.end(JSON.stringify(books));

    if (url === '/books' && method === 'POST') {
        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', () => {
            const { title, author } = JSON.parse(body);
            books.push({ id: idCounter++, title, author });
            res.end(JSON.stringify("Book created successfully"));
        });
        return;
    }
    
    if (id && method === 'PUT') {
        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', () => {
            const { title, author } = JSON.parse(body);
            const book = books.find(b => b.id === id);
            if (!book) return res.end(JSON.stringify("Book not found"));
            Object.assign(book, { title, author });
            res.end(JSON.stringify("Book updated successfully"));
        });
        return;
    }    
    if (id && method === 'DELETE') {
        const index = books.findIndex(b => b.id === id);
        if (index === -1) return res.end(JSON.stringify("Book not found"));
        books.splice(index, 1);
        return res.end(JSON.stringify("Book deleted successfully"));
    }
    return res.end(JSON.stringify("Invalid Route"));
});

server.listen(3000, () => console.log('Server running on port 3000'));
