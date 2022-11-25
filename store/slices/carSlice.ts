import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICar } from "../../models/ICar";

const initialState: { cars: ICar[] } = {
  cars: []
}

const carsSlice = createSlice({
  name: 'cars',
  initialState: initialState,
  reducers: {
    add: (state, action: PayloadAction<ICar>) => {
      state.cars.push(action.payload);
    },
    remove: (state, action: PayloadAction<number>) => {
      state.cars = state.cars.filter((car) => car.id !== action.payload);
    }
  }
})

export const { add, remove } = carsSlice.actions;
export default carsSlice.reducer;