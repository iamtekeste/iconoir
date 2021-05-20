import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const Headset = forwardRef(
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
            d="M4 13.5L5.25448 13.1864C5.63317 13.0917 6 13.3781 6 13.7685V19.2315C6 19.6219 5.63317 19.9083 5.25448 19.8136L3.51493 19.3787C2.62459 19.1561 2 18.3562 2 17.4384V15.5616C2 14.6438 2.62459 13.8439 3.51493 13.6213L4 13.5ZM4 13.5V13C4 8.02944 7.58172 4 12 4C16.4183 4 20 8.02944 20 13V13.5M20 13.5L18.7455 13.1864C18.3668 13.0917 18 13.3781 18 13.7685V19.2315C18 19.6219 18.3668 19.9083 18.7455 19.8136L20.4851 19.3787C21.3754 19.1561 22 18.3562 22 17.4384V15.5616C22 14.6438 21.3754 13.8439 20.4851 13.6213L20 13.5Z"
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

Headset.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Headset.displayName = 'Headset';

export default Headset;