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
          {...register("firstName", { required: true, maxLength: 20 })}
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
          placeholder='Email address (required)'
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
    </section>
  );
}

OnPageContact.defaultProps = {
  bgClass: "onpage_contact flex flex-center",
};
