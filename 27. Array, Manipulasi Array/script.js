// manipulasi array

// 1. menambah isi array
// var arr = [];
// arr[0] = 'Ramdani';
// arr[1] = 'Arvianto';
// arr[2] = 'Ravon';

// console.log(arr);

// 2. menghapus isi array
// var arr = ['ramdani', 'arvianto', 'ravon'];
// arr[1] = undefined;
// console.log(arr);

// 3 menampilkan isi array
// var arr = ['Ramdani', 'Arvianto', 'Ravon', 'Raviola', 'Rakilla'];

// for (var i = 0; i < arr.length; i++) {
//     console.log('Mahasiswa ke-' + (i+1) + ' : ' + arr[i]);
// }

// 4 method pada array
// 1. join
// var arr = ['Ramdani', 'Arvianto', 'Ravon'];
// console.log(arr.join(' - '));

// 2. push(menambah) & pop(menghapus)
// arr.push('Raven', 'Rakilla');

// arr.pop();
// arr.pop();
// console.log(arr.join(' - '));

// 3 unshift & shift
// arr.unshift('Raven');

// arr.shift();
// console.log(arr.join(' - '));

// 4 splice dan
// splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2, ...)
// var arr = ['Ramdani', 'Arvianto', 'Ravon', 'Raisa', 'Rihanna'];
// arr.splice(2, 2, 'Rakilla');
// console.log(arr.join(' - '));

// 5 slice
// slice(awal,akhir)
// var arr = ['Ramdani', 'Arvianto', 'Ravon', 'Raven', 'Raihan'];
// var arr2 = arr.slice(1,4);
// console.log(arr.join(' - '));
// console.log(arr2.join(' - '));

// 6 forEach
// var angka = [1,2,3,4,5,6,7,8];
// var nama = ['Ramdani', 'Arvianto', 'Ravon'];
// for(var i = 0; i < angka.length; i++) {
//     console.log(angka[i]);
// }

// nama.forEach(function(e, i) {
//     console.log('Mahasiswa ke-' + (i+1) + ' adalah : ' + e);
// })

// 7 map
// var angka = [1,2,5,3,6,8,4];
// angka.map(function(e) {
//     console.log(e);
// })
// var angka2 = angka.map(function(e) {
//     return e*2;
// })

// console.log(angka2.join(' - '));

// 8 sort
// var angka = [1,2,10,5,3,7,20,6,8,4];
// console.log(angka.join(' - '));
// angka.sort(function(a,b) {
//     return a-b;
// });
// console.log(angka.join(' - '));

// 9 filter
// var angka = [1,2,10,5,3,7,20,6,8,4];
// var angka2 = angka.filter(function(x) {
//     return x > 5;
// })
// console.log(angka2.join(' - '));

// 10 find
// var angka = [1,2,10,5,3,7,20,6,8,4];
// var angka2 = angka.find(function(x) {
//     return x > 5;
// })
// console.log(angka2);