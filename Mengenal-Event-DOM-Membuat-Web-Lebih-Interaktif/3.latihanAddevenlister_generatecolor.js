const generateButton = document.querySelector('#btn-generate'); //mengambil elemen button berdasarkan id
const h1 = document.querySelector('#h1-generate'); //mengambil elemen h1 berdasarkan id


//Membuat fungsi untuk menggenerate kode warna dari rgb


const generateColor=()=>{

const r = Math.floor(Math.random()*255);
const g = Math.floor(Math.random()*255);
const b = Math.floor(Math.random()*255);

return `rgb(${r},${g},${b})`

};


//memanggil fungsi diatas dengan menggunakan event click 



generateButton.addEventListener('click',()=>{

    document.body.style.backgroundColor = generateColor();
    
    h1.innerText=generateColor();

    console.log(generateColor());
});


