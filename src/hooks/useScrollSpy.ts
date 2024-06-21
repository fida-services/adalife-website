/* eslint-disable @typescript-eslint/no-inferrable-types */
import { useLayoutEffect, useState } from 'react';

// Restrict value to be between the range [0, value]
const clamp = (value: number) => Math.max(0, value);

// Check if number is between two values
const isBetween = (value: number, floor: number, ceil: number) => value >= floor && value <= ceil;

export const useScrollSpy = (ids: any, offset: number = 0) => {
  const [activeId, setActiveId] = useState('');

  useLayoutEffect(() => {
    const listener = () => {
      const scroll = window.scrollY;

      const position = ids
      // @ts-ignore
        .map((id) => {
          // console.log(id);
          const element = document.getElementById(id);
          // console.log(element);

          if (!element) return { id, top: -1, bottom: -1 };

          const rect = element.getBoundingClientRect();
          // console.log(rect);
          const top = clamp(rect.top + scroll - offset);
          const bottom = clamp(rect.bottom + scroll - offset);

          return { id, top, bottom };
        })
        // @ts-ignore
        .find(({ top, bottom }) => isBetween(scroll, top, bottom));

      console.log(position);
      // console.log(scroll);

      setActiveId(position?.id || '');
    };

    listener();

    window.addEventListener('resize', listener);
    window.addEventListener('scroll', listener);

    return () => {
      window.removeEventListener('resize', listener);
      window.removeEventListener('scroll', listener);
    };
  }, [ids, offset]);

  return activeId;
};