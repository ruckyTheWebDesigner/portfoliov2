"use client";
import { useForm } from "@mantine/form";

import { TextInput, Textarea, Alert, Button } from "@mantine/core";

import emailjs from "@emailjs/browser";
import { useState } from "react";
import { MdDone, MdError } from "react-icons/md";

function GetInTouchSimple() {
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({
    show: false,
    message: "",
    color: "green",
    icon: <MdDone />,
  });

  const form = useForm({
    mode: "uncontrolled",
    initialValues: { name: "", email: "", message: "" },

    // functions will be used to validate values at corresponding key
    validate: {
      name: (value) => (value.length < 2 ? "Please enter your name" : null),
      email: (value) =>
        /^\S+@\S+$/.test(value) ? null : "Please enter a valid email address",
      message: (value) =>
        value.length < 1 ? "Please enter your message" : null,
    },
  });

  const onSubmit = async (values: typeof form.values) => {
    const { name, email, message } = values;
    setLoading(true);

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    try {
      await emailjs
        .send(
          `${process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID}`,
          `${process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID}`,
          templateParams,
          `${process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY}`
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            setAlert({
              show: true,
              message: "Hey, got your message! I'll get back to you soon.",
              color: "green",
              icon: <MdDone />,
            });

            form.reset();
          },
          function (error) {
            console.log("FAILED...", error);
            throw error;
          }
        );
    } catch (error) {
      console.error(error, "ERROR");
      setAlert({
        show: true,
        message: "Something went wrong. Please try again.",
        color: "red",
        icon: <MdError />,
      });

      form.reset();
    }

    setLoading(false);
  };

  return (
    <div
      id='get-in-touch'
      className='space-y-16 sm:space-y-24 md:space-y-32 max-w-md mx-auto  flex flex-col items-center'>
      <form
        onSubmit={form.onSubmit(
          (values) => onSubmit(values),
          (errors) => console.error(errors, "ERRORS")
        )}
        className='text-center'>
        <div className='space-y-4 mb-6'>
          <div
            className='abouttitle text-lg md:text-xl flex items-center justify-center space-x-2'
            id='#About'>
            <h6 className=''>03.</h6>
            <h4 className='about text-teal-500'>{`What's Next?`}</h4>
          </div>

          <h6 className='dark:text-slate-300'>Get in touch</h6>

          <p className='px-6 dark:text-slate-400'>
            {`I'm open to new opportunities. Whether you have a question or just want to say hi.`}
          </p>
        </div>

        {alert.show && (
          <Alert my={10} color={alert.color} icon={alert.icon}>
            {alert.message}
          </Alert>
        )}

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <TextInput
            label='Name'
            placeholder='Name'
            className='sm:col-span-1'
            key={form.key("name")}
            {...form.getInputProps("name")}
          />

          <TextInput
            label='Email Address'
            placeholder='Email Address'
            className='sm:col-span-1'
            key={form.key("email")}
            {...form.getInputProps("email")}
          />
          <Textarea
            label='Message'
            placeholder='Message'
            autosize
            minRows={3}
            className='sm:col-span-2'
            key={form.key("message")}
            {...form.getInputProps("message")}
          />

          <div className='sm:col-span-2'>
            <Button
              variant='filled'
              type='submit'
              color={"teal"}
              disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default GetInTouchSimple;
