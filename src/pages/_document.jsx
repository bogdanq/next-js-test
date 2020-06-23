import Document, { Html, Head, Main, NextScript } from "next/document";
import { withFork } from "effector-next";

const enhance = withFork({ debug: false });

/**
  класс Document можно переопределить, это то, как выглядит страница
 */
class MyDocument extends Document {
  render() {
    return (
      <Html>
        {/* тут все стили, заголовки, метатеги */}
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default enhance(MyDocument);
