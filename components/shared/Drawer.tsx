import { Drawer, Button, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";

function CustomDrawer({
  children,
  openButton,
}: {
  children: React.ReactNode;
  open: boolean;
  openButton: React.ReactNode;
}) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer
        sx={{
          " .mantine-xm7qi9": {
            backgroundColor: "#112240",
          },
        }}
        //   withCloseButton
        withOverlay
        overlayOpacity={0.5}
        opened={opened}
        position={"right"}
        onClose={close}>
        {children}
      </Drawer>

      <span onClick={open}>{openButton}</span>
    </>
  );
}

export default CustomDrawer;
