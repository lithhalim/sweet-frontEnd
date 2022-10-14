import { configureStore } from '@reduxjs/toolkit';



import  alluserdata  from '../fetchdata/getallpostes'
import  addToCartSlice  from '../addToCart'
import selectPage from '../selectPage'
import  allLikesIhave  from '../AddLike'



export const store = configureStore({
  reducer: {
    alluserdata:alluserdata,
    addToCartSlice:addToCartSlice,
    selectPage:selectPage,
    allLikesIhave:allLikesIhave
  }, 
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),


})
