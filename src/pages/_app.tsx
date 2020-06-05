import { config, library } from '@fortawesome/fontawesome-svg-core';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import { faLaptopCode, faRocket } from '@fortawesome/free-solid-svg-icons';
import { AppProps } from 'next/app';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
library.add(faApple, faLaptopCode, faRocket);

import './../styles/global.css';

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
