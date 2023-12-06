import * as React from "react";
import Svg, { G, Ellipse, Path } from "react-native-svg";

const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.96 26" {...props}>
    <G data-name="Camada 2">
      <G data-name="Camada 1">
        <Ellipse
          cx={13.48}
          cy={13}
          rx={13.48}
          ry={13}
          style={{
            fill: "#2e3a59",
          }}
        />
        <Path
          d="M18.54 12.76H14.2V8.43a.72.72 0 0 0-.2-.52.74.74 0 0 0-.51-.21.72.72 0 0 0-.72.73v4.33H8.43a.73.73 0 0 0-.73.72.7.7 0 0 0 .22.51.68.68 0 0 0 .51.21h4.33v4.34a.72.72 0 0 0 .72.72.74.74 0 0 0 .51-.21.71.71 0 0 0 .21-.51V14.2h4.34a.71.71 0 0 0 .51-.21.74.74 0 0 0 .21-.51.72.72 0 0 0-.72-.72Z"
          style={{
            fill: "#fff",
          }}
        />
      </G>
    </G>
  </Svg>
);

export default SvgComponent;
