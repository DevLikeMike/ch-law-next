import Layout from "@/components/Layout";
import OnPageContact from "@/components/OnPageContact";

// Change Function name per page
export default function PerryCounty() {
  return (
    <Layout
      //Change Title per page for meta
      title='Casey Hall Law | Perry County Lawyer'
      //Change Description per page for meta
      description='Casey Hall is a personal injury lawyer who specializes in car accidents. If you or someone you love have been seriously injury in a car accident in the Perry County area, please contact us today!'
    >
      <main className='page-container'>
        <section className='content'>
          {/********************************
          Content layout key 
          h2 for headers for info
          p for infos under the h2
          ********************************/}
          <h1 className='title'>Perry County Personal Injury Lawyer</h1>
          <hr />
          <p>
            When it comes to personal injury cases in Perry County, there is one
            attorney who stands out among the rest - Casey Hall. As a reputable
            personal injury attorney, Casey Hall has dedicated his career to
            helping those who have been injured and need legal assistance.
          </p>
          <p>
            Casey Hall's expertise and commitment to his clients that truly sets
            him apart. With years of experience handling personal injury cases
            in Perry County, Casey Hall understands the intricacies of the legal
            system and knows how to navigate through the complexities of each
            case.
          </p>
          <p>
            Whether you have suffered from a minor injury or a life-altering
            accident, Casey Hall is dedicated to ensuring that you receive the
            compensation you deserve. His compassionate and personalized
            approach to each case ensures that clients are not just treated as
            another file, but as individuals who have undergone significant
            hardship.
          </p>

          <p>
            So, if you find yourself injured and in need of legal help in Perry
            County, look no further than Casey Hall, the personal injury
            attorney who is committed to fighting for your rights and providing
            you with the justice you deserve.
          </p>
          <p>
            Our firm is dedicated to representing those injured anywhere in
            Perry County, including but not limited to:
          </p>
          <ul>
            <li>Hazard, Kentucky</li>
            <li>Buckhorn, Kentucky</li>
            <li>Vicco, Kentucky</li>
            <li>Combs, Kentucky</li>
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
