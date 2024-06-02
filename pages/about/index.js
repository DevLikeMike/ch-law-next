// Next/React
import Link from "next/link";
// Component import
import Layout from "@/components/Layout";
import OnPageContact from "@/components/OnPageContact";
import Image from "next/image";

export default function about() {
  return (
    <Layout>
      <section className='about'>
        <h2 className='about__title'>Casey Hall</h2>
        <hr />
        <div className='content__container'>
          <div className='content__info'>
            <p>
              Casey Hall is a lifelong resident of Letcher County, Kentucky.
              Casey was raised in Neon, Kentucky and graduated from Jenkins High
              School. Casey attended Eastern Kentucky University where he
              graduated Magna Cum Laude. Casey went on to graduate from
              Appalachian School of Law Magna Cum Laude in 2020. After passing
              the Kentucky bar, he decided to remain home in Letcher County to
              practice law.
            </p>
            <p>
              Casey has been married to his wife, Ashleigh Hall, of Mayking,
              Kentucky since 2018. Together they have three amazing children,
              and any time away from the practice of law is focused on spending
              time with his wife and kids. Outside of law Casey has helped coach
              basketball at Fleming-Neon and help develop properties in the
              downtown Whitesburg area.
            </p>
          </div>
          <div className='content__image'>
            <Image src={`/images/ch_about.jpg`} width={284} height={400} />
          </div>
        </div>
        <div className='page-container'>
          <section className='content'>
            <h2>Kentucky Personal Injury Attorney</h2>
            <p>
              Casey Hall, specializes in various services related to personal
              injury cases. Some of the services he offers may include:
            </p>
            <ol>
              <li>
                <Link href='/areasofpractice/car-accident' legacyBehavior>
                  <a>
                    <b>Car Accidents:</b>
                  </a>
                </Link>{" "}
                Assisting clients who have been injured in automobile accidents
                caused by negligence or misconduct by another driver. This could
                involve pursuing compensation for medical expenses, lost wages,
                pain and suffering, and other damages.
              </li>
              <li>
                <Link href='/areasofpractice/truck-accident' legacyBehavior>
                  <a>
                    <b>Truck Accidents:</b>
                  </a>
                </Link>{" "}
                Representing individuals who have been involved in accidents
                with commercial trucks, such as semitrailers or big rigs. These
                cases often require expertise in dealing with trucking
                companies, insurance companies, and complex regulations.
              </li>
              <li>
                <Link
                  href='/areasofpractice/motorcycle-accident'
                  legacyBehavior
                >
                  <a>
                    <b>Motorcycle Accidents:</b>
                  </a>
                </Link>{" "}
                Providing legal representation to motorcyclists who have been
                injured due to the negligence of other road users. This could
                involve proving fault, negotiating with insurance companies, and
                seeking fair compensation.
              </li>
              <li>
                <Link href='/areasofpractice/bus-accident' legacyBehavior>
                  <a>
                    <b>Bus Accidents:</b>
                  </a>
                </Link>{" "}
                Taking on cases involving injuries suffered aboard a bus due to
                the negligence or recklessness of a bus driver or another party.
              </li>
              <li>
                <Link href='/areasofpractice/drunk-driving' legacyBehavior>
                  <a>
                    <b>Drunk Driver Accidents:</b>
                  </a>
                </Link>{" "}
                Drunk driver accidents have devastating consequences, often
                resulting in severe injuries, property damage, and even
                fatalities. In such cases, it is imperative to have a
                knowledgeable and skilled attorney who can navigate the
                complexities of the legal system and fight for your rights
                effectively.
              </li>
              <li>
                <Link href='/areasofpractice/premises-liability' legacyBehavior>
                  <a>
                    <b>Premises Liability:</b>
                  </a>
                </Link>{" "}
                Representing individuals who have been injured due to dangerous
                conditions or negligence on someone else's property. This could
                include slip and falls, inadequate security, or other instances
                of property owner negligence.
              </li>
            </ol>
            <hr />
            <p>
              It is important to note that specific areas of specialization may
              vary for individual attorneys, and it is advisable to directly
              contact Casey Hall or his law firm for the most accurate and
              up-to-date information on the services he provides.
            </p>
          </section>
        </div>
      </section>
      <OnPageContact />
    </Layout>
  );
}
