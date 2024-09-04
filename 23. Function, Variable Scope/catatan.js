// Variabel Scope / Lingkup Variabel
// bagaimana sebuah variabel dapat diakses dalam program

// dalam bahasa pemrograman, ada 2 jenis scope yaitu: block scope & function scope

// block scope
// digunakan oleh bahasa pemrograman C dan Java
// program dalam bahasa C
/*
int i = 2;

if (i % 2 == 0) {       ====\
    bool genap = true;     === Block Scope
}                       ====/

if (genap) {
    printf("genap!");
}

output 
error: 'genap' is undeclared
*/


// program dalam JavaScript
/*
var i = 2;

if (i % 2 == 0) {
    var genap = true;
}

if (genap) {
    console.log('genap!');
}

output: 
genap!

output tampil, karena javascript tidak menganut block scope. javascript menggunakan function scope
*/