
//Event event yang bisa dimanfaatkan dalam penggunaan keyboar

//event click digunakan untuk menjalankan code pada saat elemen yang kita mau dengan sebuah click
document.querySelector('#btn-obj').addEventListener('click', (e)=>{

    console.log(e);

});




const input = document.querySelector('input');

// //event keydown, digunakan menjalankan code setiap keyboard ditekan
// input.addEventListener('keydown',()=>{
//     console.log('Tombol ditekan');
// });

// //event keydown, digunakan menjalankan code setiap keyboard dilepas
// input.addEventListener('keyup',()=>{
// console.log('tombol dilepas');
// });


//contoh dibawah ini digunakaan saat ingin mengetahui tombol apa yang sedang ditekan pada keyboard e.key untuk tahun nama tombol, dan e.code untuk tahu posisi tombol

// input.addEventListener('keydown',(e)=>{
//     console.log(e.key);
//     console.log(e.code);
// });


// jika mau mendeteksi keyboard tertentu aja seperti tombol arah aja, bisa menggunakan fitur switch seperti dibawah ini
input.addEventListener('keydown',(e)=>{
    switch (e.code){
    
        case 'ArrowUp' : console.log('Panah Atas');
       
        break;

        case 'ArrowDown' : console.log('Panah Bawah');
       
        break;

        case 'ArrowLeft' : console.log('Panah Kiri');
       
        break;
       
        case 'ArrowRight' : console.log('Panah Kanan');
       
        break;

    };

  
  
});