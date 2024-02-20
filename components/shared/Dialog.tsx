import { Dialog, Text } from "@mantine/core";

interface Props {
  message: string;
  open: boolean;
  close: () => void;
}

import Button from "./Button";
function Demo({ message, open, close }: Readonly<Props>) {
  return (
    <Dialog opened={open} withCloseButton onClose={close} size='md' radius='md'>
      <Text size='sm' mb='xs'>
        {message}
      </Text>

      <div className='flex justify-end'>
        <Button onClick={close}>Okay</Button>
      </div>
    </Dialog>
  );
}

export default Demo;
