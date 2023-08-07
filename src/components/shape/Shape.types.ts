export interface IShapeProps {
  width: number;
  height: number;
  xValue: number;
  yValue: number;
  name: string;
  setShapeDetail: Function;
}

export interface IShapeContainerStylesProps {
  height: number;
  width: number;
  top: number;
  left: number;
  hovered: string;
}

export interface IShapeDrawing {
  name: string;
  width: number;
  height: number;
  xAxis: number;
  yAxis: number;
}
