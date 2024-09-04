// Function | Parameter dan Argument

// Parameter adalah variabel yang ditulis di dalam kurung pada saat function dibuat, digunakan untuk menampung nilai yang dikirimkan saat function dipanggil

// Argument adalah nilai yang dikirimkan ke parameter saat fungsi dipanggil

function tambah (a,b) { // (a,b): a dan b adalah parammeter
    return a + b;
}

var coba = tambah(5,10); // (5,10): 5 dan 10 adalah argument

// Bagaimana jika parameter dan argumentnya tidak sesuai?
// - jika parameter lebih sedikit dari argument, maka argument kelebihannya akan diabaikan

function kali (a,b) { // parameter ada 2
    return a + b;
}

var hitung = kali(5,10,20); // argument ada 3
// output = 15 | hanya 5 dan 10 yang dihitung, angka 20 diabaikan

// jika parameter lebih banyak dari argument, maka parameter kelebihannya akan diisi dengan nilai undefined

function kali (a,b,c) { // parameter ada 3
    return a + b;
}

var hitung = kali(5,10); // argument hanya ada 2
// nilai dari parameter c undefined



// arguments
// array yang berisi nilai yang dikirimkan saat fungsi dipanggil