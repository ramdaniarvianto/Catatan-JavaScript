var nama = prompt('Masukkan Nama:');
var lagi = true;

while (lagi) {

    var nyawa = 4;
    var computer = Math.floor(Math.random() * 10) + 1;

    while (nyawa > 0) {

        var player = prompt('GAME TEBAK ANGKA\n(Masukkan Angka 1-10 Untuk Menebak)\nNyawa: ' + nyawa);

        if (player == computer) {
            alert('Kamu menebak angka ' + computer + ' kamu Menang!');
            break;
        } else if (player > computer) {
            alert('Angka terlalu tinggi, coba lagi.');
        } else if (player < computer) {
            alert('Angka terlalu rendah, coba lagi.');
        } else {
            alert('Input tidak valid! Masukkan angka 1-10 untuk menebak.');
        }

        nyawa--;

        if (nyawa === 0) {
            alert('Nyawa habis! Angka yang dicari adalah ' + computer);
        }

    }

    lagi = confirm('Ingin main lagi?');

}

alert('Terima kasih ' + nama + ' sudah bermain');