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
