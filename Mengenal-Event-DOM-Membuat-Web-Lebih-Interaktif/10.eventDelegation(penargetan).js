//MENGAMBIL ELEMEN BERDASARKAN ID DARI FORM 2
const form = document.querySelector('#forms');
//MENGAMBIL NILAI YANG DIINPUT PADA ELEMEN INPUT
const inputValues = document.querySelector('#inputValue3');
//MENGAMBIL ELEMEN UL YANG DIKASI ID NOTES
const note = document.querySelector('#notes3');

form.addEventListener('submit',(e)=>{

e.preventDefault();

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




note.addEventListener('click',(e)=>{

    //menghapus data dengan targeting ke parent yaitu UL, jadi apapun elemen yang ada didalam ul dapet di modifikasi

    // e.target.remove();


    //menghapus data dengan targeting ke parent yaitu UL, namuun hanya menarget kan data list yang bisa di modifikasi

    e.target.nodeName === 'LI' && e.target.remove()

})


