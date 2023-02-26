"use client";
import React from "react";
import { Card, Text } from "@mantine/core";
import { FiArrowRight } from "react-icons/fi";

import Button from "./Button";

interface Props {
  title: string;
  description: string;
}

function BlogCard({
  title,
  description,
}: Props & { children?: React.ReactNode }) {
  return (
    <Card
      sx={{
        height: "100%",
        transition: "all 0.2s ease-in-out",
        "&:hover": {
          transform: "translateY(-5px)",
        },
      }}
      shadow='xl'
      className='flex flex-col justify-between items-start leading-relaxed group  space-y-2 lg:space-y-4 cursor-pointer hover:shadow-xl p-4 lg:p-6'
      radius={"md"}>
      <div className='space-y-4 '>
        <span className=' text-xl lg:text-2xl font-semibold  group-hover:text-teal-400'>
          {title}
        </span>

        <p className='font-medium'>{description.slice(0, 150).concat("...")}</p>
      </div>

      <Button variant='gradient' rightIcon={<FiArrowRight className='' />}>
        Read More
      </Button>
    </Card>
  );
}

export default BlogCard;
