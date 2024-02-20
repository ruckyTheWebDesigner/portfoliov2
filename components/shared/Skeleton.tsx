import { Skeleton, SkeletonProps } from "@mantine/core";

interface CustomSkeletonProps extends SkeletonProps {}

function CustomSkeleton({
  radius,
  height,
  width,
}: Readonly<CustomSkeletonProps>) {
  return <Skeleton width={width} radius={radius} height={height} />;
}

export default CustomSkeleton;
