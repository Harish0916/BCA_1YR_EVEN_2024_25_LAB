import { useEffect, useState } from 'react';

const App = () => {
    const [city, setCity] = useState('London');
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchWeather = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`http://localhost:3000/weather?city=${city}`);
            const data = await response.json();

            if (data.error) {
                setError(data.error.message);
                setWeather(null);
            } else {
                setWeather(data);
            }
        } catch {
            setError("Failed to fetch data");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchWeather();
    }, []);

    return (
        <div style={{ textAlign: "center", fontFamily: "Arial" }}>
            <h1>Weather App</h1>
            <input 
                type="text" 
                value={city} 
                onChange={(e) => setCity(e.target.value)} 
                placeholder="Enter city name"
            />
            <button onClick={fetchWeather}>Get Weather</button>

            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            {weather && (
                <div>
                    <h2>{weather.location.name}, {weather.location.country}</h2>
                    <img src={weather.current.condition.icon} alt="Weather Icon" />
                    <p>Temperature: {weather.current.temp_c}°C</p>
                    <p>Condition: {weather.current.condition.text}</p>
                    <p>Humidity: {weather.current.humidity}%</p>
                    <p>Wind Speed: {weather.current.wind_kph} kph</p>
                </div>
            )}
        </div>
    );
};

export default App;
