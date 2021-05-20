import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const GitHub = forwardRef(
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
            d="M9 20.0268C6 21 3.5 20.0268 2 17.0268M16 22.0268V19.1568C16.0375 18.68 15.9731 18.2006 15.811 17.7506C15.6489 17.3006 15.3929 16.8902 15.06 16.5468C18.2 16.1968 21.5 15.0068 21.5 9.54679C21.4997 8.15062 20.9627 6.80799 20 5.79679C20.4559 4.5753 20.4236 3.22514 19.91 2.02679C19.91 2.02679 18.73 1.67679 16 3.50679C13.708 2.88561 11.292 2.88561 9 3.50679C6.27 1.67679 5.09 2.02679 5.09 2.02679C4.57638 3.22514 4.54414 4.5753 5 5.79679C4.03013 6.81549 3.49252 8.17026 3.5 9.57679C3.5 14.9968 6.8 16.1868 9.94 16.5768C9.611 16.9168 9.35726 17.3222 9.19531 17.7667C9.03335 18.2112 8.96681 18.6849 9 19.1568V22.0268"
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

GitHub.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

GitHub.displayName = 'GitHub';

export default GitHub;