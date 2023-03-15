//MENGAMBIL ELEMEN BERDASARKAN ID DARI FORM 2
const form = document.querySelector('#form3');
//MENGAMBIL NILAI YANG DIINPUT PADA ELEMEN INPUT
const inputValues = document.querySelector('#inputValue2');
//MENGAMBIL ELEMEN UL YANG DIKASI ID NOTES
const note = document.querySelector('#notes2');



// beruguna untuk mengetahui bahwa sudah terjadi perubahan pada elemen input

// inputValues.addEventListener('change',()=>{

//     console.log('inputan berubah')

// });


// berguna untuk mengetahui jumlah karakter yang diinput dalam elemen input

inputValues.addEventListener('input',()=>{
    
    console.log('Berhasil diinput')

});




form.addEventListener('submit',(e)=>{

e.preventDefault();

//Mendeteksi apakah nilai pada kolom input mengalami perubahan atau tidak


//BUAT VARIABEL BARU UNTUK MENAMPUNG NILAI YANG DIMASUKIN DALAM INPUT VALUE
const newValue = inputValues.value;


//BUAT ELEMEN LIST SECARA REALTIME
const newList = document.createElement('li');

//MEMASUKAN NILAI YANG UDA DITAMPUNG DALAM NEW VALUE KEDALAM ELEMEN
newList.innerText = newValue;


//MENAMPILKAN SECARA REALTIME NILAI YANG UDAH JADI KEDALAM WEBSITE
note.append(newList);



//menghapus data pada kolom input setelah di submit
inputValues.value = "";


});