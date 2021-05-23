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
            Casey Hall Law is a local firm dedicated to serving the Eastern
            Kentucky area. Areas such as Pikeville, Jenkins, Hazard,
            Fleming-Neon, Whitesburg, Mayking, and all the in between.
          </p>
          <p>
            Free consultations may be schedule to meet in person at an agreed
            upon location and time. However, due to COVID-19 most consultations
            can be taken care of online via zoom or another online video chat
            program. Contact us today to get your consultation scheduled.
          </p>
          <OnPageContact bgClass='onpage_contact flex flex-center blue' />
        </section>
      </main>
    </Layout>
  );
}
