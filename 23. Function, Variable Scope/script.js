// global scope / window scope
var a = 1;

function tes() {
    a = 2;
}

tes();

console.log(a);

// var: Mengikuti function scope atau global scope. var tidak memperhitungkan block scope, sehingga dapat menyebabkan kesalahan logika pada kode.
// let: Mengikuti block scope. Lebih aman digunakan karena hanya dapat diakses dalam blok tempat ia dideklarasikan.
// const: Seperti let, tetapi tidak bisa diubah setelah dideklarasikan (immutable). Cocok digunakan untuk konstanta atau variabel yang tidak perlu diubah nilainya.