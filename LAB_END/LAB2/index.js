import http from 'http';
import url from 'url';

const users = [
  { username: 'testuser', password: 'password123' },
  { username: 'anotheruser', password: 'securePassword' },
];

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;

  if (path === '/' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
      <form action="/login" method="post">
        <label for="username">Username:</label><br>
        <input type="text" id="username" name="username"><br>
        <label for="password">Password:</label><br>
        <input type="password" id="password" name="password"><br><br>
        <input type="submit" value="Submit">
      </form>
    `);
  } else if (path === '/login' && req.method === 'POST') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
    });
    req.on('end', () => {
      const params = new URLSearchParams(body);
      const username = params.get('username');
      const password = params.get('password');

      const user = users.find((u) => u.username === username && u.password === password);
      
      if (!username || !password) return res.end('Username and password are required.');
      if (user) return res.end('Login successful!');
      else res.end('Invalid username or password.');
    });
  } else res.end('Not Found');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});