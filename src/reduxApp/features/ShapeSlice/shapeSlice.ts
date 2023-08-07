import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
    },
    deleteShape: (state, action: PayloadAction<string>) => {
      const shapeNameToDelete = action.payload;
      state.shapeArray = state.shapeArray.filter(
        (shape) => shape.name !== shapeNameToDelete
      );
    }
  }
});

export const { addShapeToArray, deleteShape } = shapeSlice.actions;

export default shapeSlice.reducer;
