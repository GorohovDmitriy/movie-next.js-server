const { gql } = require("apollo-server");

const typesDefs = gql`
  type Movie {
    poster_path: String
    overview: String
    release_date: String
    id: Int
    original_title: String
    original_language: String
    title: String
    backdrop_path: String
    popularity: Int
    vote_count: Int
    vote_average: Int
  }
  type Dates {
    maximum: String
    minimum: String
  }
  type GenreDetails {
    id: Int
    name: String
  }
  type ProductCompanie {
    name: String
    id: Int
    logo_path: String
    orogon_country: String
  }
  type ProductCountrie {
    name: String
    iso_3166_1: String
  }
  type MovieDetails {
    backdrop_path: String
    budget: Int
    genres: [GenreDetails]
    homepage: String
    id: Int
    original_language: String
    original_title: String
    overview: String
    poster_path: String
    production_companies: [ProductCompanie]
    production_countries: [ProductCountrie]
    release_date: String
    revenue: Int
    runtime: Int
    status: String
    tagline: String
    title: String
    video: Boolean
    vote_average: Int
    vote_count: Int
  }
  type MovieResults {
    page: Int
    results: [Movie]
    total_pages: Int
    total_results: Int
  }
  type Query {
    trendingMovies: MovieResults
    topMovies: MovieResults
    nowPlaying: MovieResults
    searchMovies(title: String!): MovieResults
    detailsMovie(id: Int): MovieDetails
  }
`;
module.exports = typesDefs;
