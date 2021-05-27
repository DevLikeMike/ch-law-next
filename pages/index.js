// Next/React
import Link from "next/link";
// Component import
import Layout from "@/components/Layout";
import OnPageContact from "@/components/OnPageContact";
import Card from "@/components/Card";

export default function Home() {
  return (
    <Layout>
      <main className='homescreen'>
        <section className='hero flex flex-center col'>
          <h1 className='text-center'>
            <i>Let Us Fight For You</i>
          </h1>
          <Link href='/contact'>
            <a className='contact-us'>Contact Us</a>
          </Link>
        </section>
        <section className='when-to-hire'>
          <h2 className='text-center'>
            Should I Hire a Personal Injury Attorney?
          </h2>

          <div className='card-container'>
            <Card
              side='right'
              heading='Are you dealing with insurance companies?'
              description="After a claim, many insurance companies want to process your
                claim quickly and cheaply. Don't let them. You likely deserve
                more than their initial offer. Our attorneys are dedicated to getting you the settlement you deserve. Often times you deserve more than this initial offer, and our attorneys are trained to get you what you need."
              link='/about'
            />

            <Card
              side='left'
              heading='Are you on medical treatment?'
              description='Are you receiving medical treatment? While you might have
              options paying for medical treatment costs through a personal
              insurance policy, this may become overwhelming and prevent you
              from getting the treatment you need. Let our attorneys fight for you while you rest and recover. It is our mission to make this legal process as easy as possible for you.'
              link='/about'
            />

            <Card
              side='right'
              heading='Are you unable to drive?'
              description='Are you unable to drive to work? When your ability to drive is
              impacted, your entire life changes. Driving is an essential part of our lives, and you deserve to be compensated if your injury limits this fromyou. We can help resolve your
              claim, or file a law suit to help move you forward.'
              link='/about'
            />
          </div>
        </section>
        <OnPageContact />
      </main>
    </Layout>
  );
}
