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
          <h1 className='text-center'>Kentucky Personal Injury Lawyer</h1>
          <p className='text-center'>
            <i>Let Us Fight For You</i>
          </p>
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
              heading='Have you been injuried in a car accident?'
              description='If you or someone you love, have been injuried in a car or truck accident, you may need assistance with what follows. Many times insurance companies will not want to take responsibility for an accident, or will not give you the compensation you deserve. Let us fight for you in your time of need.'
              link='/areasofpractice/car-accident'
            />

            <Card
              side='left'
              heading='Are you dealing with insurance companies?'
              description="After a claim, many insurance companies want to process your
                claim quickly and cheaply. Don't let them. You likely deserve
                more than their initial offer. Our attorneys are dedicated to getting you the settlement you deserve. Often times you deserve more than this initial offer, and our attorneys are trained to get you what you need."
              link='/areasofpractice/car-accident'
            />

            <Card
              side='right'
              heading='Are you receiving medical treatment?'
              description='While you might have
              options paying for medical treatment costs through a personal
              insurance policy, this may become overwhelming and prevent you
              from getting the treatment you need. Let our attorneys fight for you while you rest and recover. It is our mission to make this legal process as easy as possible for you.'
              link='/areasofpractice/car-accident'
            />

            <Card
              side='left'
              heading='Are you unable to drive?'
              description='When your ability to drive is
              impacted, your entire life changes. Driving is an essential part of our lives, and you deserve to be compensated if your injury limits this fromyou. We can help resolve your
              claim, or file a law suit to help move you forward.'
              link='/areasofpractice/car-accident'
            />
          </div>
        </section>
        <OnPageContact />
      </main>
    </Layout>
  );
}
