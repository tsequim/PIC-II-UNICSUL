export const isCloseToBottom = ({
  layoutMeasurement,
  contentOffset,
  contentSize,
}: any) => {
  return layoutMeasurement.height + contentOffset.y >= contentSize.height - 20;
};

export const isCloseToTop = ({
  layoutMeasurement,
  contentOffset,
  contentSize,
}: any) => {
  return contentOffset.y == 0;
};

type IDirection = "top" | "bottom";
type IAction = () => void;

interface ICloseToEndProps {
  direction: IDirection;
  layoutMeasurement: any;
  contentOffset: any;
  contentSize: any;
}

export const closeToEndAction = (
  direction: IDirection,
  { layoutMeasurement, contentOffset, contentSize }: ICloseToEndProps,
  action: IAction
) => {
  if (direction == "bottom") {
    if (isCloseToBottom({ layoutMeasurement, contentOffset, contentSize })) {
      action();
    }
  } else {
    if (isCloseToTop({ layoutMeasurement, contentOffset, contentSize })) {
      action();
    }
  }
};
