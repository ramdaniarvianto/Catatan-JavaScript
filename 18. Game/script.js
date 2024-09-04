var lagi = true;

var nama = prompt('Masukan Username');

while (lagi == true) {

    // menangkap pilihan player
    var player = prompt('GAME SUWIT \n(Pilih: Gajah | Semut | Orang)')


    // menangkap pilihan computer
    // membangkitkan bilangan random
    var computer = Math.random();

    if (computer < 0.34) {
        computer = 'Gajah';
    } else if (computer >= 0.34 && computer < 0.67) {
        computer = 'Orang';
    } else {
        computer = 'Semut';
    }

    console.log(computer);


    // menentukan rules
    if (player == computer) {
        hasil = 'Seri!';
    } else if (player == 'Gajah') {
        // if (computer == 'Orang') {
        //     hasil = 'Menang!';
        // } else {
        //     hasil = 'Kalah!';
        // }
        hasil = (computer == 'Orang') ? 'Menang!' : 'Kalah!';
    } else if (player == 'Orang') {
        hasil = (computer == 'Gajah') ? 'Kalah!' : 'Menang!';
    } else if (player == 'Semut') {
        hasil = (computer == 'Orang') ? 'Kalah!' : 'Menang!';
    } else {
        hasil = 'tidak ada dalam pilihan!';
    }

    // tampilkan hasilnya
    alert(nama + ' memilih : ' + player + ' dan Komputer memilih : ' + computer + '\nMaka hasilnya : Kamu ' + hasil);

    lagi = confirm('Main lagi?');
}

alert('Terima kasih ' + nama + ' sudah bermain!');