 var sodien = prompt("mời bạn nhập tiền điện");
 tiendien = Number(tiendien);
 var tiendien;
 var a = Number(a);
 a = 1.678;
 var b = Number(b);
 b = 1.734;
 var c = Number(c);
 c = 2.014;
 var d = Number(d);
 d = 2.536;
 var e = Number(e);
 e = 2,836;
 var f = Number(f);
 f = 2.927;
 if (sodien>= 0 && 50>=sodien) {
     tiendien = sodien * a;
     alert("số tiền bạn phải trả là " + tiendien)
 } else if(sodien>= 51 && 100>=sodien) {
     tiendien = 50 * a + ((sodien -50)*b);
     alert("số tiền bạn phải trả là " + tiendien)
 } else if (sodien>= 101 && 200>=sodien) {
     tiendien = 50 * a + (50*b) + ((sodien-100)*c)
     alert("số tiền bạn phải trả là " + tiendien)
 } else if (sodien>= 201 && 300>=sodien) {
     tiendien = 50 * a + (50*b) + (100*c) + ((sodien-200)*d)
     alert("số tiền bạn phải trả là " + tiendien)
 }else if (sodien>= 301 && 400>=sodien) {
     tiendien = 50 * a + (50*b) + (100*c) + (100*d) + ((sodien-300)*e)
     alert("số tiền bạn phải trả là " + tiendien)
 }else if (sodien > 401) {
     tiendien = 50 * a + (50*b) + (100*c) + (100*d) + (100*e) + ((sodien-400)*f)
     alert("số tiền bạn phải trả là " + tiendien)
 }