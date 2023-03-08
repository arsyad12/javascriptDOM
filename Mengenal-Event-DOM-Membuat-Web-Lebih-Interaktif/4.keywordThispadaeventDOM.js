//Skema nya sama seperti latihan add EventListener, tapiini menggunakan perulangan


// dan yang beda selanjutnya adalah, agar bisa di buat loop, harus menggunakan query selector All

const buttonColor = document.querySelectorAll('#this-button'); //ngambil elemen dari id 
const heading = document.querySelectorAll('#heading-this');// ngambil elemen dari id

const generateColor =()=>{
    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);

    return`rgb(${r},${g},${b})`;

};


function colorize() {  //untuk membuat function saat menggunakan keyword this, harus memakai function normal, gabisa make =()=>
    
    console.log(generateColor());
    this.style.backgroundColor = generateColor();
    this.style.color = generateColor();  

};


for (let buttonColors of buttonColor) { // perulangan pake for of button colors elemen yang diisi dengan button color diatas
   
    buttonColors.addEventListener('click',colorize); // event click yang jadi ringkas karena sudah menggunakan function dan keyword this


};

for (let headings of heading) {
   
    headings.addEventListener('click',colorize);


};








