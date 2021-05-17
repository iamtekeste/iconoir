import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const Hospital = forwardRef(
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
            d="M6.4 8C6.73137 8 7 7.73137 7 7.4V3.6C7 3.26863 7.26863 3 7.6 3H16.4C16.7314 3 17 3.26863 17 3.6V7.4C17 7.73137 17.2686 8 17.6 8H19.4C19.7314 8 20 8.26863 20 8.6V20.4C20 20.7314 19.7314 21 19.4 21H4.6C4.26863 21 4 20.7314 4 20.4V8.6C4 8.26863 4.26863 8 4.6 8H6.4Z"
            stroke="black"
            stroke-width="1.5"
          />
          <path
            d="M9.99219 8H11.9922M13.9922 8H11.9922M11.9922 8V6M11.9922 8V10"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16 17.01L16.01 16.9989"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16 13.01L16.01 12.9989"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 13.01L12.01 12.9989"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8 13.01L8.01 12.9989"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8 17.01L8.01 16.9989"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 17.01L12.01 16.9989"
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

Hospital.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Hospital.displayName = 'Hospital';

export default Hospital;
