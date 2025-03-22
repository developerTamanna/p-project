const counterElement = document.getElementById("counter");
const plusBtn = document.getElementById("plusBtn");
const minusBtn = document.getElementById("minusBtn");


let counter = 0;

plusBtn.addEventListener("click", ()=>{
//   console.log("click")
  counter = counter+1;
  counterElement.innerText =counter
})
minusBtn.addEventListener("click", ()=>{
//   console.log("click")
counter = counter-1
counterElement.innerText = counter
})