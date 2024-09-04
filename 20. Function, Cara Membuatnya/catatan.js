// ketika membuat function, biasanya kita akan memiliki sebuah input

// input    -->     function    -->     output
// input: masukkan bahan / material ke dalam function
// function: function itu sendiri akan mengerjakan sesuatu terhadap bahan / material tadi
// output: sehingga nantinya akan menghasilkan nilai baru

// function yang baik adalah function yang hanya mengerjakan 1 hal saja

// function
// function adalah blok kode yang dibuat untuk melakukan tugas spesifik
// dapat dipanggil berulang kali
// memudahkan penelusuran
// reusability

// cara membuat function

function jumlahVolumeDuaKubus (a, b) {
    var total, volumeA, volumeB;

    volumeA = a * a * a;
    volumeB = b * b * b;
    total = volumeA + volumeB;

    return total;
}

// function: keyword function, untuk memberitahu interpretes javascript bahwa kita akan mulai menulis sebuah fungsi
// {}: bungkus function dengan kurung kurawal, untuk menandai awal dan akhir sebuah fungsi
// jumlahVolumeDuaKubus: beri nama function yang menjelaskan apa yang dilakukan
// (): selalu tuliskan kurung setelah nama function untuk menyimpan parameter / argumen / bahan baku untuk nantinya digunakan di dalam function
// (a, b): - parameter / argumen
//         - data yang dikirim dari luar saat pemanggilan function, untuk digunakan di dalam function
//         - anggap sebagai variabel khusus untuk function
//         - optional, boleh ada dan boleh tidak ada
//         - jika tidak ada kosongkan, tapi kurung harus tetap ditulis
//         - jika ada, boleh sebanyak mungkin sesuai kebutuhan
// 
// return: - sebuah function biasanya mengembalikan sebuah nilai
//         - menggunakan keyword return, lalu diikuti dengan nilai kembaliannya
//         - kegunaannya adalah untuk memberitahu interpreter bahwa kita telah selesai mmengerjakan sesuai dan iniliah hasilnya
//         - setelah sampai pada keyword return, function akan berhenti berjalan