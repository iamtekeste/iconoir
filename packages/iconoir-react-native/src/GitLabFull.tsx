import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgGitLabFull = (passedProps: SvgProps, ref: Ref<Svg>) => {
  const context = React.useContext(IconoirContext);
  const props = {
    ...context,
    ...passedProps,
  };
  return (
    <Svg
      width="1.5em"
      height="1.5em"
      fill="none"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <Path
        stroke="currentColor"
        d="M17.057 2.544a.2.2 0 0 1 .378-.008l3.114 8.31 1.398 3.73a.2.2 0 0 1-.07.232l-9.76 7.106a.2.2 0 0 1-.235 0l-9.76-7.106a.2.2 0 0 1-.069-.231l1.398-3.73.167-.45 2.944-7.861a.2.2 0 0 1 .378.008l2.47 7.6a.2.2 0 0 0 .19.137h4.8a.2.2 0 0 0 .19-.138l2.467-7.599Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgGitLabFull);
export default ForwardRef;
