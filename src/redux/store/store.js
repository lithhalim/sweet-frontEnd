import { configureStore } from '@reduxjs/toolkit';
import  allLikesIhave  from '../AddLikes';
import  addToCartSlice  from '../addToCart'



export const store = configureStore({
  reducer: {
    addToCartSlice:addToCartSlice,
    allLikesIhave:allLikesIhave
  },
   
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
