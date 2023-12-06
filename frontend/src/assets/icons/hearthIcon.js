import * as React from "react";
import Svg, { G, Path } from "react-native-svg";

const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.16 21.43" {...props}>
    <G data-name="Camada 2">
      <Path
        d="M22 2.27a7.6 7.6 0 0 0-9.9-.77A7.57 7.57 0 0 0 2.24 13l7.5 7.52a3.36 3.36 0 0 0 2.36 1 3.32 3.32 0 0 0 2.35-1L22 13a7.58 7.58 0 0 0 0-10.73Zm-1.71 9-7.5 7.5a1 1 0 0 1-.3.2.84.84 0 0 1-.35.07.92.92 0 0 1-.36-.07.84.84 0 0 1-.29-.2l-7.55-7.52a5.12 5.12 0 0 1 3.63-8.74A5.17 5.17 0 0 1 11.19 4a1.26 1.26 0 0 0 .86.36 1.19 1.19 0 0 0 .46-.1 1.31 1.31 0 0 0 .4-.26 5.16 5.16 0 0 1 7.34 7.25Z"
        style={{
          fill: props.color ?? "#2e3a59",
        }}
        data-name="Camada 1"
      />
    </G>
  </Svg>
);

export default SvgComponent;
