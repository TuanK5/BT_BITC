function year(x){
   if(x%100==0)
   x=x/100
   else
   x=Math.floor(x/100)+1
   console.log(x)
}
year(200);
function chuoi(){
   let ten = ["Xin", "Chào", "Mình", "Tên", "Là"];
   let ten2 = [" BTIC"]
   console.log(ten.join(" ") + ten2); 
}
chuoi();