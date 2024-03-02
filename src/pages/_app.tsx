import DocumentContextProvider from "@/components/DocumentContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DocumentContextProvider>
      <Component {...pageProps} />
    </DocumentContextProvider>
  );
}
