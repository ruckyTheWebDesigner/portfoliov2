import { Box } from "@mantine/core";
import React from "react";

function Aside() {
  return (
    <Box p={"md"} className='sticky top-10'>
      <span className='text-xl md:text-2xl lg:text-3xl font-semibold text-primary-color'>
        Popular Blogs
      </span>
    </Box>
  );
}

export default Aside;
