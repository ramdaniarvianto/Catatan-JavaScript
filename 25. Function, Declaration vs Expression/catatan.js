// Function Declaration VS Function Expression

// function declaration
// function identifier (Parameterlist \optional/) {FunctionBody}

function tampilpesan() {
    alert('halo ' + nama);
}

// function declaration
// - lebih fleksibel (dapat ditulis dimanapun)
//   - karena konsep Hoisting //=====\\
function tampilNama(nama) {       //===
    alert('Halo ' + nama);        //=== 
}                                 //===
                                  //===
tampilNama('Ramdani');            //===
                                  //===
// atau, bisa juga:               //===
                                  //===
tampilNama('Ramdani');            //===
                                  //===
function tampilNama(nama) {       //===
    alert('Halo ' + nama);        //===
}                             //=====//

// - mudah dipahami pemula      




// function expression
// function identifier \optional/ (Parameterlist \optional/) {FunctionBody}

var tampilpesan = function(nama) {
    alert('halo ' + nama);  
}

// function expression
// - harus didefinisikan terlebih dahulu sebelum dipanggil
// - lebih powerfull:
//   - sebagai closure
//   - sebagai argumen untuk function lain
//   - IIFE (Immediately Invoked Function Expression)

var tampilNama = function (nama) {
    alert('Halo ' + nama);
}

tampilNama('Ramdani');

// kalau dibalik tidak akan berjalan codenya

tampilNama('Ramdani');

var tampilNama = function (nama) {
    alert('Halo ' + nama);
}

/**
Berbagi info aja gan ::
1. semua function itu baik anonymous/expression dan declaration pasti support IIFE meskipun paling cocok di function expression (sesuai nama.a).
2. kenapa ada hosting d JavaScript, karena sebenar.a d JavaScript itu ada 2 proses : 1. Proses kreasi, jd setiap deklarasi, bail itu function dan variable pasti akan di "ambil" duluan, lalu selanjutnya yg ke 2. Proses eksekusi, jd segala jenis pemanggilan function, bahkan sampai proses assign expressi ke variable akan masuk ke proses eksekusi. Jadi itu lh mengapa funtion expresi tidak mendukung hosting.
*/