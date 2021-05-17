import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const GlassHalf = forwardRef(
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
            d="M3.03919 4.2939C3.01449 4.10866 3.0791 3.92338 3.23133 3.81499C3.9272 3.31953 6.3142 2 12 2C17.6858 2 20.0728 3.31952 20.7687 3.81499C20.9209 3.92338 20.9855 4.10866 20.9608 4.2939L19.2616 17.0378C19.0968 18.2744 18.3644 19.3632 17.2813 19.9821L16.9614 20.1649C13.8871 21.9217 10.1129 21.9217 7.03861 20.1649L6.71873 19.9821C5.6356 19.3632 4.90325 18.2744 4.73838 17.0378L3.03919 4.2939Z"
            stroke="currentColor"
            stroke-width="1.5"
          />
          <path
            d="M3 5C5.57143 7.66666 18.4286 7.66662 21 5"
            stroke="currentColor"
            stroke-width="1.5"
          />
          <path
            d="M4 13C5.03151 14.2034 7.92505 14.8638 11 14.981C12.3455 15.0323 13.7258 14.9796 15 14.823C17.2664 14.5443 19.1972 13.9366 20 13"
            stroke="currentColor"
            stroke-width="1.5"
          />
          <path
            d="M4 13C6.28571 10.3333 17.7143 10.3334 20 13"
            stroke="currentColor"
            stroke-width="1.5"
          />
        </svg>
      </svg>
    );
  }
);

GlassHalf.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

GlassHalf.displayName = 'GlassHalf';

export default GlassHalf;
