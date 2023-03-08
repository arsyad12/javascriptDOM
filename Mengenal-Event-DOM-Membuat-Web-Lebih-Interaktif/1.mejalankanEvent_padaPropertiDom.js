const button = document.querySelector('#clickMe'); //mengambil elemen button berdasarkan ID

//membuat event dengan  memeasukannya ke function

button.onclick = function() {
    console.log('thanks to click me');
};

//saat menulis event didalam properti DOM, sebaiknya kita tulis sebagai function 
//karena jika tidak, maka bakal langsung di eksekusi otomatis sebelum kita jalankan


button.onmouseover = function(){
    console.log('HEH AKU LANANG LOH MAS')
};

// dalam 1 propeerti bisa menggunakan beberapa event namun setiap 1 event hnya akan di eksekusi sekali
// jadi kalau ada 2 event on click dari 1 elemen, maka yang akan dieksekusi adalah event terakhir


//jika mau menjalankan 2 atau lebih event yang sama dalam 1 elemen, bisa menggunakan addeventlistener