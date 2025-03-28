import http from "http";
import fetch from "node-fetch";
import dotenv from "dotenv";
import connect from "connect";
import cors from "cors";

dotenv.config();

const API_KEY = process.env.WEATHER_API_KEY;
const PORT = 3000;

const app = connect();
app.use(cors());
app.use(
  http.createServer(async (req, res) => {
    if (req.url === "/weather" && req.method === "GET") {
      const urlParams = new URL(req.url, `http://${req.headers.host}`);
      const city = urlParams.searchParams.get("city") || "London";
      try {
        const weatherUrl = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;
        const response = await fetch(weatherUrl);
        const data = await response.json();
        res.end(JSON.stringify(data));
      } catch (error) {
        res.end(JSON.stringify({ error: "Failed to fetch weather data" }));
      }
    } else {
      res.end("Route not found");
    }
  })
);
app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}/`)
);
