export const handleFetchHeroMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
  );
  const datas = await response.json();
  return datas.results.slice(0, 3);
};

export const handleFetchCultMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
  );
  const datas = await response.json();
  return datas.results.slice(0, 20);
};

export const handleFetchRecomMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
  );
  const datas = await response.json();
  return datas.results.slice(0, 20);
};

export const handleFetchNewMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
  );
  const datas = await response.json();
  return datas.results.slice(0, 20);
};

export const handleFetchSingleMovie = async (id) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
  );
  const datas = await response.json();
  return datas;
};

export const handleFetchMovieReviews = async (id) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
  );
  const datas = await response.json();
  return datas.results;
};

export const handleFetchMovieVideos = async (id) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
  );
  const datas = await response.json();
  return datas.results;
};

export const handleFetchSimilarMovies = async (id) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
  );
  const datas = await response.json();
  return datas.results;
};
