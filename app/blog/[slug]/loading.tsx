import { Loader } from "@mantine/core";

export default function Loading() {
  return (
    <div className='h-screen flex flex-col items-center justify-center'>
      <Loader variant='bars' color={"teal"} />
    </div>
  );
}
