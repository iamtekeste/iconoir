import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const EvPlug = forwardRef(
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
            d="M12 13.1538V21M12 13.1538H15C16.1046 13.1538 17 12.2584 17 11.1538V8.05128C17 7.13081 16.2538 6.38462 15.3333 6.38462V6.38462M12 13.1538H9C7.89543 13.1538 7 12.2584 7 11.1538V8.05128C7 7.13081 7.74619 6.38462 8.66667 6.38462V6.38462M8.66667 6.38462H12H15.3333M8.66667 6.38462V3M15.3333 6.38462V3"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
      </svg>
    );
  }
);

EvPlug.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

EvPlug.displayName = 'EvPlug';

export default EvPlug;
