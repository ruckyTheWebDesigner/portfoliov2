"use client";
import { Timeline } from "@mantine/core";

import { MdOutlineWork } from "react-icons/md";

const workHistory = [
  {
    title: "Frontend Developer",
    company: "Disc Akademi",
    date: "Nov 2022 - Present",
  },
  {
    title: "Full Stack Developer",
    company: "Freelance",
    date: "Mar 2022 - Nov 2022",
  },
  {
    title: "Frontend Developer",
    company: "Tradezia Global",
    date: "Dec 2019 - Mar 2022",
  },
];

export function Demo() {
  return (
    <Timeline active={0} bulletSize={24} lineWidth={2}>
      {workHistory.map((item) => (
        <Timeline.Item
          key={item.company}
          bullet={<MdOutlineWork size={12} />}
          title={
            <span className='text-gray-800 dark:text-slate-300 pl-4 '>
              {item.title}
            </span>
          }>
          <div className='pl-4'>
            <h6 className='text-gray-700 dark:text-slate-400 '>
              {item.company}
            </h6>
            <p className=' text-gray-600 dark:text-slate-500 text-sm'>
              {item.date}
            </p>
          </div>
        </Timeline.Item>
      ))}
    </Timeline>
  );
}

export default Demo;
