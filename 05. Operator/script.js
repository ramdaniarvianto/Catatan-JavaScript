// Operator dalam JavaScript adalah sebuah simbol yang digunakan untuk melakukan operasi.

// Jenis-jenis operator
/*

    - Aritmatika        ~~
    - Penugasan           ~~~
    - Perbandingan        ~~~  binary
    - Logika              ~~~
    - String            ~~
    - Kondisional       ~~ ternary
    - Typeof            ~~ unary

*/

// Operator binary adalah sebuah operator yang membutuhkan 2 operand.
// operand1     operator     operand2
//    1             +            1


// Operator unary hanya membutuhkan 1 operand.
// operator     operand, atau
// operand     operator


// Operator ternary adalah operator yang membutuhkan 3 operand.


// Operator Aritmatika
// +, -, *, /, %


// Operator Precedence
// adalah urutan operasi matematika
// Ku           Ka          Ba          Ta              Ku
// Kurung ()    Kali *      Bagi /      Tambah +        Kurang -


// Operator Penugasan/Assignment
// =
// +=   x += y   =|=   x = x + y
// -=   x -= y   =|=   x = x - y
// *=   x *= y   =|=   x = x * y
// /=   x /= y   =|=   x = x / y
// %=   x %= y   =|=   x = x % y


// Operator Perbandingan/Comparison
// ==   |   sama dengan
// !=   |   tidak sama dengan
// ===  |   strict sama dengan
// !==  |   strict tidak sama dengan
// >    |   lebih besar dari
// <    |   lebih kecil dari
// >=   |   lebih besar sama dengan
// <=   |   lebih kecil sama dengan

// Operator perbandingan akan menghasilkan nilai boolena. true | false


// Operator Logika/Logical
// &&   | AND
// ||   | OR
// !    | NOT

// *keduanya harus true
// x = 8
// (x % 2 == 0) && (x < 10);
// true

// x = 12
// (x % 2 == 0) || (x < 10);
// true

// *membalikkan hasil boolean, dari true menjadi false dan sebaliknya.
// x = 10
// (x < 20)
// true
// !(x < 20)
// false


// Operator String +
// Dalam JavaScript, tanda + memiliki 2 fungsi, yaitu jika operandnya adalah angka maka dia akan menjadi Operator Aritmatika. Sedangkan jika operandnya adalah string atau tulisan maka dia akan menjadi operator penggabung string.

// var a = apple
// var p = pen
// a + b
// "applepen"
// a + " " + b
// apple pen

// 10 + "10"
// "1010"
// 10 + 10 + "10"    /* jika angka dengan angka, hasilnya angka */
// "2010"
// "10" + 10 + 10    /* jika salah satunya string, maka tanda + berubah menjadi operator string */
// "101010"


// Operator Typeof
// typeof(operand)

// typeof(10)
// "number"

// typeof("10")
// "string"

// typeof(true)
// "boolean"


// Operator Kondisional
// Digunakan untuk melakukan pengecekan pada sebuah kondisi dan menentukan nilai yang dihasilkan ketika kondisinya bernilai true atau false.

// (kondisi) ? benar : salah

// (x % 2 == 0) ? "genap" : "ganjil"