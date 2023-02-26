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
  size = "md",
  className,
}: {
  children: React.ReactNode;
  size?: MantineNumberSize;
  py?: SystemProp<SpacingValue>;
  my?: SystemProp<SpacingValue>;
  className?: string;
}) {
  return (
    <Container className={className} py={py} my={my} size={size}>
      {children}
    </Container>
  );
}

export default CustomContainer;
