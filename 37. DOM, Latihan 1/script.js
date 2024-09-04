const btn = document.querySelector('button');

// btn.addEventListener('click', function() {
//     const ubahWarna = document.querySelector('body');
//     ubahWarna.style.backgroundColor = 'royalblue';
// });

// btn.addEventListener('dblclick', function() {
//     document.body.style.backgroundColor = 'orange';
// });

// btn.addEventListener('mouseenter', function() {
//     document.body.style.backgroundColor = 'red';
// });

// btn.addEventListener('mouseleave', function() {
//     document.body.style.backgroundColor = 'white';
// });

btn.addEventListener('click', function() {
    document.body.classList.toggle('royalblue');
    btn.classList.toggle('tombol');
});

const btn2 = document.createElement('button');
const teksBtn2 = document.createTextNode('ACAK WARNA');
btn2.appendChild(teksBtn2);
btn2.setAttribute('type', 'button');
btn.after(btn2);

btn2.addEventListener('click', function() {
    const r = Math.round(Math.random() * 255) + 1;
    const g = Math.round(Math.random() * 255) + 1;
    const b = Math.round(Math.random() * 255) + 1;
    
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});




// sMerah.addEventListener('change', function() {
//     const r = sMerah.value;
//     const g = sHijau.value;
//     const b = sBiru.value;

//     document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')'
// });

const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');

sMerah.addEventListener('input', function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;

    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')'
});

sHijau.addEventListener('input', function() {
    const r = sMerah.value;
    const b = sBiru.value;
    const g = sHijau.value;

    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')'
});

sBiru.addEventListener('input', function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;

    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')'
});


document.body.addEventListener('mousemove', function(event) {
    const xPos = Math.round((event.clientX / window.innerHeight) * 255);
    const yPos = Math.round((event.clientY / window.innerHeight) * 255);
    document.body.style.backgroundColor = 'rgb('+ xPos +','+ yPos +',100)'
});