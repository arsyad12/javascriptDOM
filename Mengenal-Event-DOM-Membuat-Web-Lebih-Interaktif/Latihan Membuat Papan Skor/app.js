// mengambil semua nilai elemen berdasarkan ID

const display1 = document.querySelector('#p1-display');
const display2 = document.querySelector('#p2-display');
const selectPoint = document.querySelector('#selectPoint')
const btnP1 = document.querySelector('#btn-p1');
const btnP2 = document.querySelector('#btn-p2');
const btnReset = document.querySelector('#reset');

//variabel untuk papan score 

let p1score = 0;
let p2score = 0;
let gameOver = false;
let winPoint = 0;


// untuk mengambil nilai dari select untuk menentukan winPoint

selectPoint.addEventListener('change',function(){
    //memastikan nilai yang diambil dalam bentuk numerik/integer dengan parse int
    winPoint = parseInt(this.value);
   //Mereset nilai ke awal
    reset();
});




btnP1.addEventListener('click',()=>{
 
    
    if (!gameOver) {
    
        p1score += 1;

        if (p1score === winPoint) {
            
            gameOver = true;

        }

    }
    

    display1.textContent = p1score;
    
});


btnP2.addEventListener('click',()=>{

if (!gameOver) {

    p2score += 1

    if (p2score === winPoint) {
        
        gameOver = true;
    }

    display2.textContent = p2score;
    
}
})



reset =()=>{
    gameOver = false;
    p1score = 0;
    p2score = 0;
    display1.textContent = 0;
    display2.textContent = 0;
}


btnReset.addEventListener('click',reset)
