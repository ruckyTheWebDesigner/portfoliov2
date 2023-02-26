import { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

function ContactMe() {
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [resolution, setResolution] = useState(1000);

  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents default refresh by the browser

    let message = e.target.message.value;
    let email = e.target.from_email.value;

    if (email.length < 1) {
      setErrorMessage("Please enter your email");
    } else if (message.length < 1) {
      setErrorMessage("Please enter a message");
    } else {
      emailjs
        .sendForm(
          "default_service",
          "template_84j6n0e",
          form.current,
          "isgYroE-8cvOOhaCM"
        )
        .then(
          (result) => {
            setErrorMessage("");
            setMessage("Message sent! I will get back to you shortly.");
          },
          (error) => {
            setMessage("Oops... " + JSON.stringify(error));
          }
        );
      e.target.reset();
    }
  };

  return (
    <div className='px-4 form-content' id='contact-me'>
      <div className='text-center get-in-touch'>
        <div className=' d-flex justify-content-center align-items-center mt-5 mb-2 green-text'>
          <h6 className='me-2'>03.</h6>
          <h4>What's Next?</h4>
        </div>
        <h2>Get In Touch</h2>
        <p
          className='get-in-touch'
          style={
            resolution > 1200
              ? { padding: "2px 200px" }
              : resolution > 680
              ? { padding: "5px 50px" }
              : { padding: "3px 40px" }
          }>
          I'm open to new opportunities. Whether you have a question or just
          want to say hi.
        </p>
      </div>

      <form
        encType='multipart/form-data'
        method='post'
        ref={form}
        onSubmit={handleSubmit}
        className='myForm'>
        {message && (
          <Stack className='my-2'>
            <Alert
              onClose={() => {
                setMessage("");
              }}
              severity='success'>
              {message}
            </Alert>
          </Stack>
        )}
        {errorMessage && (
          <Stack className='my-2'>
            <Alert
              onClose={() => {
                setErrorMessage("");
              }}
              severity='error'>
              {errorMessage}
            </Alert>
          </Stack>
        )}

        <input
          type='text'
          className='my-1 p-2'
          name='from_name'
          placeholder='Name'
        />
        <input
          type='text'
          className='my-1 p-2'
          name='from_email'
          id=''
          placeholder='Email Address'
        />

        <textarea
          name='message'
          className='my-1 p-2 textarea'
          style={{ width: "100%" }}
          rows='4'
          placeholder='Message'></textarea>

        <button type='submit' value='Send' className='button my-1 py-2 px-4'>
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactMe;
