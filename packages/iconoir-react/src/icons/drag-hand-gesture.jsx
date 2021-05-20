import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const DragHandGesture = forwardRef(
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
            d="M7 10.5001V6.50005C7 5.67162 7.67157 5.00005 8.5 5.00005V5.00005C9.32843 5.00005 10 5.55526 10 6.38368C10 6.4215 10 6.46028 10 6.50005M7 10.5001V13.5001M7 10.5001L4.99591 13.1722C4.41845 13.9421 4.47127 15.0142 5.1216 15.7236L8.9055 19.8515C9.28432 20.2648 9.81826 20.5001 10.3789 20.5001C11.4651 20.5001 13.2415 20.5001 15 20.5001C17.4 20.5001 19 19 19 16.5001C19 16.5001 19 16.5001 19 16.5001C19 16.5001 19 9.64291 19 7.92862C19 5.64291 16 5.64291 16 7.92862M10 8.50005C10 8.50005 10 7.85719 10 6.50005M10 6.50005C10 4.21434 13 4.21434 13 6.50005C13 6.50005 13 6.50005 13 6.50005C13 6.50005 13 6.80397 13 7.02713M13 8.50005C13 8.50005 13 7.91975 13 7.02713M16 8.50005C16 8.50005 16 8.37494 16 7.92862M16 7.92862C16 7.70547 16 7.25028 16 7.02713C16 4.74141 13 4.74141 13 7.02713"
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

DragHandGesture.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

DragHandGesture.displayName = 'DragHandGesture';

export default DragHandGesture;