function jmlVolumeKubus (a, b) {
    var volumeA;
    var volumeB;
    var total;

    volumeA = a * a * a;
    volumeB = b * b * b;

    total = volumeA + volumeB;

    return total;
}

console.log(jmlVolumeKubus(8, 3));
console.log(jmlVolumeKubus(10, 15));