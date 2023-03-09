//prevent default untuk mencegah berpindah halaman saat sebuah form di submit, sehingga tetap stay di halaman yang sedang dipakai.

const forms = document.querySelector('form');

forms.addEventListener('submit', (e)=>{
e.preventDefault();
console.log('Form Submited')
});