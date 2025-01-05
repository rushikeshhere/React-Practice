function Random() {
let number=Math.random()*100;

return <h4 style={{color:"red",backgroundColor:"yellow"}}> this is the Random number :{Math.floor(number)}</h4>;

}
export default Random;