const axios = require("axios");
const request = require("../../request");

module.exports = {
  trendingMovies: async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3${request.fetchTrending}`
      );
      const { data } = response;
      return {
        ...data,
      };
    } catch (error) {
      return {
          error
      }
    }
  },
  topMovies: async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3${request.fetchTopRated}`
      );
      const { data } = response;
      return {
        ...data,
      };
    } catch (error) {
      return {
        error,
      };
    }
  },
};
