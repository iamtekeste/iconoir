import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const SaveFloppyDisk = forwardRef(
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
            d="M8 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H6M8 3V8.4C8 8.73137 8.26863 9 8.6 9H15.4C15.7314 9 16 8.73137 16 8.4V3M8 3H16M16 3H16.1716C16.702 3 17.2107 3.21071 17.5858 3.58579L20.4142 6.41421C20.7893 6.78929 21 7.29799 21 7.82843V19C21 20.1046 20.1046 21 19 21H18M6 21V13.6C6 13.2686 6.26863 13 6.6 13H17.4C17.7314 13 18 13.2686 18 13.6V21M6 21H18"
            stroke="black"
            stroke-width="1.5"
          />
        </svg>
      </svg>
    );
  }
);

SaveFloppyDisk.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SaveFloppyDisk.displayName = 'SaveFloppyDisk';

export default SaveFloppyDisk;
