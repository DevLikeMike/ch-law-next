// Component imports
import Layout from "@/components/Layout";
import Map from "@/components/Map";
import { useForm } from "react-hook-form";
import { NEXT_URL } from "@/config/index";
import { useRouter } from "next/router";

export default function ContactPage() {
  // Form init for react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // use Router init
  const router = useRouter();

  // onSubmit for react form hook ASYNC
  const onSubmit = async (data) => {
    let { firstName, lastName, phone, email, message } = data;
    // Hit api/contact endpoint from built in api page using fetch
    const res = await fetch(`${NEXT_URL}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        message: message,
        phone: phone,
      }),
    });

    // AWAIT response form backend api/contact route
    const result = await res.json();
    if (res.ok) {
      router.push("/message");
    }
  };

  return (
    <Layout>
      <Map />
      <section className='contact'>
        <h1 className='contact__header text-center'>Casey Hall Law</h1>
        <p className='contact__subHeader text-center'>
          Casey Hall law is located in Fleming Neon Kentucky and is dedicated to
          serving the surrounding areas. In-person consultations can be arranged
          in near by towns from Whitesburg to Pikeville.
        </p>
        <hr />
        <div className='contact__container flex'>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='contact__form flex jc-fs col'
            onSubmit={handleSubmit(onSubmit)}
            autoComplete='off'
          >
            <h1 className='contact__form__header text-center'>Contact Us</h1>
            <input
              type='text'
              name='firstName'
              placeholder='First Name (required)'
              // Register is from react-hook-form, first param is name field, second options
              {...register("firstName", { required: true, maxLength: 20 })}
              required
            />
            <input
              type='text'
              name='lastName'
              placeholder='Last Name (required)'
              {...register("lastName", { required: true, maxLength: 40 })}
              required
            />
            <input
              type='text'
              name='phone'
              placeholder='Phone Number (required)'
              {...register("phone", { required: true, maxLength: 20 })}
              required
            />
            <input
              type='email'
              name='email'
              placeholder='Email (required)'
              {...register("email", { required: true, maxLength: 40 })}
            />
            <textarea
              name='message'
              placeholder='Brief details about your case.'
              {...register("message", {
                required: true,
                maxLength: 1000,
                minLength: 25,
              })}
            ></textarea>
            <input type='submit' value='GET STARTED' />
          </form>
          <div className='contact__card flex flex-center col'>
            <h2 className='text-center'>Free Consultation</h2>
            <p className='card__contact text-center'>
              Contact us for a FREE consultation. Get your questions answered
              and the guidance you need from an experienced attorney.
            </p>
            <h1 className='card__phone text-center'>
              <i className='fas fa-phone'></i>1-888-888-8888
            </h1>
          </div>
        </div>
      </section>
    </Layout>
  );
}
