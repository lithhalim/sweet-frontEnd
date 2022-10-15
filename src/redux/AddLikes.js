import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  value: 0,
  alllikes:[]
}

if(window.localStorage.LikesProduct){
  initialState.value=JSON.parse(window.localStorage.LikesProduct).value;
  initialState.alllikes=JSON.parse(window.localStorage.LikesProduct).alllikes;
}


export const allLikesIhave = createSlice({
  name: 'alllikesihave',
  initialState,
  reducers: {
    addLikes: (state, action) => {
        state.value=state.value+=1;
        state.alllikes=[...state.alllikes,action.payload];
        window.localStorage.LikesProduct=JSON.stringify(state)

    },
    RemoveAllLikes: (state, action) => {
        state.value=state.value-=1;
        state.alllikes=state.alllikes.filter((a,i)=>(a.id!=action.payload.id))
        window.localStorage.LikesProduct=JSON.stringify(state)

    },
    clearAll: (state) => {
          state.value=0
          state.alllikes=[]
          window.localStorage.LikesProduct=JSON.stringify(state)
    }  
  }
})

// Action creators are generated for each case reducer function
export const {  addLikes,RemoveAllLikes,clearAll } = allLikesIhave.actions

export default allLikesIhave.reducer
