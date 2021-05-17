import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const MicWarning = forwardRef(
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
            d="M21 14L21 18"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M21 22.01L21.01 21.9989"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <rect
            x="7"
            y="2"
            width="6"
            height="12"
            rx="3"
            stroke="currentColor"
            stroke-width="1.5"
          />
          <path
            d="M3 10V11C3 14.866 6.13401 18 10 18V18M17 10V11C17 14.866 13.866 18 10 18V18M10 18V22M10 22H7M10 22H13"
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

MicWarning.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

MicWarning.displayName = 'MicWarning';

export default MicWarning;
