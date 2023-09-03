// Copyright Ayush Singh 2021,2022. All Rights Reserved.
// Project: folio
// Author contact: https://www.linkedin.com/in/alphaayush/
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { PortfolioProvider } from "../components/common/context/context";
import { prefix } from "../config/config";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PortfolioProvider value={{ prefix }}>
      <Component {...pageProps} />;
    </PortfolioProvider>
  );
}

export default MyApp;
