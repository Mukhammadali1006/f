let son=+prompt("sonni kiriting")
while (isNaN(son)) {
    son = +prompt(" iltimos son kiriting");
  }  
  while (son == 0) {
    number = +prompt("iltimos son kiriting");
  }
if(son%2==0){
    alert("son juft")
}
else{
    alert("son toq")
}
let son1=+prompt("sonni kiriting")
while (isNaN(son1)) {
    son1 = +prompt(" iltimos son kiriting");
  }
  
  while (son1== 0) {
    son1 = +prompt(" iltimos son kiritin");
  }
let daraja=+prompt("darajani kiriting")
while (isNaN(daraja)) {
    daraja = +prompt(" iltimos son kiriting");
  }
  
  while (daraja == 0) {
    daraja = +prompt(" iltimos son kiriting");
  }
let box=1

for ( let i= 0; i < daraja; i=i+1 ) {
 box*=son1
}
console.log(box);