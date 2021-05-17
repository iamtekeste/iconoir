import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const HistoricShieldAlt = forwardRef(
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
            d="M4 10V2.6C4 2.26863 4.26863 2 4.6 2H12M4 10V15.5279C4 17.043 4.85601 18.428 6.21115 19.1056L11.7317 21.8658C11.9006 21.9503 12.0994 21.9503 12.2683 21.8658L17.7889 19.1056C19.144 18.428 20 17.043 20 15.5279V10M4 10H12M20 10V2.6C20 2.26863 19.7314 2 19.4 2H12M20 10H12M12 10V2"
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

HistoricShieldAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

HistoricShieldAlt.displayName = 'HistoricShieldAlt';

export default HistoricShieldAlt;
