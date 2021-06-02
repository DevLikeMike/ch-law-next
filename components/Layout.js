// React/next imports
import Head from "next/head";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
// Component imports
import Header from "./navigation/Header";
import Footer from "./Footer";

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='title' content='Casey Hall Attorney at Law, PLLC' />
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />

        <meta property='og:type' content='website' />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />

        <meta property='twitter:title' content={title} />
        <meta property='twitter:description' content={description} />

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

      <div className='banner flex jc-sb ai-c'>
        <Link href='/'>
          <img src='/images/logo.svg' alt='logo' className='pointer' />
        </Link>
        <div className='banner_disclaimer flex col jc-c'>
          <p>
            All consultations are FREE. Let us fight the insurance companies for
            you, we don't get paid unless we win your case.
          </p>
          <h2>
            {" "}
            <FaPhoneAlt style={{ marginRight: "1rem" }} />
            Call now (606)-775-0677
          </h2>
        </div>
      </div>

      <Header />

      <div>{children}</div>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "Casey Hall Attorney at Law, PLLC",
  description:
    "Eastern Kentucky Personal Injury Lawyer. Casey Hall Law helps clients in the Pikeville, Jenkins, and Whitesburg areas in a wide variety of personal injury cases.",
  keywords:
    "Lawyer, car wreck, dog bit, attorney, accident, personal injury, eastern Kentucky, KY, Fleming-Neon, Whitesburg, Pikeville, truck wreck, slip and fall, premises liability",
};
