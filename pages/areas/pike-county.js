import Layout from "@/components/Layout";
import OnPageContact from "@/components/OnPageContact";

// Change Function name per page
export default function PikeCounty() {
  return (
    <Layout
      //Change Title per page for meta
      title='Casey Hall Law | Pike County Lawyer'
      //Change Description per page for meta
      description='Casey Hall is a personal injury lawyer who specializes in car accidents. If you or someone you love have been seriously injury in a car accident in the Pike County area, please contact us today!'
    >
      <main className='page-container'>
        <section className='content'>
          {/********************************
          Content layout key 
          h2 for headers for info
          p for infos under the h2
          ********************************/}
          <h1 className='title'>Pike County Personal Injury Lawyer</h1>
          <hr />
          <p>
            Pike County car wreck attorney, Casey Hall, is a name that stands
            out in the legal community for his relentless dedication to seek
            justice for his clients. With his extensive knowledge and experience
            in personal injury law, he has become a trusted advocate for those
            who have suffered injuries due to the negligence of others.
          </p>
          <p>
            Casey Hall's stellar reputation is widely recognized throughout Pike
            County. His compassionate approach and assertive representation have
            earned him the trust of his clients. Many who have worked with him
            commend his ability to provide personalized attention, truly
            listening to their unique circumstances and needs. With a thorough
            understanding of the complexities presented in personal injury
            cases, Casey Hall is able to develop strategic legal strategies
            tailored to each client's situation.
          </p>
          <p>
            Furthermore, Casey Hall's commitment to his community goes beyond
            his legal practice. He actively engages in local initiatives to
            raise awareness about personal injury issues and works tirelessly to
            ensure that victims receive the compensation they deserve. Casey
            Hall strives to make a difference in the lives of Pike County
            residents.
          </p>

          <p>
            Casey Hall is a distinguished Pike County personal injury lawyer
            known for his expertise, compassion, and unwavering commitment to
            seeking justice for his clients. His reputation as a dedicated
            advocate makes him a trusted ally in times of need.
          </p>
          <p>
            Our firm is dedicated to representing those injured anywhere in Pike
            County, including but not limited to:
          </p>
          <ul>
            <li>Pikeville, Kentucky</li>
            <li>Coal Run Village, Kentucky</li>
            <li>Elkhorn City, Kentucky</li>
            <li>Virgie, Kentucky</li>
            <li>Belfry, Kentucky</li>
            <li>Phelps, Kentucky</li>
          </ul>
          <p>
            Casey Hall, specializes in various services related to personal
            injury cases. Some of the services he offers may include:
          </p>
          <ul>
            <li>Bus accidents</li>
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
          </ul>
          <hr />
        </section>
        <OnPageContact />
      </main>
    </Layout>
  );
}
