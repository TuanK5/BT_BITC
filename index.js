//BT1
console.log('bt1: ');
let arr1 = ['a','b','c']
let arr2 = [1,2,3]
console.log(arr1=arr1.concat(arr2));
//BT2
console.log('bt2: ');
let data = [2,4,6]
function evenNum(v){
   return v % 2 ==0
}
let test = data.every(evenNum)
if(test){
   console.log('yes');
}else{
   console.log('no');
}
//BT3
console.log('bt3: ');
let data2 = [1,3,5,6]
function evenNum2(data){
   return data % 2 ==0 
}
let test2 = data2.some(evenNum2)
if(test2){
   console.log('yes');
}else{
   console.log('no');
}
//BT4
console.log('bt4: ');
let data3 =[1,-2,3,4,-5]
function PosiNum(f){
   return f>0
}
let test3 = data3.filter(PosiNum)
console.log(test3);
//BT5
console.log('bt5: ');
let data4 = [-1,-2,-3,-4,-5];
// let posiNum2 = (data4) => data4 > 0;
function posiNum2(g){
   return g>0
}
if (posiNum2()){
   console.log('index: '+data4.findIndex(posiNum2),'number: '+data4.find(posiNum2));
}else{
   console.log('no result');
}
