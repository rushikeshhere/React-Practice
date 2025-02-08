import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counterVal: 0, lastAction: null },
  reducers: {
    increment: (state) => {
      state.counterVal++,
      state.lastAction = "INCREMENT";
    },
    decrement: (state) => {
      state.counterVal--,
      state.lastAction = "DECREMENT";
    },
    reset :(state)=>{
      state.counterVal=0,
    state.lastAction="RESET";
  }
  }
  });
   

const counterStore = configureStore({
  reducer:{counter:counterSlice.reducer}
});

export const counterActions = counterSlice.actions;

export default counterStore;

// const counterReducer=(store=INTIAL_VALUE,action)=>{
//   switch (action.type) {
//    case "INCREMENT":
//      return{
//        ...store,
//        counter:store.counter+1,
//        lastAction:"INCREMENT",
//      };

//    case "DECREMENT":
//      return{
//        ...store,
//        counter:store.counter-1,
//        lastAction:"DECREMENT",
//      };
//    case "RESET":
//      return{
//        ...store,
//        counter:0,
//      lastAction:"RESET",

//      };default:
//      return store;
//   }
//  }
