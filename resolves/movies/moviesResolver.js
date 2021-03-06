const axios = require("axios");
const { request, API_KEY } = require("../../request");
const baseUrl = require("../../request/baseUrl");

module.exports = {
  trendingMovies: async (parent, args, context, info) => {
    try {
      const response = await axios.get(
        `${baseUrl}${request.fetchTrending}&page=${args.page}`
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
  topMovies: async (parent, args, context, info) => {
    try {
      const response = await axios.get(
        `${baseUrl}${request.fetchTopRated}&page=${args.page}`
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
  nowPlaying: async (parent, args, context, info) => {
    try {
      const response = await axios.get(
        `${baseUrl}${request.fetchTopNowPlaying}&page=${args.page}`
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
        `${baseUrl}${request.fetchSearchMovies}&query=${args.title}&page=${args.page}`
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
        `${baseUrl}/movie/${args.id}?api_key=${API_KEY}&language=en-US`
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
