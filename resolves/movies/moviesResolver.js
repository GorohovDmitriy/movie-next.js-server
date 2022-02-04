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
  searchMovies: async (parent, args, context, info) => {
    try {
      const response = await axios.get(
        `${baseUrl}${request.fetchSearchMovies}&query=${args.title}`
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
  detailsMovie: async (parent, args, context, info) => {
    try {
      const response = await axios.get(
        `${baseUrl}/movie/${args.id}?api_key=c91068f2bd5a35c89519c19dbe08ef59&language=en-US`
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
