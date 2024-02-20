import { Avatar, AvatarProps } from "@mantine/core";

interface Props extends AvatarProps {}

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
