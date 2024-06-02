// Next/React
import Link from "next/link";
// Other Imports
import Map from "@/components/Map";
import Layout from "@/components/Layout";
import OnPageContact from "@/components/OnPageContact";

export default function location() {
  return (
    <Layout>
      <Map />
      <main className='page-container'>
        <section className='content'>
          <h1 className='title'>Location</h1>
          <hr />
          <p>
            Casey Hall Attorney at Law, PLLC, is located directly across the
            street from the Whitesburg Fire Department at 23 E Main St,
            Whitesburg, Kentucky.
          </p>
          <p>
            Free consultations may be scheduled to meet in person at an agreed
            upon location and time. However, due to COVID-19, most consultations
            can be taken care of online via zoom or another online video chat
            program. Contact us today to get your consultation scheduled.
          </p>
          <section>
            <h2>Serving Areas</h2>
            <hr />
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
          <OnPageContact bgClass='onpage_contact flex flex-center blue' />
        </section>
      </main>
    </Layout>
  );
}
