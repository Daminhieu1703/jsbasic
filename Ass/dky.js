function hienthi(visible) {
    if (visible.checked) {
        document.getElementById("khac").style.display = "block";
    } else {
        document.getElementById("khac").style.display = "none"
        document.getElementById("khac").style.value = ""
    }
}
function check() {
    var kiemtra = 0
    var email = document.getElementById("email")
    var msv = document.getElementById("msv")
    var hoten = document.getElementById("hoten")
    var thongbao = document.getElementById("thongbao")
    var thongbao1 = document.getElementById("thongbao1")
    var thongbao3 = document.getElementById("thongbao3")
    var quocgia = document.getElementById("quocgia")
    var thongbao5 = document.getElementById("thongbao5")
    var gioitinh = document.getElementsByName("gt")
    var allgt = document.getElementById("allgt")
    var thongbao4 = document.getElementById("thongbao4")
    var sothich = document.getElementsByName("st")
    var allsothich = document.getElementById("allsothich")
    var thongbao6 = document.getElementById("thongbao6")
    if (msv.value.length == "") {
        msv.style.border = "1px solid red"
        thongbao.innerText ="Chưa có mã sinh viên"
        thongbao.style.color = "red"
        kiemtra ++
    }else{
        msv.style.border = "1px solid black"
        thongbao.innerText =""
    }
    if (hoten.value.length == "") {
        hoten.style.border = "1px solid red"
        thongbao1.innerText ="Chưa có họ tên"
        thongbao1.style.color = "red"
        kiemtra ++
    }else{
        hoten.style.border = "1px solid black"
        thongbao1.innerText =""
    }
    if (email.value.length == "") {
        email.style.border = "1px solid red"
        thongbao3.innerText ="Chưa có email"
        thongbao3.style.color = "red"
        kiemtra ++
    }else{
        email.style.border = "1px solid black"
        thongbao3.innerText =""
    }
    if (quocgia.value == 0) {
        quocgia.style.border = "1px solid red"
        thongbao5.innerText = "Chưa chọn quốc gia"
        thongbao5.style.color = "red"
        kiemtra ++
    }else{
        quocgia.style.border = "1px solid black"
        thongbao5.innerText = ""
    }
    if (!gioitinh[0].checked && !gioitinh[1].checked) {
        thongbao4.innerText ="Chưa chọn giới tính"
        thongbao4.style.color = "red"
        allgt.style.border = "1px solid red"
        kiemtra ++
    }else{
        allgt.style.border = "1px solid black"
        thongbao4.innerText =""
    }
    if (!sothich[0].checked && !sothich[1].checked && !sothich[2].checked && !sothich[3].checked) {
        allsothich.style.border = "1px solid red"
        thongbao6.innerText ="Chưa chọn sở thích"
        thongbao6.style.color = "red"
        kiemtra ++
    }else{
        allsothich.style.border = "1px solid black"
        thongbao6.innerText =""
    }
    if (kiemtra == 0) {
        alert("Đăng Ký Thành Công")
        return true
        
    }else{
        return false
        
    }
}