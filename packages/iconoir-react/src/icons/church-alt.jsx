import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const ChurchAlt = forwardRef(
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
            d="M12 22V11.2485C12 11.0894 11.9368 10.9368 11.8243 10.8243L8 7M12 22H8M12 22H19.4C19.7314 22 20 21.7314 20 21.4V10.7485C20 10.5894 19.9368 10.4368 19.8243 10.3243L16.6757 7.17574C16.5632 7.06321 16.4106 7 16.2515 7H8M8 7L4.17574 10.8243C4.06321 10.9368 4 11.0894 4 11.2485V21.4C4 21.7314 4.26863 22 4.6 22H8M8 7V4M8 22V17M8 2V4M8 4H6M8 4H10"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8 13.01L8.01 12.9989"
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

ChurchAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ChurchAlt.displayName = 'ChurchAlt';

export default ChurchAlt;
