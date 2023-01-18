import { useState, useEffect } from 'react';
import { getTrending } from 'movieAPI';
import { Link } from 'react-router-dom';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrending().then(r => setMovies([...r]));
  }, []);

  return (
    <main>
      <h1>Tranding today</h1>
      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <Link to={`${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};
