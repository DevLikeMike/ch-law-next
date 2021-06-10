import Map from "@/components/Map";
import Layout from "@/components/Layout";
import OnPageContact from "@/components/OnPageContact";

export default function location() {
  return (
    <Layout>
      <Map />
      <main className='page-container'>
        <section className='location-content'>
          <h1 className='title'>Location</h1>
          <hr />
          <p>
            Casey Hall Attorney at Law, PLLC is a local firm dedicated to
            serving the Eastern Kentucky area. This area includes Letcher,
            Knott, Pike, Floyd, Perry, and Harlan Counties.
          </p>
          <p>
            Free consultations may be scheduled to meet in person at an agreed
            upon location and time. However, due to COVID-19, most consultations
            can be taken care of online via zoom or another online video chat
            program. Contact us today to get your consultation scheduled.
          </p>
          <OnPageContact bgClass='onpage_contact flex flex-center blue' />
        </section>
      </main>
    </Layout>
  );
}
