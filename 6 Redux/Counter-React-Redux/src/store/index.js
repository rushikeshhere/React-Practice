import  {createStore} from 'redux';

const INTIAL_VALUE={
  counter:0,
  lastAction:null,
};
const counterReducer=(store=INTIAL_VALUE,action)=>{
 switch (action.type) {
  case "INCREMENT":
    return{
      ...store,
      counter:store.counter+1,
      lastAction:"INCREMENT",
    };
    
  case "DECREMENT":
    return{
      ...store,
      counter:store.counter-1,
      lastAction:"DECREMENT",
    };
  case "RESET":
    return{
      ...store,
      counter:0,
    lastAction:"RESET",
      
    };default:
    return store;
 }
}


const counterStore=createStore(counterReducer);

export default counterStore;