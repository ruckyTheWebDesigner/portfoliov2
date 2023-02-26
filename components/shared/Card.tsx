"use client";

import { Card, MantineNumberSize, MantineShadow } from "@mantine/core";
import React from "react";

interface Props {
  /** Predefined box-shadow from theme.shadows (xs, sm, md, lg, xl) or any valid css box-shadow property */
  shadow?: MantineShadow;
  /** Predefined border-radius value from theme.radius or number for border-radius in px */
  radius?: MantineNumberSize;
  /** Adds 1px border with theme.colors.gray[3] color in light color scheme and theme.colors.dark[4] in dark color scheme */
  withBorder?: boolean;
  /** Paper children */
  children?: React.ReactNode;
}

function CustomCard({
  children,
  className,
  shadow,
  radius,
}: // ...props
{
  children: React.ReactNode;
  className?: string;
  shadow?: MantineShadow;
  radius?: MantineNumberSize;
}) {
  return (
    <Card shadow={shadow} radius={radius} className={className}>
      {children}
    </Card>
  );
}

export default CustomCard;
