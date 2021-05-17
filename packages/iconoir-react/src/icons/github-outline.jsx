import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const GitHubOutline = forwardRef(
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
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.66667 17.7017C7.66667 18.3335 6 17.7017 5 15.7543M14.3333 19V17.137C14.3583 16.8275 14.3154 16.5163 14.2073 16.2242C14.0993 15.9321 13.9286 15.6657 13.7067 15.4428C15.8 15.2156 18 14.4431 18 10.8989C17.9998 9.99255 17.6418 9.12101 17 8.46461C17.3039 7.67171 17.2824 6.79528 16.94 6.01739C16.94 6.01739 16.1533 5.7902 14.3333 6.97811C12.8053 6.57488 11.1947 6.57488 9.66667 6.97811C7.84667 5.7902 7.06 6.01739 7.06 6.01739C6.71758 6.79528 6.6961 7.67171 7 8.46461C6.35342 9.12588 5.99502 10.0053 6 10.9183C6 14.4366 8.2 15.2091 10.2933 15.4622C10.074 15.6829 9.90484 15.9461 9.79687 16.2347C9.6889 16.5232 9.64454 16.8306 9.66667 17.137V19"
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

GitHubOutline.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

GitHubOutline.displayName = 'GitHubOutline';

export default GitHubOutline;
