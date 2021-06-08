import { useForm } from "react-hook-form";
import { NEXT_URL } from "@/config/index";
import { useRouter } from "next/router";

export default function OnPageContact({ bgClass }) {
  // Form init for react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // useRouter
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
    <section className={bgClass}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='onpage_contact__form flex jc-fs col'
        autoComplete='off'
      >
        <h2 className='onpage_contact__form__header text-center'>Contact Us</h2>
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
              message: "Your message cannot be longer than 1000 characters.",
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
    </section>
  );
}

OnPageContact.defaultProps = {
  bgClass: "onpage_contact flex flex-center",
};
