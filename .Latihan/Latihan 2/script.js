const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    const h1 = document.querySelector('h1');
    h1.classList.toggle('teks');
    document.body.classList.toggle('royalblue');
    btn.classList.toggle('tombol');
});