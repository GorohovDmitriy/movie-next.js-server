const { ApolloServer } = require("apollo-server");
const typeDefs = require("./typesDefs");
const resolvers = require("./resolves");

const server = new ApolloServer({ typeDefs, resolvers });

const APOLLO_KEY = 'apollo'

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`
      🚀  Server is ready at ${url}
    `);
});
