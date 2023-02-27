
//Contoh penggunaan document.getElementsByTagName

// const allImages = document.getElementsByTagName('img');

// for (let img of allImages) {
// 	// console.log(img.src);

/// jika source gmbar sudah ditentukan menggunakan ketentuan dibawah ini, maka img tidak akan daimbil dari katalog image dari fungsi allImages

// 	img.src =
// 		'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/1920px-Cat_August_2010-4.jpg';
// }




//Classname dan juga tag name sama sama berupa HTML collection, jadi jika isi colection nya sudah di set, maka 
//elemen nya tidak diambill dari list colection lagi


// const squareImages = document.getElementsByClassName('square');

// for (let img of squareImages) {
// 	img.src =
// 		'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/1920px-Cat_August_2010-4.jpg';
// }

const links = document.querySelectorAll('a');

for (let link of links) {
	link.style.color = 'rgb(0, 108, 134)';
	link.style.textDecorationColor = 'magenta';
	link.style.textDecorationStyle = 'wavy';
}
