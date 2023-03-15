const buttons = document.querySelector('#changeColor');
const containers = document.querySelector('#container');



buttons.addEventListener('click',()=>{

containers.style.backgroundColor = generateColor();

});


containers.addEventListener('click',()=>{
    containers.classList.toggle('hide');
});


const generateColor =()=>{
    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);

    return`rgb(${r},${g},${b})`;

};