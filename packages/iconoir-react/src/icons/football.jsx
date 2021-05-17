import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const Football = forwardRef(
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
            d="M12 13.8281L12 21M12 13.8281L5 13.8281L5 3M12 13.8281H19V3"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.0003 6.732C14.071 6.11379 14.4336 4.61841 14.5487 3.89927C14.5872 3.65863 14.4553 3.43024 14.2277 3.34327C13.5474 3.08336 12.071 2.64969 11.0003 3.26789C9.92951 3.8861 9.56691 5.38148 9.45183 6.10061C9.41332 6.34125 9.54519 6.56965 9.77284 6.65662C10.4532 6.91653 11.9295 7.3502 13.0003 6.732Z"
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

Football.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Football.displayName = 'Football';

export default Football;
