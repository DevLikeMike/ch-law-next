import Layout from "@/components/Layout";
import OnPageContact from "@/components/OnPageContact";

// Change Function name per page
export default function Template() {
  return (
    <Layout
      //Change Title per page for meta
      title='Casey Hall Law | Car Accident'
      //Change Description per page for meta
      description='Casey Hall is a personal injury lawyer who specializes in car accidents. If you or someone you love have been seriously injury in a car accident in the South East Kentucky area, please contact us today! We are serving the Whitesburg area and all neighboring areas.'
    >
      <main className='page-container'>
        <section className='showcase mvh'></section>
        <section className='content'>
          <h1 className='title'>TITLE GOES HERE</h1>
          {/********************************
          Page layout key 
          h2 for headers for info
          p for infos under the h2
          ********************************/}
          <hr />
          <h2>When To Contact a Car accident Lawyer</h2>
          <p>
            Unfortunately, car accidents happen every day. You may feel lost
            after experiencing an accident, and technical law terminology may
            add to this confusion. Hiring a personal injury or car accident
            lawyer can make sure you get the justice you deserve. If you or a
            loved one have been involved in a car accident, contact us
            immediately for your free consultation.
          </p>
        </section>
        <OnPageContact />
      </main>
    </Layout>
  );
}
