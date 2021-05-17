import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const SingleTapGesture = forwardRef(
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
            d="M4 7.28995C5.49623 5.03879 8.51707 3.5 12 3.5C15.4829 3.5 18.5038 5.03879 20 7.28995M19 13.5C19 17.366 15.866 20.5 12 20.5C8.13401 20.5 5 17.366 5 13.5C5 9.63401 8.13401 6.5 12 6.5C15.866 6.5 19 9.63401 19 13.5Z"
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

SingleTapGesture.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SingleTapGesture.displayName = 'SingleTapGesture';

export default SingleTapGesture;
