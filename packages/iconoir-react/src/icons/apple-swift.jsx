import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const AppleSwift = forwardRef(
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
            d="M20.457 14.5892C20.9032 13.1527 21.9081 7.84019 14.5261 3.10086C14.2661 2.9345 13.9248 2.97821 13.7186 3.20043C13.5111 3.42264 13.5024 3.75778 13.6974 3.99092C13.7274 4.02614 16.4472 7.33991 15.4798 11.1248C13.8074 9.97369 7.1565 4.70249 7.1565 4.70249L11 11L3.8617 6.40006C3.8617 6.40006 8.90765 12.5953 11.9962 14.9255C10.5013 15.4622 7.25274 16.0305 2.963 13.364C2.72052 13.2122 2.40179 13.2413 2.1918 13.438C1.98431 13.6311 1.93931 13.9395 2.08555 14.1812C2.2293 14.4192 5.66784 20 12.9387 20C14.9335 20 16.0997 19.4317 17.0372 18.9764C17.6134 18.6971 18.0683 18.4749 18.5646 18.4749C19.8007 18.4749 20.6119 19.7025 20.6194 19.7134C20.7344 19.8919 20.9357 20 21.1507 20C21.1669 20 21.1844 19.9988 21.2019 19.9976C21.4356 19.9794 21.6381 19.8373 21.7281 19.6272C22.6206 17.5544 21.0832 15.359 20.457 14.5892Z"
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

AppleSwift.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

AppleSwift.displayName = 'AppleSwift';

export default AppleSwift;
