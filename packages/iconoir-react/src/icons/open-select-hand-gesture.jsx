import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const OpenSelectHandGesture = forwardRef(
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
            d="M11 10C11 10 11 8.61578 11 7.5M11 7.5C11 6.34156 11 4.68968 11 3.49899C11 2.67056 10.3284 2 9.5 2V2C8.67157 2 8 2.67157 8 3.5V14.5714L6.17716 12.8354C5.53522 12.224 4.51329 12.2705 3.92953 12.9377V12.9377C3.40196 13.5406 3.41749 14.4453 3.96544 15.0298L9.90739 21.3679C10.2855 21.7712 10.8127 22 11.3655 22C12.4505 22 14.2343 22 16 22C18.4 22 20 20 20 18C20 18 20 18 20 18C20 18 20 11.1429 20 9.42857C20 7.14286 17 7.14286 17 9.42857M11 7.5C11 5.21429 14 5.21429 14 7.5C14 7.5 14 7.5 14 7.5C14 7.5 14 8.06256 14 8.28571M14 10C14 10 14 9.17834 14 8.28571M17 10C17 10 17 9.87489 17 9.42857M17 9.42857C17 9.20541 17 8.50887 17 8.28571C17 6 14 6 14 8.28571"
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

OpenSelectHandGesture.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

OpenSelectHandGesture.displayName = 'OpenSelectHandGesture';

export default OpenSelectHandGesture;
