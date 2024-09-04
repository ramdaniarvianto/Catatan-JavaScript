// this
// adalah sebuah keyword spesial yang secara otomatis didefinisikan pada setiap function

// console.log(this); // output: Window (Object Global)
// console.log(window); // output: Window (Object Global)

// console.log(window === this); // output: true



// Function Declaration
// function halo() {
//     console.log(this); // output: Window
//     console.log('halo'); // output: halo
// }
// halo();

// this mengembalikan object Global



// Object Literal
// var obj = {nama : 'Ramdani', nim : 21110110007};
// obj.halo = function() {
//     console.log(this); // output: {nama: 'Ramdani', nim: 21110110007, halo}
//     console.log('halo'); // output: halo
// }
// obj.halo();

// this mengembalikan object yang bersangkutan



// Constructor
function Halo() {
    console.log(this); // output: Halo {} | mengembalikkan objek yang baru dibuat
    console.log('halo'); // output: halo
}
new Halo();
var obj1 = new Halo();
var obj2 = new Halo();

// this mengembalikan object yang baru dibuat