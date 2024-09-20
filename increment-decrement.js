const increment = document.querySelector(".increment");
const decrement = document.querySelector(".decrement");
let number = document.querySelector(".num");

let a=1;

increment.addEventListener("click", ()=>{
  a++;
//   if(a<10){
//     a = "0"+a;
//   }
  a=(a<10)?"0"+a:a;
  
  number.innerHTML = a;
//   console.log(a);
});

decrement.addEventListener("click", ()=>{
  if(a>1){
    a--;
    a=(a<10)?"0"+a:a;
    number.innerHTML = a;
  }
});