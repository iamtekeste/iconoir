import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const Pentagon = forwardRef(
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
            d="M11.6473 2.25623C11.8576 2.10344 12.1424 2.10344 12.3527 2.25623L22.1089 9.34458C22.3192 9.49737 22.4072 9.76819 22.3269 10.0154L18.6003 21.4846C18.52 21.7318 18.2896 21.8992 18.0297 21.8992H5.97029C5.71035 21.8992 5.47998 21.7318 5.39965 21.4846L1.67309 10.0154C1.59276 9.76819 1.68076 9.49737 1.89105 9.34458L11.6473 2.25623Z"
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

Pentagon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Pentagon.displayName = 'Pentagon';

export default Pentagon;
