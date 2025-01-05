function Hello() {

  let name="John";

  let fullname=()=>{
    return "John Doe";
  }


  // this is the method calling the function
  return  <div> <h3>Hello world, i am your master :{fullname()}</h3>
  { /* this is the method calling the variable*/}
  <h2>to test the name of master :{name}</h2>
  </div>
  }
export default Hello;