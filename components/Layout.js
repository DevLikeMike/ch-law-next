// React/next imports
import Head from "next/head";
// Component imports
import Header from "./navigation/Header";
import Footer from "./Footer";
// Style imports

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <link rel='icon' href='/favicons/favicon.ico' />
        <link
          href='/favicons/apple-touch-icon.png'
          rel='apple-touch-icon'
          sizes='180x180'
        />
        <link
          href='/favicons/favicon-32x32.png'
          rel='icon'
          sizes='32x32'
          type='image/png'
        />
        <link
          href='/favicons/favicon-16x16.png'
          rel='icon'
          sizes='16x16'
          type='image/png'
        />
      </Head>

      <Header />

      <div>{children}</div>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "Casey Hall Law | Personal Injury Lawyer",
  description:
    "Eastern Kentucky Personal Injury Lawyer. Casey Hall Law helps clients in the Pikeville, Jenkins, and Whitesburg areas in a wide variety of personal injury cases.",
  keywords:
    "Lawyer, car wreck, dog bit, attorney, accident, personal injury, eastern Kentucky, KY, Fleming-Neon, Whitesburg, Pikeville",
};
