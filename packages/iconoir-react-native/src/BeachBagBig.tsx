import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { IconoirContext } from "./IconoirContext";
const SvgBeachBagBig = (passedProps: SvgProps, ref: Ref<Svg>) => {
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
        d="m2.77 12-.633-3.287A.6.6 0 0 1 2.727 8h18.547a.6.6 0 0 1 .589.713L21.23 12M2.769 12h18.462M2.769 12l.616 4m17.846-4-.616 4m0 0-.537 3.491a.6.6 0 0 1-.593.509H4.515a.6.6 0 0 1-.593-.509L3.385 16m17.23 0H3.385M5 8V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgBeachBagBig);
export default ForwardRef;
