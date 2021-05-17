import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const Db = forwardRef(({ color = 'currentColor', size = 24 }, ref) => {
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
          d="M5 6C5 6 5 3 12 3C19 3 19 6 19 6M5 6C5 6 5 9 12 9C19 9 19 6 19 6M5 6V12M19 6V12M5 12V18C5 18 5 21 12 21C19 21 19 18 19 18V12M5 12C5 12 5 15 12 15C19 15 19 12 19 12"
          stroke="currentColor"
          stroke-width="1.5"
        />
      </svg>
    </svg>
  );
});

Db.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Db.displayName = 'Db';

export default Db;
