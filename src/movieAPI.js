import axios from 'axios';

const KEY = '09c283735df88a6e72503a0c437e3e9c';

export const getTrending = () => {
  return axios(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${KEY}`
  ).then(r => r.data.results);
};

export const getMovieDetails = id => {
  return axios(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=en-US`
  ).then(r => {
    return r.data;
  });
};
