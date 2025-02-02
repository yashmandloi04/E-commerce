import { createSlice } from '@reduxjs/toolkit'

const UserAuthSlice = createSlice({
  name: 'UserAuth',
  initialState: false,
  reducers: {
    loggedIn: ()=>{
      return true
    },
    loggedOut: ()=>{
      return false
    },
  }
})

export default UserAuthSlice.reducer
export const { loggedIn, loggedOut } = UserAuthSlice.actions