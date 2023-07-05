import "../styles/globals.css";
import "antd-mobile/dist/antd-mobile.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import "@sqb/design/lib/esm/index.css";
import { useEffect } from "react";
import { wvHideHead, AppBridge } from "../models/appBridge";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import reducer from "../reducers";

const store = createStore(reducer);

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    wvHideHead();
    new AppBridge().register();
  }, []);
  return (
    <>
      <Provider store={store}>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover"
          />
        </Head>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
MyApp.getInitialProps = async (appContext) => {
  const { Component, ctx } = appContext;
  let pageProps;
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps({
      ...ctx,
    });
  }
  return {
    pageProps,
    Component,
  };
};
export default MyApp;
