// var angka = prompt('Masukan Angka');

// if (angka == 1) {
//     alert(angka + ' adalah bilangan Ganjil.');
// } else if (angka == 2) {
//     alert(angka + ' adalah bilangan Genap')
// } else {
//     alert("'" + angka + "'" + ' adalah bukan Angka!');
// }



// var angka = prompt('Masukkan Angka');

// switch (angka) {
//     case '1':
//         alert('Anda memasukkan angka 1');
//         break;
//     case '2':
//         alert('Anda memasukkan angka 2');
//         break;
//     case '3':
//         alert('Anda memasukkan angka 3');
//         break;
//     default:
//         alert('Angka yang anda masukkan Salah');
//         break;
// }



var item = prompt('Masukkan nama Makanan / Minuman : /n (Contoh: Nasi, Daging, Susu, Hamburger, Soft Drink.)');

switch (item) {
    case 'Nasi':
        alert('Nasi adalah makanan Sehat');
        break;
    case 'Daging':
        alert('Daging adalah makanan Sehat');
        break;
    case 'Susu':
        alert('Susu adalah minuman Sehat');
        break;
    case 'Hamburger':
        alert('Hamburger adalah makanan Tidak Sehat');
        break;
    case 'Soft Drink':
        alert('Soft Drink adalah minuman Tidak Sehat');
        break;
    default:
        alert(item + ' tidak ada di contoh!');
        break;
}