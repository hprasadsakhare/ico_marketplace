import Head from "next/head";
import toast, { Toaster } from "react-hot-toast";
import "../styles/globals.css";

// Internal imports
import { StateContextProvider } from "../Context/index";

export default function App({ Component, pageProps }) {
  return (
    <>
      <StateContextProvider>
        <Component {...pageProps} />
        <Toaster />
      </StateContextProvider>
    </>
  );
}
