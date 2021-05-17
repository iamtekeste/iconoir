import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const Language = forwardRef(
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
            d="M2.62961 8.5C2.22255 9.58934 2 10.7687 2 12C2 13.2313 2.22255 14.4107 2.62961 15.5M2.62961 8.5H21.3704M2.62961 8.5C3.93677 5.00191 7.14665 2.43196 11 2.04938M21.3704 8.5C21.7775 9.58934 22 10.7687 22 12C22 13.2313 21.7775 14.4107 21.3704 15.5M21.3704 8.5C20.0632 5.00191 16.8534 2.43196 13 2.04938M2.62961 15.5H21.3704M2.62961 15.5C3.93677 18.9981 7.14665 21.568 11 21.9506M21.3704 15.5C20.0632 18.9981 16.8534 21.568 13 21.9506M13 2.04938C12.6711 2.01672 12.3375 2 12 2C11.6625 2 11.3289 2.01672 11 2.04938M13 2.04938C13 2.04938 16 6 16 12C16 18 13 21.9506 13 21.9506M13 21.9506C12.6711 21.9833 12.3375 22 12 22C11.6625 22 11.3289 21.9833 11 21.9506M11 21.9506C11 21.9506 8 18 8 12C8 6 11 2.04938 11 2.04938"
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

Language.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Language.displayName = 'Language';

export default Language;
