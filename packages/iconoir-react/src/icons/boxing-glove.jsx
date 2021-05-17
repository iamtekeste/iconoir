import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const BoxingGlove = forwardRef(
  ({ color = 'currentColor', size = 24 }, ref) => {
    return (
      <svg
        ref={ref}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        color={color}
        xmlns="http://www.w3.org/2000/svg"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.48901 17.7273H18.3556M8.48901 17.7273V21H18.3556V17.7273M8.48901 17.7273C5.20016 15.5455 3.55573 10.0909 4.10387 8.45455C4.54239 7.14545 6.47916 7.54545 7.39273 7.90909M18.3556 17.7273C18.9037 16.8182 20 13.9091 20 9.54545C20 4.09091 17.8074 3 13.4223 3C9.03715 3 7.39273 4.09091 7.39273 7.90909M7.39273 7.90909C7.39273 11.7273 9.03715 12.2727 10.1334 12.2727M7.39273 7.90909C7.75816 8.27273 8.8179 9 10.1334 9C11.449 9 13.9704 9 15.0667 9"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </svg>
    );
  }
);

BoxingGlove.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

BoxingGlove.displayName = 'BoxingGlove';

export default BoxingGlove;
