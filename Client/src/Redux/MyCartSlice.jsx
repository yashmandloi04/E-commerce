import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../Helpers/Path";
import { createAsyncThunk } from "@reduxjs/toolkit";

const placeOrderHandler = createAsyncThunk('placeOrder', async (cart) => {
  console.log(cart)
  let response = await axios.post(`${API_URL}/order`, cart, {
    headers: {
      Authorization: localStorage.getItem('access-user')
    }
  })
  if(response.request.status == 200)
    return cart
})

const MyCartSlice = createSlice({
  name: 'MyCart',
  initialState: [],
  reducers: {
    addProduct(curState, action) {
      curState.push(action.payload)
    },
    removeProduct: (curState, action) => {
      curState.filter(mapPro => mapPro._id != action.payload._id)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(placeOrderHandler.fulfilled, (curState, action) => {
      
    })
  }
})

export { placeOrderHandler }
export const { addProduct, removeProduct } = MyCartSlice.actions
export default MyCartSlice.reducer