import {
  TextInput,
  Textarea,
  SimpleGrid,
  Group,
  Title,
  Button,
  Container,
} from "@mantine/core";
// import { useForm } from "@mantine/form";

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
    <Container size={"xs"} className='space-y-16 sm:space-y-24 md:space-y-32'>
      <form className='text-center'>
        <div className='space-y-4'>
          <div
            className='abouttitle text-lg md:text-xl flex items-center justify-center space-x-2'
            id='#About'>
            <h6 className=''>03.</h6>
            <h4 className='about text-teal-400'>{`What's Next?`}</h4>
          </div>

          <Title
            order={2}
            size='h1'
            sx={(theme) => ({
              fontFamily: `Greycliff CF, ${theme.fontFamily}`,
            })}
            weight={900}
            align='center'>
            Get in touch
          </Title>

          <p>
            {`I'm open to new opportunities. Whether you have a question or just want to say hi.`}
          </p>
        </div>

        <SimpleGrid
          cols={2}
          mt='xl'
          breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
          <TextInput
            label='Name'
            placeholder='Your name'
            name='name'
            variant='filled'
            // {...form.getInputProps("name")}
          />
          <TextInput
            label='Email'
            placeholder='Your email'
            name='email'
            variant='filled'
            // {...form.getInputProps("email")}
          />
        </SimpleGrid>

        <TextInput
          label='Subject'
          placeholder='Subject'
          mt='md'
          name='subject'
          variant='filled'
          // {...form.getInputProps("subject")}
        />
        <Textarea
          mt='md'
          label='Message'
          placeholder='Your message'
          maxRows={10}
          minRows={5}
          autosize
          name='message'
          variant='filled'
          // {...form.getInputProps("subject")}
        />

        <Group position='center' mt='xl'>
          <Button variant='outline' type='submit' size='md'>
            Send message
          </Button>
        </Group>
      </form>
    </Container>
  );
}

export default GetInTouchSimple;
