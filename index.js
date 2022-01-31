const { ApolloServer, gql } = require("apollo-server");
const typeDefs = require("./typesDefs");
const resolvers = require("./resolves");

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
