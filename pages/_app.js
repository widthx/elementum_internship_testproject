import React from 'react';
import App, { Container } from 'next/app';

import { library, config, dom } from '@fortawesome/fontawesome-svg-core' 
import { faSearch } from '@fortawesome/free-solid-svg-icons'

library.add(faSearch)
config.autoAddCss = false //removes enlarged icons on reload

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default MyApp;