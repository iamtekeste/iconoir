import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgPanoramaEnlarge = (
  passedProps: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => {
  const context = React.useContext(IconoirContext);
  const props = {
    ...context,
    ...passedProps,
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      fill="none"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 5c2.995 0 7.235.692 8.576.925a.581.581 0 0 1 .48.503c.13 1.028.444 3.691.444 5.572 0 1.88-.313 4.544-.444 5.572a.581.581 0 0 1-.48.503c-1.34.233-5.58.925-8.576.925-2.995 0-7.235-.692-8.576-.925a.582.582 0 0 1-.48-.503C2.814 16.544 2.5 13.881 2.5 12c0-1.88.313-4.544.444-5.572a.582.582 0 0 1 .48-.503C4.764 5.692 9.004 5 12 5Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgPanoramaEnlarge);
export default ForwardRef;
