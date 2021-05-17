import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const AirplaneOff = forwardRef(
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
            d="M9.88099 9.88688L2.782 14.3237C2.60657 14.4334 2.5 14.6257 2.5 14.8325V15.7315C2.5 16.1219 2.86683 16.4083 3.24552 16.3136L9.75448 14.6864C10.1332 14.5917 10.5 14.8781 10.5 15.2685V18.2277C10.5 18.4008 10.4253 18.5654 10.2951 18.6793L8.13481 20.5695C7.6765 20.9706 8.03808 21.7203 8.63724 21.6114L11.8927 21.0195C11.9636 21.0066 12.0364 21.0066 12.1073 21.0195L15.3628 21.6114C15.9619 21.7203 16.3235 20.9706 15.8652 20.5695L13.7049 18.6793C13.5747 18.5654 13.5 18.4008 13.5 18.2277V15.2685C13.5 14.8781 13.8668 14.5917 14.2455 14.6864L14.7029 14.8007M10.5 7.5V4.5C10.5 3.67157 11.1716 3 12 3V3C12.8284 3 13.5 3.67157 13.5 4.5V9.16745C13.5 9.37433 13.6066 9.56661 13.782 9.67625L21.218 14.3237C21.3934 14.4334 21.5 14.6257 21.5 14.8325V15.7315C21.5 16.1219 21.1332 16.4083 20.7545 16.3136L18.7493 15.8123"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3 3L21 21"
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

AirplaneOff.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

AirplaneOff.displayName = 'AirplaneOff';

export default AirplaneOff;
