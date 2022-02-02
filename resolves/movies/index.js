const moviesResolver = require("./moviesResolver");

module.exports = {
  Query: {
    ...moviesResolver,
  },
};
