import { ApolloClient, InMemoryCache } from '@apollo/client'

const graphqlClient = new ApolloClient({
  uri: `api/graphql`,
  cache: new InMemoryCache(),
})

export default graphqlClient
