import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {createRef, useEffect} from 'react';

export const WINDOW_WIDTH = createRef();
export const WINDOW_HEIGHT = createRef();

export default function App({Component, pageProps}: AppProps) {
  useEffect(() => {
    
  }, []);

  return <Component {...pageProps} />
}
