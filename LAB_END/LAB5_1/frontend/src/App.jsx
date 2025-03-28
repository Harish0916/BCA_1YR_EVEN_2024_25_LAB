import React, { useEffect, useState } from 'react';
import './Movie.css';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:3000/movies')
            .then((res) => res.json())
            .then((data) => {
                setMovies(data || []);
                setLoading(false);
            })
            .catch((err) => console.error('Error fetching movies:', err));
    }, []);
    return (
        <div className="container">
            <h2 className="title">Movie List</h2>
            {loading ? <p className="loading">Loading...</p> : (
                <ul className="movie-list">
                    {movies.map((movie, index) => (
                        <li key={index} className="movie-item">
                            <img src={movie.poster} alt={movie.title} className="movie-poster" />
                            <p>{movie.title} ({movie.year})</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Movies;