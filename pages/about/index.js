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
              time with his wife and kids.
            </p>
          </div>
          <div className='content__image'>
            <Image src={`/images/ch_about.jpg`} width={284} height={400} />
          </div>
        </div>
      </section>
      <OnPageContact />
    </Layout>
  );
}
