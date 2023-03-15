//MENGAMBIL ELEMEN BERDASARKAN ID DARI FORM 2
const form = document.querySelector('#form2');
//MENGAMBIL NILAI YANG DIINPUT PADA ELEMEN INPUT
const inputValues = document.querySelector('#inputValue');
//MENGAMBIL ELEMEN UL YANG DIKASI ID NOTES
const note = document.querySelector('#notes');

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