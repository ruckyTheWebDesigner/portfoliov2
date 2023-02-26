import {
  Avatar,
  MantineColor,
  MantineGradient,
  MantineNumberSize,
} from "@mantine/core";
import { AvatarVariant } from "@mantine/core/lib/Avatar/Avatar.styles";
import React from "react";

interface Props {
  /** Image url */
  src?: string | null;
  /** Image alt text or title for placeholder variant */
  alt?: string;
  /** Avatar width and height */
  size?: MantineNumberSize;
  /** Value from theme.radius or number to set border-radius in px */
  radius?: MantineNumberSize;
  /** Color from theme.colors used for letter and icon placeholders */
  color?: MantineColor;
  /** Controls appearance */
  variant?: AvatarVariant;
  /** Controls gradient settings in gradient variant only */
  gradient?: MantineGradient;
  /** img element attributes */
  imageProps?: Record<string, any>;
  /** Custom placeholder */
  children?: React.ReactNode;
}

function CustomAvatar({
  src,
  alt,
  size,
  radius,
  color,
  variant,
  gradient,
  imageProps,
  children,
}: Props) {
  return (
    <Avatar
      {...{
        src,
        alt,
        size,
        radius,
        color,
        variant,
        gradient,
        imageProps,
        children,
      }}
    />
  );
}

export default CustomAvatar;
