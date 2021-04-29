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
        <link rel='icon' href='/favicon.ico' />
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
    "Eastern Kentucky Personal Injury Lawyer. Casey Hall Law helps clients in the Pikeville, Jenkins, and Whitesburg areas in a wide variety of personal injury cases. If you or a loved one has been injured, contact us right away.",
  keywords:
    "Lawyer, car wreck, dog bit, attorney, accident, personal injury, eastern Kentucky, KY, Fleming-Neon, Whitesburg, Pikeville",
};
