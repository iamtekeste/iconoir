import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const DesignPencil = forwardRef(
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
            d="M8 21.1679C9.22492 21.7031 10.5778 22 12 22C13.4222 22 14.7751 21.7031 16 21.1679M8 21.1679C4.46819 19.6248 2 16.1006 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 16.1006 19.5318 19.6248 16 21.1679M8 21.1679V14M8 14L12 7L16 14M8 14C8 14 9.12676 15 10 15C10.8732 15 12 14 12 14C12 14 13.1268 15 14 15C14.8732 15 16 14 16 14M16 14V21.1679"
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

DesignPencil.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

DesignPencil.displayName = 'DesignPencil';

export default DesignPencil;
