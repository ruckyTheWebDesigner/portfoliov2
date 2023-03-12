import { Dialog, Text } from "@mantine/core";

import Button from "./Button";
function Demo({
  message,
  open,
  close,
}: {
  message: string;
  open: boolean;
  close: () => void;
}) {
  return (
    <>
      <Dialog
        opened={open}
        withCloseButton
        onClose={close}
        size='md'
        radius='md'>
        <Text size='sm' mb='xs' weight={500}>
          {message}
        </Text>

        <div className='flex justify-end'>
          <Button onClick={close}>Okay</Button>
        </div>
      </Dialog>
    </>
  );
}

export default Demo;
