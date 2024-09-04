var jmlTongkol = 10;
var tongkolHidup = 6;

for (var noTongkol = 1; noTongkol <= jmlTongkol; noTongkol++) {

    if (noTongkol <= tongkolHidup && noTongkol !== 5) {
        console.log('Tongkol No. ' + noTongkol + ' masih hidup.');
    } else if (noTongkol === 8 || noTongkol === 10 || noTongkol === 5) {
        console.log('Tongkol No. ' + noTongkol + ' terjual');
    } else {
        console.log('Tongkol No. ' + noTongkol + ' sudah mati.');
    }

}