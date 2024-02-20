"use client";
import Button from "../shared/Button";
import { useState } from "react";
import Input, { TextArea } from "../shared/Input";
import Dialog from "../shared/Dialog";

import emailjs from "@emailjs/browser";

function GetInTouchSimple() {
  const [open, setOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const { name, emailAddress, message } = e.target.elements;

    if (
      name.value === "" ||
      emailAddress.value === "" ||
      message.value === ""
    ) {
      setOpen(true);
      setDialogMessage("Please fill out all fields.");
      return;
    }

    const templateParams = {
      from_name: name.value,
      from_email: emailAddress.value,
      message: message.value,
    };

    emailjs
      .send(
        `${process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID}`,
        `${process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID}`,
        templateParams,
        `${process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY}`
      )
      .then(
        (result) => {
          if (result.status === 200) {
            setOpen(true);
            setDialogMessage(
              "Thanks for reaching out! I'll get back to you as soon as possible."
            );
          }

          name.value = "";
          emailAddress.value = "";
          message.value = "";
        },
        (error) => {
          setOpen(true);
          setDialogMessage(
            "Something went wrong. Please try again or send me an email directly at: rukewejoseph77@gmail.com"
          );

          name.value = "";
          emailAddress.value = "";
          message.value = "";
        }
      );
  };

  return (
    <>
      <div
        id='get-in-touch'
        className='space-y-16 sm:space-y-24 md:space-y-32 max-w-md mx-auto  flex flex-col items-center'>
        <form onSubmit={onSubmit} className='text-center'>
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

          <div className='flex flex-col gap-4'>
            <Input placeholder='Name' name='name' />
            <Input
              placeholder='Email Address'
              name='emailAddress'
              type='email'
            />
            <TextArea placeholder='Message' name='message' />

            <div>
              <Button type='submit' variant='default'>{`Send Message`}</Button>
            </div>
          </div>
        </form>
      </div>

      <Dialog
        message={dialogMessage}
        open={open}
        close={() => setOpen(false)}
      />
    </>
  );
}

export default GetInTouchSimple;
