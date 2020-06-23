import { withHydrate } from "effector-next";
import "../style.css";

const enhance = withHydrate();

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default enhance(App);
