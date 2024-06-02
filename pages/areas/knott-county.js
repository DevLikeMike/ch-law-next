import Layout from "@/components/Layout";
import OnPageContact from "@/components/OnPageContact";

// Change Function name per page
export default function KnottCounty() {
  return (
    <Layout
      //Change Title per page for meta
      title='Casey Hall Law | Knott County Lawyer'
      //Change Description per page for meta
      description='Casey Hall is a personal injury lawyer who specializes in car accidents. If you or someone you love have been seriously injury in a car accident in the Knott County area, please contact us today!'
    >
      <main className='page-container'>
        <section className='content'>
          {/********************************
          Content layout key 
          h2 for headers for info
          p for infos under the h2
          ********************************/}
          <h1 className='title'>Knott County Personal Injury Lawyer</h1>
          <hr />
          <p>
            Knott County, nestled in the heart of eastern Kentucky, is blessed
            with picturesque landscapes and a tight-knit community.
            Unfortunately, accidents can still happen, and when they do, it is
            essential to have a trusted personal injury lawyer by your side. In
            Knott County, Casey Hall stands out as an experienced attorney
            dedicated to seeking justice and providing exceptional legal
            representation.
          </p>

          <p>
            With a profound understanding of the nuances and complexities of
            personal injury law, Casey Hall has a proven track record of
            successfully handling a wide range of cases. From automobile
            accidents to slip and falls, he has the expertise to navigate
            through the legal system and diligently pursue the compensation his
            clients deserve.
          </p>
          <p>
            One of the distinguishing factors of Casey Hall as a Knott County
            personal injury lawyer is his unwavering commitment to his clients.
            Possessing a rare combination of legal prowess and empathetic
            understanding, he ensures that each client receives personalized
            attention and compassionate guidance throughout the legal process.
            Recognizing that personal injuries often result in physical,
            emotional, and financial burdens, Casey Hall strives to alleviate
            his clients' stress by working tirelessly on their behalf.
          </p>

          <p>
            For those seeking a personal injury lawyer in Knott County, Casey
            Hall is a trusted advocate dedicated to serving the community. With
            years of experience and a compassionate approach, Casey Hall strives
            to obtain justice and fair compensation for his clients, providing
            the support and legal representation needed during challenging
            times.
          </p>
          <p>
            Our firm is dedicated to representing those injured anywhere in
            Knott County, including but not limited to:
          </p>
          <ul>
            <li>Hindman, Kentucky</li>
            <li>Pippa Passes, Kentucky</li>
          </ul>
          <p>
            Casey Hall, specializes in various services related to personal
            injury cases. Some of the services he offers may include:
          </p>
          <ul>
            <li>ATV accidents</li>
            <li>Distracted Driving accidents</li>
            <li>Car accidents</li>
            <li>Drunk Driver accidents</li>
            <li>Pedestrian accidents</li>
            <li>Hit and Run accidents</li>
            <li>Slip and Falls</li>
            <li>Truck accidents</li>
            <li>Motorcyle accidents</li>
            <li>Bicycle accidents</li>
            <li>Bus accidents</li>
          </ul>
          <hr />
        </section>
        <OnPageContact />
      </main>
    </Layout>
  );
}
