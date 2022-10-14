import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const selectPage = createSlice({
  name: 'selectpage',
  initialState,
  reducers: {
    GoToSelectPage: (state, action) => {
        state.value=action.payload;
    },
  
  },
})

// Action creators are generated for each case reducer function
export const {  GoToSelectPage} = selectPage.actions

export default selectPage.reducer

