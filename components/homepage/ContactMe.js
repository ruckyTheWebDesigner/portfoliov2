import Button from "../shared/Button";
import Input from "../shared/Input";
import { TextArea } from "../shared/Input";

function GetInTouchSimple() {
  // const form = useForm({
  //   initialValues: {
  //     name: "",
  //     email: "",
  //     subject: "",
  //     message: "",
  //   },
  //   validate: {
  //     name: (value) => value.trim().length < 2,
  //     email: (value) => !/^\S+@\S+$/.test(value),
  //     subject: (value) => value.trim().length === 0,
  //   },
  // });

  return (
    <div className='space-y-16 sm:space-y-24 md:space-y-32 max-w-md mx-auto  flex flex-col items-center'>
      <form className='text-center'>
        <div className='space-y-4 mb-6'>
          <div
            className='abouttitle text-lg md:text-xl flex items-center justify-center space-x-2'
            id='#About'>
            <h6 className=''>03.</h6>
            <h4 className='about text-teal-500'>{`What's Next?`}</h4>
          </div>

          <h6>Get in touch</h6>

          <p>
            {`I'm open to new opportunities. Whether you have a question or just want to say hi.`}
          </p>
        </div>

        <div className='flex flex-col gap-4'>
          <Input placeholder='Name' />
          <Input placeholder='Email Address' />
          <TextArea placeholder='Message' />

          <div>
            <Button>{`Send Message`}</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default GetInTouchSimple;
