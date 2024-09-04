document.getElementById('before-link').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('text-container').textContent = 'ini adalah teks huruf kecil.';
});

document.getElementById('after-link').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('text-container').textContent = 'INI ADALAH TEKS HURUF BESAR.';
});
