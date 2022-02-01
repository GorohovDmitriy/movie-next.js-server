const axios = require("axios");
const request = require("../../request");
const baseUrl = require("../../request/baseUrl");

module.exports = {
  trendingMovies: async () => {
    try {
      const response = await axios.get(`${baseUrl}${request.fetchTrending}`);
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
  topMovies: async () => {
    try {
      const response = await axios.get(`${baseUrl}${request.fetchTopRated}`);
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
  nowPlaying: async () => {
    try {
      const response = await axios.get(
        `${baseUrl}${request.fetchTopNowPlaying}`
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
