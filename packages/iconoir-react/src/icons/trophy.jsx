import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const Trophy = forwardRef(
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
            d="M17.3132 4H6.74532M17.3132 4C17.3132 4 16.4326 17.2571 12.0293 17.2571M17.3132 4C17.3132 4 18.2344 3.01733 19 2.99999C20.5 2.96603 20.7773 4 20.7773 4C21.0709 4.60953 21.3057 6.19429 19.8967 7.65715C18.4876 9.12 16.9103 10.4 16.2684 10.8571M6.74532 4C6.74532 4 6.97572 7.46845 7.79009 10.8571M6.74532 4C6.74532 4 5.78552 3.00614 5 3C3.5 2.98829 3.22268 4 3.22268 4C2.92913 4.60953 2.69429 6.19429 4.10334 7.65715C5.51239 9.12 7.14828 10.4 7.79009 10.8571M12.0293 17.2571C9.87824 17.2571 8.56784 14.0935 7.79009 10.8571M12.0293 17.2571C12.0293 17.2571 8.50663 18.1714 8.50663 20C10.4856 20 13.5679 20 15.5519 20C15.5519 18.1714 12.0293 17.2571 12.0293 17.2571Z"
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

Trophy.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Trophy.displayName = 'Trophy';

export default Trophy;
