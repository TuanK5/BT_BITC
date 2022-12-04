function year(x) {
  if (x % 100 == 0) x = x / 100;
  else x = Math.floor(x / 100) + 1;
  console.log(x);
}
year(200);
//bt2
function string() {
  let ten = ["Xin", "Chào", "Mình", "Tên", "Là"];
  let ten2 = [" BTIC"];
  console.log(ten.join(" ") + ten2);
}
string();
//bt3
console.log("bai 3");
let n = ["0", 1, null, "string"];
for (let i = 0; i < n.length; i++) {
  if (isNaN(n[i]) === false || typeof n[i] == "string") {
    console.log(n);
  }
}
isNaN(typeof undefined == "string")
// bt4
function convertUrl(title) {
  let url = title.toLowerCase().replace(/\s/g, "-");

  // nonAccentVietnamese
  function nonAccentVietnamese(str) {
    str = str.replace(/A|Á|À|Ã|Ạ|Â|Ấ|Ầ|Ẫ|Ậ|Ă|Ắ|Ằ|Ẵ|Ặ/g, "A");
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/E|É|È|Ẽ|Ẹ|Ê|Ế|Ề|Ễ|Ệ/, "E");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/I|Í|Ì|Ĩ|Ị/g, "I");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/O|Ó|Ò|Õ|Ọ|Ô|Ố|Ồ|Ỗ|Ộ|Ơ|Ớ|Ờ|Ỡ|Ợ/g, "O");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/U|Ú|Ù|Ũ|Ụ|Ư|Ứ|Ừ|Ữ|Ự/g, "U");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/Y|Ý|Ỳ|Ỹ|Ỵ/g, "Y");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/Đ/g, "D");
    str = str.replace(/đ/g, "d");
    // Some system encode vietnamese combining accent as individual utf-8 characters
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // Huyền sắc hỏi ngã nặng
    str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // Â, Ê, Ă, Ơ, Ư
    return str;
  }

  url = nonAccentVietnamese(url);
  return url;
}
console.log(convertUrl("Slogan Của BITC là gì ?"));
console.log("------------------------------------------------------------------------");
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
console.log("------------------------------------------------------------------------");