import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';


let AuthnticationInformation
if(window.localStorage.AllUserDataSave){
  AuthnticationInformation=JSON.parse(window.localStorage.AllUserDataSave)
}

const initialState = {
  value: 0,
  allProduct:[]
}

if(window.localStorage.AddToCart){
  initialState.value=JSON.parse(window.localStorage.AddToCart).value;
  initialState.allProduct=JSON.parse(window.localStorage.AddToCart).allProduct;
}



export const addToCartSlice = createSlice({
  name: 'addToCart',
  initialState,
  reducers: {
    addtocart: (state, action) => {
        state.value=state.value+=1;
        state.allProduct=[...state.allProduct,action.payload];
        window.localStorage.AddToCart=JSON.stringify(state);

        //name person Add To Cart
        state.fullName=AuthnticationInformation.fullName
        //Add Elemet To Basket
        axios.post(`${process.env.REACT_APP_API}add-bascket`,{state:state,type:"Add_Basket"}).then((data)=>{
        })
    },
    removeFromCart: (state, action) => {
        state.value=state.value-=1;
        state.allProduct=state.allProduct.filter((a,i)=>(a.id!=action.payload))
        window.localStorage.AddToCart=JSON.stringify(state);

        //name person Add To Cart
        state.fullName=AuthnticationInformation.fullName
        //Add Elemet To Basket
        axios.post(`${process.env.REACT_APP_API}add-bascket`,{state:action.payload,type:"Remove_Basket"})
      },
    clearAll: (state) => {
          state.value=0
          state.allProduct=[]
          window.localStorage.AddToCart=JSON.stringify(state)
      },
    modifyquantity:(state,action)=>{
      //Find index of specific object using findIndex method.    
      const objIndex = state.allProduct.findIndex((obj => obj.id == action.payload.id));
      let newnumber=Number(state.allProduct[objIndex].quantity)
      newnumber+=1
      state.allProduct[objIndex].quantity =newnumber;
      window.localStorage.AddToCart=JSON.stringify(state)
      },
    modifyquantitydecrese:(state,action)=>{
        //Find index of specific object using findIndex method.    
        const objIndex = state.allProduct.findIndex((obj => obj.id == action.payload.id));
        let newnumber=Number(state.allProduct[objIndex].quantity)
        if(newnumber>1){
          newnumber-=1
          state.allProduct[objIndex].quantity =newnumber
          window.localStorage.AddToCart=JSON.stringify(state)  
        }
      }
  

  
  },
})

// Action creators are generated for each case reducer function
export const {  addtocart,removeFromCart,modifyquantity,modifyquantitydecrese } = addToCartSlice.actions

export default addToCartSlice.reducer

