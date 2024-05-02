import { GoogleAnalytics } from '@next/third-parties/google';
import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
      <GoogleAnalytics gaId="UA-60251558-1" />
    </Html>
  );
}
