import CollectionContextProvider from '@/context/CollectionContextProvider';
import { client } from '@/lib/apollo-client';
import '@/styles/global.css';
import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <CollectionContextProvider>
        <Component {...pageProps} />
      </CollectionContextProvider>
    </ApolloProvider>
  );
}
