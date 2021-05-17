import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const RefreshCircular = forwardRef(
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
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="1.5"
          />
          <path
            d="M16.5829 9.66667C15.8095 8.09697 14.043 7 11.9876 7C9.38854 7 7.25148 8.75408 7 11M16.5829 9.66667H14.4938M16.5829 9.66667V9.66667C16.8133 9.66667 17 9.47994 17 9.24959V7.44444"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.41707 13.6667C8.19054 15.6288 9.95698 17 12.0124 17C14.6115 17 16.7485 14.8074 17 12M7.41707 13.6667H9.50619M7.41707 13.6667V13.6667C7.18673 13.6667 7 13.8534 7 14.0837V16.4444"
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

RefreshCircular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

RefreshCircular.displayName = 'RefreshCircular';

export default RefreshCircular;
