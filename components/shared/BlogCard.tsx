"use client";
import React from "react";
import Card from "./Card";
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
    <Card>
      <div className='space-y-4 '>
        <span className='text-slate-800 dark:text-slate-200 text-xl lg:text-2xl font-semibold  group-hover:text-teal-500'>
          {title}
        </span>

        <p className='font-medium text-sm text-slate-800 dark:text-slate-200'>
          {description.slice(0, 150).concat("...")}
        </p>

        <div>
          <Button
            className='mt-6'
            variant='text'
            rightIcon={<FiArrowRight className='' />}>
            Read More
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default BlogCard;
