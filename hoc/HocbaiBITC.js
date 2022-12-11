let array = ["viet", "an", " DUyen"];
function test(e, i) {
  console.log(e);
  console.log(i);
}
array.forEach(test);
array.every(test);

let genders = ["male", "male", "male"];
function test(gender) {
  return gender == "male";
}
let isMan = genders.every(test);
console.log(isMan);

let tong = [1, 2, 3]; //TÍnh tổng các phần tử trong mảng

// let sum = 0;
// for (let i = 0; i < tong.length; i++){
//     sum = sum + tong[i];
// }
// console.log(sum);
function test(luutru, giatri) {
  return luutru + giatri;
}
let sum = tong.reduce(test, 0);
console.log(sum);
let obj1 = {name: 'viet', age: 20}
boj1.address = 'DN'
// lấy 1 cái tên thôi
console.log (obj1.name); 
console.log['name']

delete obj1.age
console.log (typeof obj1);

let bbj1 = {name: 'viet', age: 20, arr:[0,1,2],
fc:function(){console.log(123)}}
