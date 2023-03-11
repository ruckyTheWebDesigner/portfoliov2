import { useDisclosure } from "@mantine/hooks";
import { Dialog, Group, Text } from "@mantine/core";

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
      <Group position='center'>
        {/* <Button onClick={toggle}>Toggle dialog</Button> */}
      </Group>

      <Dialog
        opened={open}
        withCloseButton
        onClose={close}
        size='lg'
        radius='md'>
        <Text size='sm' mb='xs' weight={500}>
          {message}
        </Text>

        <Group align='flex-end'>
          <Button onClick={close}>Okay</Button>
        </Group>
      </Dialog>
    </>
  );
}

export default Demo;
