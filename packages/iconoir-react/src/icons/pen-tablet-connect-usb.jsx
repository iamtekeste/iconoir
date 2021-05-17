import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const PenTabletConnectUsb = forwardRef(
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
            d="M6 3H20C21.1046 3 22 3.89543 22 5V7M6 3H4C2.89543 3 2 3.89543 2 5V12M6 3V12M6 21H4C2.89543 21 2 20.1046 2 19V12M6 21H20C21.1046 21 22 20.1046 22 19V17M6 21V12M2 12H6"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            opacity="0.9"
            d="M19.25 12C19.25 12.7531 19.8656 13.3636 20.625 13.3636C21.3844 13.3636 22 12.7531 22 12C22 11.2469 21.3844 10.6364 20.625 10.6364C19.8656 10.6364 19.25 11.2469 19.25 12ZM19.25 12H18.7M11 12H17.6M18.7 12L17.875 15H16.225M18.7 12H17.6M17.6 12L16.5 9H14.575"
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

PenTabletConnectUsb.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PenTabletConnectUsb.displayName = 'PenTabletConnectUsb';

export default PenTabletConnectUsb;
