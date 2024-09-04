function jmlVolumeKubus (a, b) {
    var volumeA;
    var volumeB;
    var total;

    volumeA = a * a * a;
    volumeB = b * b * b;
    total = volumeA + volumeB;

    return total;
}

alert(jmlVolumeKubus(8, 4));
alert(jmlVolumeKubus(10, 15));