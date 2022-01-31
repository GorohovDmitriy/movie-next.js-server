const moviesResolver = require("./movieResolver");

module.exports = {
  Query: {
    ...moviesResolver,
  },
};
