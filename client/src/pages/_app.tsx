import { AppProps } from "next/app";
import Modal from 'react-modal';
import { Header } from "../components/Header";
import {SessionProvider as NextAuthProvider} from "next-auth/react"

import "../styles/global.scss";

Modal.setAppElement("#__next");

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
    </NextAuthProvider>
  );
}

export default MyApp;
