import { Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";

interface CustomDrawerProps {
  children: React.ReactNode;
  openButton: React.ReactNode;

  open: boolean;
}

function CustomDrawer({ children, openButton }: Readonly<CustomDrawerProps>) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer
        style={{
          backgroundColor: "#134e4a",
        }}
        withOverlay
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
