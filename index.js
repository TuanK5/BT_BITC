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
//BT6
console.log('bt6: ');
let data5 =[1,5,30,26]
function test5(e){
   if(e % 5==0)
   console.log(e);  
}
data5.forEach(test5);
//BT7
console.log('bt7: ');
let data6 =[-1,2,3,4,2,6]
console.log('first index: '+data6.indexOf(2),'last index: '+data6.lastIndexOf(2));
//BT8
console.log('bt8: ');
let data7=['A','B','C']
console.log(data7.join(", "));
//BT9
console.log('bt9: ');
let data8 =[2, -2, 5]
function tst(element){
   if(element<0){
      return element = element*-1
   }else{
      return element
   }
}
let maping = data8.map(tst)
console.log(maping);