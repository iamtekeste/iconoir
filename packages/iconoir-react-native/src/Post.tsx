import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";
function SvgPost(
  passedProps: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>
) {
  const context = React.useContext(IconoirContext);
  const props = {
    ...context,
    ...passedProps,
  };
  return (
    <Svg
      width="1.5em"
      height="1.5em"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      fill="none"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <Path
        d="M2.906 17.505L5.337 3.718a2 2 0 012.317-1.623L19.472 4.18a2 2 0 011.622 2.317l-2.431 13.787a2 2 0 01-2.317 1.623L4.528 19.822a2 2 0 01-1.622-2.317z"
        stroke="currentColor"
      />
      <Path
        d="M8.929 6.382l7.879 1.389M8.234 10.321l7.879 1.39M7.54 14.26l4.924.869"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </Svg>
  );
}
const ForwardRef = React.forwardRef(SvgPost);
export default ForwardRef;