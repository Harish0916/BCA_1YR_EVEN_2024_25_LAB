import http from "http";
import fetch from "node-fetch";
import cors from "cors";
import connect from "connect";

const API_URL = "https://freetestapi.com/api/v1/movies";

const app = connect();
app.use(cors());
app.use(
  http.createServer(async (req, res) => {
    if (req.url === "/movies" && req.method === "GET") {
        const response = await fetch(API_URL);
        const data = await response.json();
        res.end(JSON.stringify(data));
    } else {
      res.end(JSON.stringify({ message: "Route not found" }));
    }
  })
);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
