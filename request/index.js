const API_KEY = "c91068f2bd5a35c89519c19dbe08ef59";

const request = {
  fetchTrending: `/trending/movie/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopUpcoming: `/movie/upcoming?api_key=${API_KEY}&language=en-US`,
  fetchTopNowPlaying: `/movie/now_playing?api_key=${API_KEY}&language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchSearchMovies: `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=`,
};

module.exports = request;
