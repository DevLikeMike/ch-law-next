// Next/React
import Link from "next/link";
// Component import
import Layout from "@/components/Layout";
import OnPageContact from "@/components/OnPageContact";
import Card from "@/components/Card";
// Package imports
import { FaHandshake, FaMoneyBill, FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <Layout>
      <main className='homescreen'>
        <section className='hero flex flex-center col'>
          <h2 className='text-center'>Kentucky Personal Injury Lawyer</h2>
          <p className='text-center'>
            <i>Let Us Fight For You</i>
          </p>
          <Link href='/contact' legacyBehavior>
            <a className='contact-us'>Contact Us</a>
          </Link>
        </section>
        <section className='header__section'>
          <div className='info_left'>
            <h1>Car Accident Attorney</h1>
            <h2>
              Let Us Fight for Maximum Compensation - Call (606)775-0677 Now
            </h2>
            <p>
              At The Law Offices of Casey Hall Law, P.L.L.C., we are dedicated
              to righting the wrongs that car accident victims have endured. It
              is not uncommon for an insurance company to try to get you to
              settle for less. We will not allow this, and we are not afraid to
              go to trial if it means giving you full compensation for your car
              wreck. If you or a loved one were injured in a car accident in
              Whitesburg, Kentucky or a nearby area, please contact us today.
              The sooner you contact us, the sooner we can begin fighting for
              your deserved compensation. Rest assured that when you choose
              Casey Hall Law, we will provide the fierce legal action to your
              case's needs and the representation you deserve.
            </p>
          </div>

          <div className='info_right'>
            <h2>WHAT SETS US APART?</h2>

            <section className='right_section'>
              <h3>
                <FaHandshake /> Cost Free until We Win
              </h3>
              <p>
                We offer free consultations. We fight for you until we make a
                recovery and we won't charge you a dime until your case is
                closed. We win together.
              </p>
            </section>

            <section className='right_section'>
              <h3>
                <FaMoneyBill /> We Will Maximize Your Recovery
              </h3>
              <p>
                It can be hard to stand up to large insurance companies, and
                they may tell you they cannot offer more. Let us fight for you
                and your recovery. We are not scare to stand up to these
                companies and demand what you deserve.
              </p>
            </section>

            <section className='right_section'>
              <h3>
                <FaHome /> A Local Attorney You Can Trust
              </h3>
              <p>
                We are based locally out of Whitesburg, Kentucky. We are in the
                community making a difference and want to see our community
                thrive and grow. We will make sure you get the settlement you
                deserve!
              </p>
            </section>
          </div>
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
        <section className='content'>
          <h2>Serving Areas</h2>
          <p>
            If you or a loved have been injured in South East Kentucky Region
            due to someone else's negligence or recklessness, it is crucial to
            have a dedicated and experienced personal injury lawyer by your
            side. Casey Hall stands out as a trusted advocate for justice and
            the protection of individual rights.
          </p>
          <p>
            Our firm is dedicated to representing those injured anywhere in
            Letcher County, including but not limited to:
          </p>
          <ul>
            <li>
              <Link href='/areas/whitesburg' legacyBehavior>
                <a>Whitesburg, KY</a>
              </Link>
            </li>
            <li>
              <Link href='/areas/fleming-neon' legacyBehavior>
                <a>Fleming Neon, KY</a>
              </Link>
            </li>
            <li>
              <Link href='/areas/hazard' legacyBehavior>
                <a>Hazard, KY</a>
              </Link>
            </li>
            <li>
              <Link href='/areas/jenkins' legacyBehavior>
                <a>Jenkins, KY</a>
              </Link>
            </li>
            <li>
              <Link href='/areas/pikeville' legacyBehavior>
                <a>Pikeville, KY</a>
              </Link>
            </li>
            <li>
              <Link href='/areas/knott-county' legacyBehavior>
                <a>Knott County, KY</a>
              </Link>
            </li>
            <li>
              <Link href='/areas/letcher-county' legacyBehavior>
                <a>Letcher County, KY</a>
              </Link>
            </li>
            <li>
              <Link href='/areas/perry-county' legacyBehavior>
                <a>Perry County, KY</a>
              </Link>
            </li>
            <li>
              <Link href='/areas/pike-county' legacyBehavior>
                <a>Pike County, KY</a>
              </Link>
            </li>
          </ul>
        </section>
        <OnPageContact />
      </main>
    </Layout>
  );
}
