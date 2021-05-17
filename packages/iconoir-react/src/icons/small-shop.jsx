import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const SmallShop = forwardRef(
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
            d="M16 9L16.8243 9.82426C16.9368 9.93679 17.0894 10 17.2485 10H21.2046C21.6032 10 21.891 9.61846 21.7815 9.23517L20.1243 3.43517C20.0507 3.17759 19.8153 3 19.5474 3H15.5M16 9L15.1757 9.82426C15.0632 9.93679 14.9106 10 14.7515 10H9.24853C9.0894 10 8.93679 9.93679 8.82426 9.82426L8 9M16 9L15.5 3M8 9L7.17574 9.82426C7.06321 9.93679 6.9106 10 6.75147 10H2.79544C2.39681 10 2.10901 9.61846 2.21852 9.23517L3.87567 3.43517C3.94926 3.17759 4.18469 3 4.45258 3H8.5M8 9L8.5 3M15.5 3H8.5"
            stroke="currentColor"
            stroke-width="1.5"
          />
          <path
            d="M3 10V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V10"
            stroke="currentColor"
            stroke-width="1.5"
          />
        </svg>
      </svg>
    );
  }
);

SmallShop.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SmallShop.displayName = 'SmallShop';

export default SmallShop;
