import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const Egg = forwardRef(({ color = 'currentColor', size = 24 }, ref) => {
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
          d="M12 22C16.4183 22 20 18.4183 20 14C20 9.58172 16.4183 2 12 2C7.58172 2 4 9.58172 4 14C4 18.4183 7.58172 22 12 22Z"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </svg>
  );
});

Egg.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Egg.displayName = 'Egg';

export default Egg;
