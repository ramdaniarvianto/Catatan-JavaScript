// const judul = document.getElementById('judul');
// judul.innerHTML = '<em>Ramdani Arvianto</em>';

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = 'Halo Dunia';




// const judul = document.querySelector('#judul');
// judul.style.color = 'orange';
// judul.style.backgroundColor = 'brown';




// const judul = document.getElementById('judul');
// judul.setAttribute('name', 'ramdani');

// const a = document.querySelector('section#a a');




// const p2 = document.querySelector('.p2');






// DOM Manipulation 2

// buat element baru
const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('Paragraf Baru');
// simpan tulisan kedalam paragraf
pBaru.appendChild(teksPBaru);

// simpan pBaru di akhir section A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);



// NYOBA
// bikin element dan teks baru
// const pLink = document.createElement('a');
// const pLinkText = document.createTextNode('TikTok Ramdani Arvianto');

// masukan teks ke dalam element
// pLink.appendChild(pLinkText);

// memasukan pLink di akhir section A
// const secA = document.getElementById('a');
// secA.appendChild(pLink);

// pLink.setAttribute('href', 'https://www.tiktok.com/@ramdaniarvianto');






const liBaru = document.createElement('li'); // vas bunga
const teksLiBaru = document.createTextNode('item baru'); // bunga
liBaru.appendChild(teksLiBaru); // masukin bunga ke dalam vas bunga

// mau taruh dimana?
const ul = document.querySelector('section#b ul'); // ruangannya
const li2 = ul.querySelector('li:nth-child(2)'); // mau taruh dimana?

ul.insertBefore(liBaru, li2); // taruh bunganya

const link = document.getElementsByTagName('a')[0];

sectionA.removeChild(link);





const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const judulBaru = document.createElement('h2');
const textJudulBaru = document.createTextNode('Judul Baru');

judulBaru.appendChild(textJudulBaru);

sectionB.replaceChild(judulBaru, p4);


pBaru.style.color = 'yellow';
pBaru.style.backgroundColor = 'red';
liBaru.style.backgroundColor = 'red';
judulBaru.style.backgroundColor = 'red';
