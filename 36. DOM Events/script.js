const p3 = document.querySelector('.p3');

function ubahWarna() {
    p3.style.color = 'yellow';
    p3.style.backgroundColor = 'red';
}

const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function() {
    const ul = document.querySelector('section#b ul');
    const liBaru = document.createElement('li');
    const teksLiBaru = document.createTextNode('item baru');
    liBaru.appendChild(teksLiBaru);
    ul.appendChild(liBaru);
});