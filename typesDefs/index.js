const { gql } = require("apollo-server");

const typesDefs = gql`
  type Movie {
    title: String
  }
  type MovieResults {
    page: Int
    results: [Movie]
    total_pages: Int
    total_results: Int
  }
  type Query {
    trendingMovies: MovieResults
  }
`;
module.exports = typesDefs;
