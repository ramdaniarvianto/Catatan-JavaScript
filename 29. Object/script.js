// var mhs = {
//     nama : "Ramdani Arvianto",
//     umur : 21,
//     ips : [3.00, 3.25, 3.89],
//     alamat : {
//         jalan : "Jl. Jalan No.30",
//         Kota : "Jakarta",
//         Provinsi : "DKI Jakarta",
//     }
// };



// Membuat object
// Object Literal
var mhs1 = {
    nama : 'Ramdani Arvianto',
    nim : '21110110007',
    email : 'ramdaniarvianto1@gmail.com',
    jurusan : 'Teknik Informatika'
}

var mhs2 = {
    nama : 'Ravon',
    nim : '21110110008',
    email : 'ravon1@gmail.com',
    jurusan : 'Sistem Informasi'
}


// Function Declaration
function buatObjectMahasiswa(nama, nim, email, jurusan) {
    var mhs = {};
    mhs.nama = nama;
    mhs.nim = nim;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}

var mhs3 = buatObjectMahasiswa('Raihan', '21110110009', 'raihan1@gmail.com', 'Bisnis Digital');


// Constructor
function Mahasiswa(nama, nim, email, jurusan) {
    this.nama = nama;
    this.nim = nim;
    this.email = email;
    this.jurusan = jurusan;
}

var mhs4 = new Mahasiswa('Rihana', '2111011010', 'rihana1@gmail.com', 'Teknik Mesin');