import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const NetworkRight = forwardRef(
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
          <rect
            width="7"
            height="5"
            rx="0.6"
            transform="matrix(0 -1 -1 0 22 21)"
            stroke="currentColor"
            stroke-width="1.5"
          />
          <rect
            width="7"
            height="5"
            rx="0.6"
            transform="matrix(0 -1 -1 0 7 15.5)"
            stroke="currentColor"
            stroke-width="1.5"
          />
          <rect
            width="7"
            height="5"
            rx="0.6"
            transform="matrix(0 -1 -1 0 22 10)"
            stroke="currentColor"
            stroke-width="1.5"
          />
          <path
            d="M17 17.5H13.5C12.3954 17.5 11.5 16.6046 11.5 15.5V12M17 6.5H13.5C12.3954 6.5 11.5 7.39543 11.5 8.5V12M11.5 12H7"
            stroke="currentColor"
            stroke-width="1.5"
          />
        </svg>
      </svg>
    );
  }
);

NetworkRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

NetworkRight.displayName = 'NetworkRight';

export default NetworkRight;
