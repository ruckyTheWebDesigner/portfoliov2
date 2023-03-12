import { Divider } from "@mantine/core";
import React from "react";
import TimeLine from "./TimeLine";

function WorkHistory() {
  return (
    <div className='space-y-6 md:space-y-8 lg:space-y-10'>
      <Divider
        my='xs'
        labelPosition='center'
        label={
          <div
            className='abouttitle text-lg md:text-xl flex items-center space-x-2'
            id='#About'>
            <h6 className='text-teal-400'>02.</h6>
            <h4 className='about dark:text-slate-300'>Work History</h4>
          </div>
        }
      />

      <div className='flex flex-col items-center'>
        <TimeLine />
      </div>
    </div>
  );
}

export default WorkHistory;
