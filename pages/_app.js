import '../styles/globals.css'
import 'antd/dist/antd.css'
import { ApolloClient, InMemoryCache,ApolloProvider} from '@apollo/client';
const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache()
});
 
function MyApp({ Component, pageProps }) {
  return <ApolloProvider client={client}><Component {...pageProps} /></ApolloProvider>
}

export default MyApp
