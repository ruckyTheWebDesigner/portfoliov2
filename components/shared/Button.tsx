import React from "react";
import { Button } from "@mantine/core";

interface Props {
  variant?:
    | "filled"
    | "outline"
    | "light"
    | "gradient"
    | "white"
    | "default"
    | "subtle";
  color?:
    | "red"
    | "blue"
    | "green"
    | "yellow"
    | "teal"
    | "pink"
    | "purple"
    | "gray"
    | "dark"
    | "cyan"
    | "orange"
    | "lime"
    | "violet"
    | "indigo"
    | "fuchsia"
    | "brown"
    | "primary"
    | "secondary"
    | "success"
    | "info"
    | "warning"
    | "danger"
    | "light"
    | "black"
    | "transparent";
  type?: "button" | "submit" | "reset";
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
}

function CustomButton({ variant, color, rightIcon, children }: Props) {
  return (
    <Button variant={variant} radius={"md"} color={color} rightIcon={rightIcon}>
      {children}
    </Button>
  );
}

export default CustomButton;
