import { ApolloProvider } from '@apollo/client';
import { client } from '../apollo/client';
import { AppProps } from 'next/app';
import "../styles/globals.css"
import Header from '../components/Header';

function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Header>
        <Component {...pageProps} />
      </Header>
    </ApolloProvider>
  )
}

export default App;