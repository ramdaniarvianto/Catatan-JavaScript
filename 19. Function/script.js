// function
// function adalah kunci utama pada JavaScript, yang membuat JavaScript sangat powerfull.

// Definisi
// Function adalah sebuah sub-program/sub-routine yang dapat dipanggil di bagian lain pada program
// Merupakan struktur dasar pembentuk dari JavaScript
// Disebut juga sebagai prosedur (kumpulan statement untuk melakukan tugas atau menghitung sebuah nilai)
// Untuk dapat menggunakannya, kita harus membuat terlebih dahulu function tersebut lalu memanggilnya
// Termasuk kedalam first-class object

// Kategori function
// Built-in function
// - fungsi yang sudah disediakan / dibuat oleh javascript
// - tinggal panggil saja
// - contoh = alert, confirm, prompt.

// built-in function: string
// charAt(), slice(), split(), toString(), toLowerCase(), toUpperCase(),

// built-in function: math
// sin(), cos(), tan(), random(), round(), floor(), ceil(), log()


// user-defined function
// fungsi yang kita buat sendiri
// menggunakan keyword function
// nama function (opsional)
// Parameter/argument
//  - disimpan dalam ()
//  - boleh ada boleh tidak, jika ada boleh lebih dari satu
//  - jika lebih dari satu, dipisahkan oleh koma (,)
// function body, dibungkus dengan {}
// dapat mengembalikan nilai (return value) atau tidak

// membuat user-defined function
// dengan deklarasi / function declaration
/**
 * function jumlahDuaBilangan(a, b) {
 *      var total;
 *      total = a + b;
 * 
 *      return total;
 * }
 */

// dengann ekspresi / function expression
/**
 * var jumlahDuaBilangan = function(a, b) {
 *      var total;
 *      total = a + b;
 * 
 *      return total;
 * }
 */


// Latihan

// function jumlah(a, b) {
//     var total;
//     total = a + b;

//     return total;
// }

// console.log(jumlah(2, 2));
// console.log(jumlah(4, 4));
// console.log(jumlah(8, 8));
// console.log(jumlah(10, 10));