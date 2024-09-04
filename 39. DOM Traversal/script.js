// const kartu = document.querySelector('.close');
// kartu.addEventListener('click', function() {
//     const hilang = document.querySelector('.card');
//     hilang.style.display = 'none';
// });


const close = document.querySelectorAll('.close');

// for (let i = 0; i < close.length; i++) {
//     close[i].addEventListener('click', function(e) {
//         // close[i].parentElement.style.display = 'none';
//         e.target.parentElement.style.display = 'none';
//     });
// }

close.forEach(function(el) {
    el.addEventListener('click', function(e) {
        e.target.parentElement.style.display = 'none';
    })
});





const nama = document.querySelector('.nama');
console.log(nama); // output: span.nama
console.log(nama.parentElement); // output: div.card
console.log(nama.parentNode); // output: div.card
console.log(nama.parentElement.parentElement); // output: div.container
console.log(nama.nextElementSibling); // output: span.telp
console.log(nama.previousElementSibling); // output: img
console.log(nama.nextElementSibling.nextElementSibling); // output: span.close
