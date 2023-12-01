import "./globals.css";
import Header from "./components/menu/header";
import Footer from "./components/sections/footer";
import Head from "next/head";

export const metadata = {
  title: "Avi software",
  description: "Avi Software",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Avi Software</title>
      </Head>
      <body>
        <Header />

        {children}
        <Footer />
      </body>
    </html>
  );
}
