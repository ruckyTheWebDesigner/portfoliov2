"use client";
import { Skeleton } from "@mantine/core";
import { DefaultProps, MantineNumberSize, MantineSize } from "@mantine/styles";

function CustomSkeleton({
  radius,
  height,
  width,
}: {
  height?: number | string;
  width?: number | string;
  radius?: MantineNumberSize;
}) {
  return <Skeleton width={width} radius={radius} height={height} />;
}

export default CustomSkeleton;
