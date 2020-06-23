import { withHydrate } from "effector-next";
// глобальные стили
import "../style.css";

// глобальный компонент
const enhance = withHydrate();

// Общий компонент для всех
function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default enhance(App);
