// src/app/layout.js
import "./globals.css";


export const metadata = {
  title: "ARQIS",
  description: "ARQIS",

};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}

