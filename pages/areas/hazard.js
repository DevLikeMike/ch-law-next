import Layout from "@/components/Layout";
import OnPageContact from "@/components/OnPageContact";

// Change Function name per page
export default function Hazard() {
  return (
    <Layout
      //Change Title per page for meta
      title='Casey Hall Law | Hazard Lawyer'
      //Change Description per page for meta
      description='Casey Hall is a personal injury lawyer who specializes in car accidents. If you or someone you love have been seriously injury in a car accident in the Hazard area, please contact us today!'
    >
      <main className='page-container'>
        <section className='content'>
          {/********************************
          Content layout key 
          h2 for headers for info
          p for infos under the h2
          ********************************/}
          <h1 className='title'>Hazard Personal Injury Lawyer</h1>
          <hr />
          <p>
            In Hazard, individuals who have been a victim of personal injury can
            rely on the expertise and dedication of Casey Hall, a reputable
            personal injury lawyer. With years of experience in the field, Mr.
            Hall has established himself as a reliable and trustworthy legal
            professional, committed to ensuring justice and securing rightful
            compensation for his clients.
          </p>
          <p>
            When faced with the challenging aftermath of a personal injury,
            navigating the complex legal system can be overwhelming. This is
            where Casey Hall's expertise shines. Known for his extensive
            knowledge of personal injury law, Mr. Hall will provide the guidance
            and support necessary to successfully navigate through the legal
            process.
          </p>
          <p>
            As a personal injury lawyer, Casey Hall understands the importance
            of meticulous attention to detail. Clients can expect personalized
            attention throughout their case, as Mr. Hall takes the time to
            thoroughly investigate the facts surrounding the incident and
            identify all liable parties. With his expertise, he builds a robust
            case strategically designed to maximize the chances of securing a
            fair settlement or prevailing in court.
          </p>

          <p>
            Furthermore, Mr. Hall's compassionate approach ensures that his
            clients' well-being is always the top priority. Understanding the
            physical, emotional, and financial hardships that personal injuries
            can inflict, he fights tirelessly to obtain the compensation
            deserving of his clients' suffering. By meticulously calculating
            damages, including medical expenses, lost wages, and pain and
            suffering, he seeks to alleviate the financial burden experienced by
            his clients.
          </p>
          <p>
            For individuals in Hazard seeking justice and compensation after a
            personal injury such as a car wreck, Casey Hall is the attorney to
            turn to. With his noteworthy expertise, meticulous attention to
            detail, and compassionate advocacy, he ensures that his clients'
            rights are protected and their voices are heard. Trust in Casey
            Hall's expertise, and let him guide you through the legal process,
            ensuring a favorable outcome for your personal injury case.
          </p>
          <p>
            Mr. Hall, specializes in various services related to personal injury
            cases. Some of the services he offers may include:
          </p>
          <ul>
            <li>Car accidents</li>
            <li>Drunk Driver accidents</li>
            <li>Pedestrian accidents</li>
            <li>Hit and Run accidents</li>
            <li>Slip and Falls</li>
            <li>Distracted Driving accidents</li>
            <li>Bicycle accidents</li>
            <li>Truck accidents</li>
            <li>Motorcyle accidents</li>
            <li>Bus accidents</li>
            <li>ATV accidents</li>
          </ul>
          <hr />
        </section>
        <OnPageContact />
      </main>
    </Layout>
  );
}
