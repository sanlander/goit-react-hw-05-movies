import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { SearchForm } from '../../components/SearchForm/SearchForm';
import { getSearchMovies } from 'movieAPI';

export const Movies = () => {
  const location = useLocation();
  const [movie, setMovie] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const filterParam = searchParams.get('query') ?? '';

  useEffect(() => {
    if (filterParam.length === 0) return;

    getSearchMovies(filterParam).then(setMovie);
  }, [filterParam]);

  const handleFormSubmit = value => {
    setSearchParams(value !== '' ? { query: value } : {});
  };

  return (
    <main>
      <SearchForm values={filterParam} onClick={handleFormSubmit} />
      {movie && (
        <ul>
          {movie.map(({ title, id }) => (
            <li key={id}>
              <Link to={`${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};
