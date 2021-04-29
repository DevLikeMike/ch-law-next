import Layout from "@/components/Layout";
import OnPageContact from "@/components/OnPageContact";

export default function MotorVehicleAccident() {
  return (
    <Layout
      title='Casey Hall Law | Vehicle Accident'
      description='Casey Hall Law personal injury lawyer specializes in motor vehicle accidents. Helping Reach a just and speedy resolution for your case.'
    >
      <section className='aop-page'>
        <section className='hero mvh'></section>
        <section className='content'>
          <h1 className='title'>Motor Vehicle Accident</h1>
          <hr />
          <h2>When to contact a Motor Vehicle Accident Lawyer</h2>
          <p>
            Unfortunately, motor vehicle accidents happen every day. You may
            feel lost after experiencing an accident, and technical law
            terminology may add to this confusion. Hiring a personal injury or
            motor vehicle accident lawyer can make sure you get the justice you
            deserve. If you or a loved one have been involved in a motor vehicle
            accident contact us immediately for your free consultation.
          </p>
          <p>
            The vast majority of personal injury claims are a direct result of
            car, truck, or other motor vehicle accidents. These claims come in
            all forms, ranging from “fender benders” to multi-vehicle accidents.
            Accidents on the smaller scale can usually be handled by making a
            simple insurance claim, however accidents involving significant
            damage, fatality, or other physical injury can warrant legal
            representation.
          </p>
          <h2>Injury or loss</h2>
          <p>
            If you or a loved one were involved in such an accident, hiring a
            personal injury lawyer can help get compensation to cover losses you
            may have incurred. Examples of these losses are:
          </p>
          <ul>
            <li>Car Repairs</li>
            <li>Medical Expenses</li>
            <li>Chiropractic Costs</li>
            <li>Lost Wages</li>
          </ul>
          <p>
            Losses can add up, and adding this stress to your injuries will not
            help recovering from this possibly life changing experience. It is
            important to have the right people in your corner to ensure that you
            are taken care. Hiring a personal injury lawyer can help ease this
            stress, allowing you to rest and recover. Our law office is
            dedicated to taking care of each and every client to the best of our
            abilities.
          </p>
          <p>
            Injuries are not just physical, in most cases clients suffer from
            mental injuries as well. You may need therapy, or experience spiked
            anxiety when driving again. These injuries also need to be addressed
            after a motor vehicle accident.
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
            resulting in recoverable compensation called a<b>settlement</b>.
            Casey Hall Law will do everything to make sure you get the
            settlement best fit for your accident.
          </p>
          <OnPageContact bgClass='onpage_contact flex flex-center blue' />
        </section>
      </section>
    </Layout>
  );
}
