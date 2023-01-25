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

export const getMovieCredits = id => {
  return axios(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${KEY}&language=en-US`
  ).then(r => {
    return r.data.cast;
  });
};

export const getMovieReviews = id => {
  return axios(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${KEY}&language=en-US`
  ).then(r => {
    return r.data.results;
  });
};

export const getSearchMovies = text => {
  return axios(
    `https://api.themoviedb.org/3/search/movie?api_key=09c283735df88a6e72503a0c437e3e9c&query=${text}&page=1`
  ).then(r => {
    return r.data.results;
  });
};
