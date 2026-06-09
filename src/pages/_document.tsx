import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="zh-TW">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#0066cc" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}