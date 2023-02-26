import { Avatar } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import React from "react";

import { fetchUser } from "../../utils/user";

function Author() {
  const { data, isLoading } = useQuery({
    queryKey: ["user", name],
    queryFn: async () => {
      const response = await fetchUser();

      const {
        data: {
          user: { name, photo },
        },
      } = response;

      return { name, photo };
    },

    onError(error) {
      console.log(error);
    },
  });
  return (
    <div className='flex items-center space-x-6'>
      <div>
        {isLoading ? (
          <Avatar size={60} radius={100} />
        ) : (
          <Avatar src={data.photo} alt={data.name} size={60} radius={100} />
        )}
      </div>
      <div className='leading-relaxed'>
        <h6 className='dark:text-slate-300'>WRITTEN BY</h6>
        <span className='font-semibold text-xl lg:text-2xl'>{data?.name}</span>
      </div>
    </div>
  );
}

export default Author;
