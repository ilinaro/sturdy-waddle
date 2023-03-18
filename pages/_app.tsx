import '../styles/globals.scss';

import { QueryClient, QueryClientProvider } from 'react-query';

import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import { PageType } from '@/types';
import { Provider } from 'react-redux';
import React from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';
import store from '@/reduxStore';

type MyAppProps = AppProps & {
  Component: PageType;
};
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
      refetchInterval: 2400000,
      staleTime: 900000,
    },
  },
});

const MyApp = ({ Component, pageProps }: MyAppProps) => {
  const getLayout = Component.getLayout || ((page) => page);
  const Layout = Component.layout ?? React.Fragment;

  return (
    <>
      <NextNProgress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow
        options={{ showSpinner: false }}
      />
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
        </Provider>
        {process.env.NODE_ENV === 'development' && (
          <ReactQueryDevtools initialIsOpen={false} />
        )}
      </QueryClientProvider>
    </>
  );
};

export default MyApp;
