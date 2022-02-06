import { ApolloClient, InMemoryCache } from '@apollo/client'

const graphqlClient = new ApolloClient({
  uri: `http://localhost:3000/api/graphql`,
  cache: new InMemoryCache(),
})

export default graphqlClient
