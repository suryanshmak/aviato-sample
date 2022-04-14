import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="icon"
            type="image/svg+xml"
            href="https://joinaviato.com/brand/favicon.ico"
          />
          <link
            rel="icon"
            type="image/png"
            href="https://joinaviato.com/brand/favicon.ico"
          />
        </Head>
        <body className="text-[#fff] bg-[#0f0f0f] overflow-x-hidden">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
