function jmlVolumeKubus (a, b) {
    var volumeA;
    var volumeB;
    var total;

    volumeA = a * a * a;
    volumeB = b * b * b;
    total = volumeA + volumeB;

    return total;
}

console.log(jmlVolumeKubus(8, 4));
console.log(jmlVolumeKubus(16, 8));
console.log(jmlVolumeKubus(24, 12));
console.log(jmlVolumeKubus(32, 16));
console.log(jmlVolumeKubus(40, 20));