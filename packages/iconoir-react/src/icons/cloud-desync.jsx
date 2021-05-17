import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const CloudDesync = forwardRef(
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
            d="M20 17.6073C21.4937 17.0221 23 15.6889 23 13C23 9 19.6667 8 18 8C18 6 18 2 12 2C6 2 6 6 6 8C4.33333 8 1 9 1 13C1 15.6889 2.50628 17.0221 4 17.6073"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16.4203 19.4874L14.6525 21.2552C13.0904 22.8173 10.5577 22.8173 8.99564 21.2552L8.64209 20.9016M16.4203 19.4874L16.0667 21.9623L13.9454 19.841L16.4203 19.4874Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.57974 17.0126L6.83728 16.9065C6.80389 17.1402 6.88248 17.376 7.04941 17.5429C7.21633 17.7098 7.45211 17.7884 7.6858 17.755L7.57974 17.0126ZM7.93329 14.5377L8.46362 14.0074C8.26275 13.8065 7.96562 13.7363 7.69612 13.8262C7.42662 13.916 7.231 14.1504 7.19083 14.4316L7.93329 14.5377ZM10.0546 16.659L10.1607 17.4015C10.4419 17.3613 10.6763 17.1657 10.7661 16.8962C10.856 16.6267 10.7858 16.3296 10.5849 16.1287L10.0546 16.659ZM14.8276 16.1287C15.1205 16.4216 15.5953 16.4216 15.8882 16.1287C16.1811 15.8358 16.1811 15.3609 15.8882 15.068L14.8276 16.1287ZM8.81717 14.7145L7.04941 16.4822L8.11007 17.5429L9.87784 15.7751L8.81717 14.7145ZM8.3222 17.1186L8.67575 14.6438L7.19083 14.4316L6.83728 16.9065L8.3222 17.1186ZM7.6858 17.755L10.1607 17.4015L9.94855 15.9166L7.47367 16.2701L7.6858 17.755ZM14.474 15.7751L14.8276 16.1287L15.8882 15.068L15.5347 14.7145L14.474 15.7751ZM7.40296 15.068L9.52428 17.1893L10.5849 16.1287L8.46362 14.0074L7.40296 15.068ZM9.87784 15.7751C11.147 14.5059 13.2048 14.5059 14.474 15.7751L15.5347 14.7145C13.6797 12.8595 10.6722 12.8595 8.81717 14.7145L9.87784 15.7751Z"
            fill="currentColor"
          />
        </svg>
      </svg>
    );
  }
);

CloudDesync.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CloudDesync.displayName = 'CloudDesync';

export default CloudDesync;
