// Object
// secara umum: kumpulan nilai yang memiliki nama.
// menurut pak sandhika: object adalah array yang lebih sakti.

// "In JavaScript, Object are King. If you understand object, you understand JavaScript."

// Membuat object pada JavaScript
// - Object Literal (simple)
// - Function Declaration
// - Constructor Function (keyword new)
// - object.create()

// Array

// var namaMhs = 'Ramdani Arvianto';
// var umurMhs = 21;
// var lulus = true;
// var IPSemester = [2.90, 3.10, 3.25, 2.88, 3.04];

// var mahasiswa = ['Ramdani Arvianto', 21, true, [2.90, 3.10, 3.25, 2.88, 3.04]];

// function IPKumulatif(IPSemester) {
//     var total = 0;
//     for (var i = 0; i < IPSemester.length; i++) {
//         total += IPSemester[i];
//     }
//     return total/IPSemester.length;
// };

// IPKumulatif(mahasiswa[3]);



// Object

// var mahasiswa = {
//     nama : 'Ramdani Arvianto',                      // ======
//     lulus : true,                                   //    ==== PROPERTI
//     IPSemester : [2.90, 3.10, 3.25, 2.88, 3.04],    // ======
//     IPKumulatif : function() {                      // ======
//         var total = 0;                              //   ====
//         var ips = this.IPSemester;                  //    ====
//         for(var i = 0; i < ips.length; i++) {       //     ==== METHOD
//             total += ips[i];                        //     ====
//         }                                           //     ====
//         return total/ips.length;                    //    ====
//     }                                               // ======
// };

// mahasiswa.IPKumulatif();