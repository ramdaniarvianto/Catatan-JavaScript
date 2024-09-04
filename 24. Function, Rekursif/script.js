for (var i = 10; i >= 0; i--) {
    console.log(i);
}


function angka (n) {
    // if ( n === 0 ) return;
    if (n === 0) {
        return;
    }
    console.log(n);
    return angka(n-1);
}
angka(10);


function faktorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * faktorial(n-1);
}
console.log(faktorial(5)); // output: 120

/*
faktorial(5)
5 * faktorial(4)
5 * (4 * faktorial(3))
5 * (4 * (3 * faktorial(2)))
5 * (4 * (3 * (2 * faktorial(1))))
5 * (4 * (3 * (2 * 1)))
5 * (4 * (3 * 2))
5 * (4 * 6)
5 * 24
120
*/


// Rekursif
// semua looping bisa dibuat rekursif, tapi tidak sebaliknya


// Implementasi Rekursif
// - menggantikan looping
// - fibonacci
// - pencarian dan penelusuran pada struktur data list dan tree
// - bahasa pemrograman yang tidak memiliki pengulangan
//    - haskell, erlang, prolog, dll