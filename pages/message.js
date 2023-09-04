// Imports
import Layout from "@/components/Layout";
import Link from "next/link";

export default function Message() {
  return (
    <Layout>
      <section className='thankyou flex flex-center col'>
        <h1>Thank you, for submitting your message</h1>
        <p>We will contact you once we have had time to review your message.</p>
        <div className='flex'>
          <Link href='/' legacyBehavior>
            <a>Home</a>
          </Link>
          <Link href='/about' legacyBehavior>
            <a>About</a>
          </Link>
          <Link href='/about/location' legacyBehavior>
            <a>Location</a>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
