// function tambah (a,b) {
//     return a + b;
// }

// var hasil = tambah(2,3);
// console.log(hasil);

//  =================================================================

// function tambah (a,b) {
//     return a + b;
// }

// var a = parseInt(prompt("masukan nilai 1"));
// var b = parseInt(prompt("masukan nilai 2"));

// var hasil = tambah(a*2,b+2);
// console.log(hasil);

//  =================================================================

// function tambah (a,b) {
//     return a + b;
// }

// function kali (a,b) {
//     return a * b;
// }

// var hitung = kali(tambah(1,2), tambah(3,4));
// console.log(hitung);

//  =================================================================

// function tambah() {
//     return arguments;
// }

// var coba = tambah(5, 10, 20, "hi", true);
// console.log(coba);

//  =================================================================

function tambah () {
    var hasil = 0;
    for (var i = 0; i < arguments.length; i++) {
        hasil += arguments[i];
    }
    return hasil;
}
var coba = tambah(1,2,3,4,5);
console.log(coba);