"use client";

import React, { Suspense } from "react";
import CustomAvatar from "../shared/Avatar";
interface AuthorProps {
  name: string;
  photo: string;
}

function Author({ name, photo }: AuthorProps) {
  return (
    <div className='flex items-center space-x-6'>
      <div>
        <Suspense fallback={<CustomAvatar size={60} radius={100} />}>
          <CustomAvatar src={photo} alt={name} size={60} radius={100} />
        </Suspense>
      </div>
      <div className='leading-relaxed'>
        <h6 className='dark:text-slate-300'>WRITTEN BY</h6>
        <span className='font-semibold text-xl lg:text-2xl'>{name}</span>
      </div>
    </div>
  );
}

export default Author;
