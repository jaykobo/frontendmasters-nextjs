import React from "react";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <p>header</p>

      <Component {...pageProps} />

      <p>footer</p>
    </div>
  );
}
