var a = null 
var b = null
var o = null
function lam_lai() {
    a = null
    b = null
    o = null
}
function toan_tu(x) {
    o = x
}
function toan_hang(x) {
    if (a == null) {
        a = x
    } else {
        b = x
    }
}
function thuc_hien() {
    switch (o) {
        case '+':
            var c = a + b
            alert('cộng: ' + c)
            break;
        case '-':
            var c = a - b
            alert('trừ: ' + c)
            break;
        case 'x':
            var c = a * b
            alert('nhân: ' + c)
            break;
        case ':':
            var c = a / b
            alert('chia: ' + c)
            break;

        default:
            alert(o+ ' không phải là toán tử')
    }
    lam_lai()
}