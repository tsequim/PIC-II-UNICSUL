import * as React from "react";
import Svg, { G, Path } from "react-native-svg";

const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.43 22.73" {...props}>
    <G data-name="Camada 2">
      <Path
        d="m19.3 6.84-6.81-6A3.43 3.43 0 0 0 10.22 0 3.39 3.39 0 0 0 8 .87l-6.81 6A3.35 3.35 0 0 0 .29 8 3.55 3.55 0 0 0 0 9.4v9.93a3.41 3.41 0 0 0 3.41 3.4H17a3.4 3.4 0 0 0 3.4-3.4V9.39A3.23 3.23 0 0 0 20.14 8a3.42 3.42 0 0 0-.84-1.15Zm-6.81 13.62H8v-5.68a1.15 1.15 0 0 1 .33-.8 1.14 1.14 0 0 1 .8-.33h2.27a1.14 1.14 0 0 1 .8.33 1.12 1.12 0 0 1 .34.8Zm5.67-1.13A1.13 1.13 0 0 1 17 20.46h-2.24v-5.68a3.41 3.41 0 0 0-3.41-3.4H9.08a3.4 3.4 0 0 0-3.4 3.4v5.68H3.41a1.16 1.16 0 0 1-.81-.33 1.14 1.14 0 0 1-.33-.8V9.39a1.19 1.19 0 0 1 .1-.46 1.24 1.24 0 0 1 .29-.39l6.81-6a1.12 1.12 0 0 1 .75-.28 1.16 1.16 0 0 1 .75.28l6.81 6a1.21 1.21 0 0 1 .28.39 1 1 0 0 1 .1.46Z"
        style={{
          fill: props.color ?? "#2e3a59",
        }}
        data-name="Camada 1"
      />
    </G>
  </Svg>
);

export default SvgComponent;