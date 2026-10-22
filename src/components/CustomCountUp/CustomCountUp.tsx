'use client';

import CountUp from 'react-countup';

type CustomCountUpProps = {
  start?: number;
  end: number | string;
  duration?: number;
  separator?: string;
};

export default function CustomCountUp({ start, end, duration, separator = " " }: CustomCountUpProps) {
  return (
    <CountUp
      start={start || 0}
      end={typeof end === "string" ? Number(end.replaceAll(",", "")) : end}
      duration={duration || 5}
      separator={separator}
      enableScrollSpy={true}
    />
  );
}
