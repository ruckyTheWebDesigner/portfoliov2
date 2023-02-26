"use client";
import { Container } from "@mantine/core";

import React from "react";
import {
  DefaultProps,
  MantineNumberSize,
  MantineSize,
  SpacingValue,
  SystemProp,
} from "@mantine/styles";

function CustomContainer({
  children,
  py,
  my,
  size,
}: {
  children: React.ReactNode;
  size: MantineNumberSize;
  py?: SystemProp<SpacingValue>;
  my?: SystemProp<SpacingValue>;
}) {
  return (
    <Container py={py} my={my} size={size}>
      {children}
    </Container>
  );
}

export default CustomContainer;
