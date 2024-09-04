// Array
// Secara umum: Susunan sistematis dari objek-objek yang serupa.
// Dalam pemrograman: Tipe data yang digunakan untuk mendeskripsikan kumpulan elemen (nilai atau variabel), yang tiap-tiap elemennya memiliki index.
// Menurut Pak Sandhika: Array adalah variabel yang sakti. karena bisa menampung lebih dari satu nilai

// Kenapa Array?
// - Mempermudah pengelolaan nilai/value/data
//   - Penelusuran dan pencarian
// - Manajemen memori: tidak perlu membuat banyak variabel

// Karakteristik Array
// - variabel jamak, yang mempunyai banyak elemen dan diacu dengan nama yang sama
// - kumpulan pasangan key dan nilai / key dan value pair
// - key adalah index pada arrray dengan tipe integer dimulai dari 0
// - array pada javascript bertipe object
// - array pada javascript memiliki fungsi / method length untuk menghitung jumlah elemen didalamnya
// - elemen pada array boleh memiliki tipe data yang berbeda

// key and value pair - membuat array

// bisa

var binatang = ['kucing', 'kelinci', 'monyet', 'panda', 'koala', 'sapi'];

// atau

var binatang = [];
binatang = ['kucing', 'kelinci', 'monyet', 'panda', 'koala', 'sapi'];


// Elemen pada array boleh beda tipe
var hari = ['senin', 'selasa', 'rabu'];
var mhs = ['ramdani', 'arvianto', 'ravon'];
var angka = [10, 100, 1000];
var myArr = ['teks', 2, false];

var myFunc = function() {
    alert('Hello World!');
}
var myArr2 = ['teks', 2, false, myFunc];
var myArr3 = ['teks', 2, false, myFunc, [4, 5, 6]];

console.log(myArr3[4][2]);
