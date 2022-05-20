import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: 'https://api-us-east-1.graphcms.com/v2/cl3di2x1u2a0n01xpgnobeyq6/master',
  cache: new InMemoryCache()
})

export default client;