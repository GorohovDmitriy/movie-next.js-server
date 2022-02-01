const { gql } = require("apollo-server");

const typesDefs = gql`
  type Movie {
    poster_path: String
    title: String
    backdrop_path: String
    popularity: Int
    vote_count: Int
    vote_average: Int
    overview: String
    release_date: String
    id: Int
    original_title: String
  }
  type Dates {
    maximum: String
    minimum: String
  }

  type MovieResults {
    page: Int
    results: [Movie]
    total_pages: Int
    total_results: Int
    dates: Dates
  }
  type Query {
    trendingMovies: MovieResults
    topMovies: MovieResults
    nowPlaying: MovieResults
  }
`;
module.exports = typesDefs;
