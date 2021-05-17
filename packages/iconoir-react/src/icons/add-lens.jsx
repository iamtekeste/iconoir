import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const AddLens = forwardRef(
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
            d="M2.99219 6H5.99219M8.99219 6H5.99219M5.99219 6V3M5.99219 6V9"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2.11133 13.5C2.83505 18.3113 6.98654 22 11.9996 22C17.5224 22 21.9996 17.5229 21.9996 12C21.9996 6.98697 18.3108 2.83548 13.4996 2.11176"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17.811 13.5C17.2683 15.6084 15.6084 17.2683 13.5 17.811M17.1973 9C17.0977 8.82774 16.9897 8.66089 16.874 8.5"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </svg>
    );
  }
);

AddLens.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

AddLens.displayName = 'AddLens';

export default AddLens;
