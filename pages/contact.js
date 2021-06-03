// Component imports
import Layout from "@/components/Layout";
import Map from "@/components/Map";
import { useForm } from "react-hook-form";
import { NEXT_URL } from "@/config/index";
import { useRouter } from "next/router";
import { useEffect } from "react";

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
    console.log(result);
    if (res.ok) {
      router.push("/message");
    }
  };

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <Layout>
      <Map />
      <section className='contact'>
        <h1 className='contact__header text-center'>
          Casey Hall Attorney at Law, PLLC
        </h1>
        <h2 className='contact__phone_number text-center'>
          Phone: (606)775-0677
        </h2>
        <h2 className='contact__phone_number text-center'>
          Fax: (606)775-0678
        </h2>
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
              {...register("firstName", {
                required: {
                  value: true,
                  message: "You must enter a first name.",
                },
                maxLength: {
                  value: 20,
                  message: "First name cannot be longer than 20 characters.",
                },
              })}
            />
            <span>{errors?.firstName?.message}</span>
            <input
              type='text'
              name='lastName'
              placeholder='Last Name (required)'
              {...register("lastName", {
                required: {
                  value: true,
                  message: "You must enter a last name.",
                },
                maxLength: {
                  value: 20,
                  message: "Last name cannot be longer than 20 characters.",
                },
              })}
            />
            <span>{errors?.lastName?.message}</span>
            <input
              type='text'
              name='phone'
              placeholder='Phone Number (required)'
              {...register("phone", {
                required: {
                  value: true,
                  message: "You must enter a phone number.",
                },
                maxLength: {
                  value: 20,
                  message: "Phone Number cannot be longer than 20 characters.",
                },
              })}
            />
            <span>{errors?.phone?.message}</span>
            <input
              type='email'
              name='email'
              placeholder='Email (required)'
              {...register("email", {
                required: {
                  value: true,
                  message: "You must enter an email",
                },
                maxLength: {
                  value: 40,
                  message: "Email cannot be longer than 40 characters.",
                },
              })}
            />
            <span>{errors?.email?.message}</span>
            <textarea
              name='message'
              placeholder='Brief details about your case.'
              {...register("message", {
                required: {
                  value: true,
                  message: "You must enter a message.",
                },
                maxLength: {
                  value: 1000,
                  message:
                    "Your message cannot be longer than 1000 characters.",
                },
                minLength: {
                  value: 25,
                  message: "Your message must be atleast 25 characters long.",
                },
              })}
            ></textarea>
            <span>{errors?.message?.message}</span>
            <input type='submit' value='GET STARTED' />
          </form>
          <div className='contact__card flex flex-center col'>
            <h2 className='text-center'>Free Consultation</h2>
            <p className='card__contact text-center'>
              Contact us for a FREE consultation. Get your questions answered
              and the guidance you need from an experienced attorney.
            </p>
            <h1 className='card__phone text-center'>
              <i className='fas fa-phone'></i>(606)775-0677
            </h1>
          </div>
        </div>
      </section>
    </Layout>
  );
}
