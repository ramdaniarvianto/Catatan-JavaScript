/*
function jumlahVolumeDuatKubus (a,b) {
    var volumeA;
    var volumeB;
    var total;

    volumeA = a * a * a;
    volumeB = b * b * b;
    total = volumeA + volumeB;

    return total;
}

alert(jumlahVolumeDuatKubus(8,3));
*/

// ==================== REFACTORING =============================

function jumlahVolumeDuatKubus (a,b) {
    return a * a * a + b * b * b;
}

alert(jumlahVolumeDuatKubus(8,3));