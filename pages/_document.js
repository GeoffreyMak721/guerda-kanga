import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          <script src="/js/vendor/jquery-1.12.4.min.js"></script>
          <script src="/js/vendor/jquery.cookie.js"> </script>
          <script src="/js/vendor/modernizr-3.7.1.min.js"></script>
          <script src="/js/popper.min.js"></script>
          <script src="/js/bootstrap.min.js"></script>
          <script src="/js/slick.min.js"></script>
          <script src="/js/jquery.easing.min.js"></script>
          <script src="/js/vendor/jquery.fancybox.min.js"></script>
          <script src="/js/scrolling-nav.js"></script>
          <script src="/js/ajax-contact.js"></script>
          <script src="/js/front.js"></script>
          <script src="/js/main.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
