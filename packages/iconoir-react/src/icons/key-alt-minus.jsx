import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const KeyAltMinus = forwardRef(
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
            d="M14.9922 18H17.9922H20.9922"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.4114 10.3431C13.9735 11.9052 16.5061 11.9052 18.0682 10.3431C19.6303 8.78105 19.6303 6.24839 18.0682 4.68629C16.5061 3.1242 13.9735 3.1242 12.4114 4.68629C10.8493 6.24839 10.8493 8.78105 12.4114 10.3431ZM12.4114 10.3431L6.75451 16M6.0474 20.9497L3.92608 18.8284L6.75451 16M6.75451 16L8.87583 18.1213"
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

KeyAltMinus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

KeyAltMinus.displayName = 'KeyAltMinus';

export default KeyAltMinus;
