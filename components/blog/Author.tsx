import Image from "next/image";
import React, { Suspense } from "react";
interface AuthorProps {
  name: string;
  photo: string;
}

function Author({ name, photo }: AuthorProps) {
  return (
    <div className='flex items-center space-x-6'>
      <div>
        <Suspense
          fallback={
            <div className='w-10 h-10 rounded-full bg-gray-200 animate-pulse' />
          }>
          <Image
            alt={name}
            src={photo}
            width={40}
            height={40}
            className='rounded-full'
          />
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
