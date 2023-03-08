// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

//membuat variabel untuk menangkap id container dari html

const container = document.querySelector('#container'); 

//kemudian membuat variabel untuk menangkap conten dari API pokemon

const imageSrc = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

//

for (let i = 0; i <=500; i++) {

	const pokeBall = document.createElement('div'); //membuat elemen div untuk membungkus konten
	
	pokeBall.classList.add('pokemon'); // mengambil style dari css yang di deklarasikan sebagai .pokemon di app.css
	
	
	const pokemonImg = document.createElement('img'); //membuat elemen untuk gambar pokemon

	pokemonImg.src = `${imageSrc}${i}.png`; //mengisi elemen dengan gambar pokemon dengan memanggil variabel imgSrc dan i untuk urutan sampai 500
	
	
	
	const labels = document.createElement('span'); //membuat elemen span untuk penomoran 

	labels.append(`${'#'}${i}`); // buat text elemen dengan append saja + iterasi dari I




	pokeBall.appendChild(labels); // memasukan konten textt dari append ke elemen dive poke ball
	
	pokeBall.appendChild(pokemonImg);// memasukan konten gambar ke elemen dive poke ball
		
	container.appendChild(pokeBall); // memasukan elemen poke ball kedalam elemen container agar mmuncul dalam html


}
