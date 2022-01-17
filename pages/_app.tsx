import React, { useMemo } from 'react';
import App, { AppProps, AppContext } from 'next/app';
import Head from 'next/head';

// i18n
import { appWithTranslation } from 'next-i18next';
// recoil
import { RecoilRoot } from 'recoil';
// swr
import useSWR, { SWRConfig } from 'swr';

// styles
import '~/styles/variables.less';
import { globalStyles } from '../src/styles/globals';
import { ThemeProvider } from '@emotion/react';
import theme from '../src/styles/theme';

const MyApp = ({ Component, pageProps }: AppProps) => {
  console.log(pageProps);
  const renderMeta = useMemo(() => {
    if (!pageProps.meta) return;
    const { title, description, image, url } = pageProps.meta;

    return (
      <>
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
      </>
    );
  }, [pageProps]);

  return (
    <React.Fragment>
      <Head>
        <title>{pageProps.title}</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, maximum-scale=1"
        />
        {renderMeta}
      </Head>
      <SWRConfig
        value={{
          refreshInterval: 3000,
          fetcher: (resource, init) => fetch(resource, init).then((res) => res.json()),
        }}
      >
        <RecoilRoot>
          <ThemeProvider theme={theme}>
            {globalStyles}
            <Component {...pageProps} />
          </ThemeProvider>
        </RecoilRoot>
      </SWRConfig>
    </React.Fragment>
  );
};

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);

  return {
    ...appProps,
  };
};

export default appWithTranslation(MyApp);
