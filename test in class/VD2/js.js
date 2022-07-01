document.write("nội dung trong file app js </br>")
// nhập vào 2 số a và b và in ra tổng 2 số
var so_a=prompt("nhập số a")
var so_b=prompt("nhập số b")
document.write("</br> kiểu dữ liệu số a: " + typeof(so_a))
// chuyển kiểu dữ liệu số
so_a = Number(so_a) 
so_b = Number(so_b)
document.write("</br> kiểu dữ liệu số a: " + typeof(so_a))
var tong = so_a+so_b
document.write("</br>" + so_a + ' + ' + so_b + ' = ' + tong)
// chuyển lại về kiểu chuỗi
so_a = String(so_a)
document.write("</br> kiểu dữ liệu số a: " + typeof(so_a))