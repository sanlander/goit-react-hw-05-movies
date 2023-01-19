import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getMovieDetails } from 'movieAPI';
import {
  DetailsContainer,
  DetailsImg,
  AdditionalContainer,
} from './MovieDetails.styled';
import { BtnGoBack } from '../../components/BtnGoBack/BtnGoBack';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) {
    return null;
  }
  const { title, poster_path, release_date, vote_average, overview, genres } =
    movie;

  const BASE_URL_IMG = `https://image.tmdb.org/t/p/w500${poster_path}`;
  const releaseYear = release_date.slice(0, 4);
  const score = (vote_average * 10).toFixed(0);
  //   console.log(genres);

  return (
    <>
      <BtnGoBack />
      <DetailsContainer>
        <DetailsImg>
          <img src={BASE_URL_IMG} alt={title} />
        </DetailsImg>
        <div>
          <h1>
            {title} ({releaseYear})
          </h1>
          <p>User Score: {score} %</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          {genres.map(({ name }) => (
            <span key={name}>{name} &nbsp;</span>
          ))}
        </div>
      </DetailsContainer>
      <AdditionalContainer>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="/"> Cast </Link>
          </li>
          <li>
            <Link to="/"> Reviews </Link>
          </li>
        </ul>
      </AdditionalContainer>
    </>
  );
};
