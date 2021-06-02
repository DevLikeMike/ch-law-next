import Layout from "@/components/Layout";
import OnPageContact from "@/components/OnPageContact";

export default function TruckAccident() {
  return (
    <Layout
      title='Casey Hall Law | Truck Accident'
      description='Casey Hall Law personal injury lawyer specializes in truck accidents, and commercial vehicle accidents. Helping Reach a just and speedy resolution for your case.'
    >
      <main className='page-container'>
        <section className='showcase mvh'></section>
        <section className='content'>
          <h1 className='title'>Truck Accidents</h1>
          <hr />
          <h2>Truck Accident Lawyers</h2>
          <p>
            Trucks are around us every day of our lives, some people say they
            are the back bone of America. We call them many things, 18-wheelers,
            semi-trucks, big rigs, and tractor trailers. If you have driven on
            the interstate, chances are you have passed one.
          </p>
          <p>
            The average size of a commercial truck, or semi, is around 75,000
            pounds. In comparison, your typical four door sedan is around 3,500
            pounds. This means the semi truck can make a normal car look tiny
            beside it. Due to this large size difference, accidents involving
            such a large truck can be life changing.
          </p>
          <p>
            Our offices are equiped to help you in this difficult time, and will
            help you determine if you have a case. Let us fight for you, and
            help you get the compensation you deserve.
          </p>
          <h2>Causes of truck accidents</h2>
          <p>
            Truckers are considered the driving force behind America. Due to the
            large demand for them and their services, truck accidents are common
            You because they are always on the road. Many factors can be at play
            when determining cause in truck accidents. Examples may include:
          </p>
          <ul>
            <li>Fatigue</li>
            <li>Distracted driving</li>
            <li>Speeding</li>
            <li>Failure to obey traffic laws</li>
            <li>Tailgating</li>
            <li>Driving under the influence</li>
            <li>Road rage or aggressive driving</li>
          </ul>
          <h2>Determining who is liable</h2>
          <p>
            In most car/truck accidents it is likely the driver of one vehicle
            is liable for the accident. However, in truck accidents, the truck
            driver's employer can be considered liable.
          </p>
          <h2>Negligence and Cause</h2>
          <p>
            Motor Vehicle Accidents happen for many reasons. In technical terms
            negligence can mean “fault.” Car accidents are often the result of
            multiple reasons. Common causes of motor vehicle accidents include:{" "}
          </p>
          <ul>
            <li>Fatigue</li>
            <li>
              Distraction, such as texting, talking on the phone, eating,
              looking at the radio or other passengers
            </li>
            <li>Driving under the influence of drugs or alcohol</li>
            <li>Reckless driving</li>
            <li>Failure to obey traffic laws</li>
            <li>Obstruction of vision</li>
            <li>Weather</li>
            <li>Incompentent/Inexperienced driver</li>
          </ul>
          <p>
            These are just some of the most common, but you should not have to
            suffer even from the smallest of causes. Our offices will conduct a
            thorough investigation to determine cause or causes. Using evidence
            to prove the opposing driver was negligent and at fault, thus
            resulting in recoverable compensation called a <b>settlement</b>.
            Casey Hall Law will do everything to make sure you get the
            settlement best fit for your accident.
          </p>
        </section>
        <OnPageContact />
      </main>
    </Layout>
  );
}
