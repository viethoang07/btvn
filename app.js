//object : ddoi tuong
//key-value
//properties
//method
// function sayHello(){
// console.log(`helo`);
// } // khai bao 
// function dttamgiac(a , b){
//     return (a+b)/2  // tra ve dau dung o  day
// }
// const dt = dttamgiac(4 , 5);
// console.log(dt);
// b1 tinh n! 

//  const n = prompt(`nhap n`);

// function product(n){
//   let resuil = 1 ;
//     for (let i=1; i<=n;i++){
//         resuil =   resuil * i;
    
//     }
//     return resuil ;
// }
// const p = product(n);
// console.log(p);


//b2 : nhap abc tra ve max 

// b 3
// function sum(arr){
//     let resuil =0;
//     for (let number of arr){
//         resuil=resuil+ number;  
//     }
//   return resuil;
// }

// // b4 
// function revese(str){
//     return str.split(``).revese().join(``);
// }
// // b5
// function ispalingroom(str) {
//     return str.toLowCase() === revese(str.toLowCase());
// }
const persion = {
    name : `peter`,
    age : 18,
    color: `while`,
    school : `fpt`,
    sayHello : function (){
        console.log(`hellllllllp`);
    }
}
////// object(CRUD)
// read
console.log(persion.name);
console.log(persion[`name`]);
// create
persion.hair =`yellow`;
persion.eye =`blue`;
persion.sayGoodbye = function(name) {
    console.log(`vvvvvv ${name}`)
}
//update
persion.name = `hoang`;
//delete
delete persion.name ;
console.log(persion);

//loop
for(let key in persion){
    console.log(key,persion[key]);
}




