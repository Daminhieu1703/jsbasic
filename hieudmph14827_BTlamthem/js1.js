
var a = prompt("mời bạn nhập số a:")
a = Number(a);
var b = prompt("mời bạn nhập số b:")
b = Number(b);
var c = prompt("mời bạn chọn\n1.cộng\n2.trừ\n3.chia\n4.chia")
c = Number(c);
if (c == 1) {
    c = a+b;
    alert("kết quả là " + c)
} else if (c ==2) {
    c = a-b;
    alert("kết quả là " + c)
}else if (c ==3) {
    c = a/b;
    alert("kết quả là " + c)
}else if (c ==4) {
    c = a*b;
    alert("kết quả là " + c)
}

