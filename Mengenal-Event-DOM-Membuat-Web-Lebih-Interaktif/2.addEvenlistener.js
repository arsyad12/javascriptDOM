//add even listener berguna untuk menjalankan even yang sama digunakan secara bersamaan tanpa saling timpa

const button = document.querySelector('#addeventlistener'); 

// jika hanya ingin menggunakan 1 event click, bisa menggunakan cara dibawah ini fungsi bisa dibuat 
// didalam evenlistener

//     button.addEventListener('click',()=> {
//     console.log(alert('Lah kok iso'))
// });



// namun jika ingin menggunakan 2 atau lebih even click secara bersamaan bisa dibuat dulu fuungsinya secara terpisah
// kemudian bisa dipanggil berurutan dengan even listener seperti contoh dibawah ini

const click1 = ()=>{
    console.log('step 1')
}

const click2 = ()=>{
    console.log('step 2')
}


button.addEventListener('click',click1);
button.addEventListener('click',click2);