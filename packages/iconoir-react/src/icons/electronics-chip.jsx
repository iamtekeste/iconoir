import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const ElectronicsChip = forwardRef(
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
            d="M10 4H7.6C7.26863 4 7 4.26863 7 4.6V6.5M10 4V1.5M10 4H14M14 4H16.4C16.7314 4 17 4.26863 17 4.6V6.5M14 4V1.5M10 20H7.6C7.26863 20 7 19.7314 7 19.4V17.5M10 20V22.5M10 20H14M14 20H16.4C16.7314 20 17 19.7314 17 19.4V17.5M14 20V22.5M7 17.5H4.5M7 17.5V12M7 12H4.5M7 12V6.5M17 12H19.5M17 12V17.5M17 12V6.5M17 17.5H19.5M17 6.5H19.5M7 6.5H4.5"
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

ElectronicsChip.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ElectronicsChip.displayName = 'ElectronicsChip';

export default ElectronicsChip;
