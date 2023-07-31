import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import {RootState} from "hooks"

interface Shape {
  name: string;
  width: number;
  height: number;
  xAxis: number;
  yAxis: number;
}

interface ShapeState {
  shapeArray: Shape[];
}

const initialState: ShapeState = {
  shapeArray: []
};

const shapeSlice = createSlice({
  name: "ShapeData",
  initialState,
  reducers: {
    addShapeToArray: (state, action: PayloadAction<Shape>) => {
      const shape = action.payload;
      state.shapeArray.push(shape);
    }
  }
});

export const { addShapeToArray } = shapeSlice.actions;

export default shapeSlice.reducer;
