const axios = require("axios");
const request = require("../../request");

module.exports = {
  trendingMovies: async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3${request.fetchTrending}`
    );
    const { data } = response;

    return {
      ...data,
    };
  },
  topMovies: async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3${request.fetchTopRated}`
    );
    const { data } = response;

    return {
      ...data,
    };
  },
};
