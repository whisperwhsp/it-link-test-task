import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICar } from "../../models/ICar";

const initialState: { cars: ICar[] } = {
  cars: []
}

export const addCar = createAsyncThunk(
  'cars/add',
  async (car: ICar) => {
    fetch('http://localhost:3001/cars', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(car),
    })
  }
)

export const updateCar = createAsyncThunk(
  'cars/update',
  async (car: ICar) => {
    fetch(`http://localhost:3001/cars/${car.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(car),
    })
  }
)

export const removeCar = createAsyncThunk(
  'cars/remove',
  async (carId: number) => {
    fetch(`http://localhost:3001/cars/${carId}`, {
      method: 'DELETE',
    })
      .then((res) => console.log(res));
  }
)

const carsSlice = createSlice({
  name: 'cars',
  initialState: initialState,
  reducers: {},
})

export default carsSlice.reducer;