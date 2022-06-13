// let a = 3;
// let b = 5;
// let volumeA= a**3;
// let volumeB= b**3;
// let total = volumeA + volumeB;

// function jumlahVolume(a, b){
// 	let volumeA = a**3;
// 	let volumeB = b**3;
// 	let total = volumeA + volumeB;

// 	return total;
// }

// function tambah(a, b){
// 	return a + b;
// }

// function kali(a, b){
// 	return a * b;
// }

// let hasil = tambah(kali(2, 3), kali(5, 10));

// Arguments
function tambah(a, b){
	
	let coba = 0;

	for(i = 0; i < arguments.length; i++){
		coba += arguments[i];
	}

	coba += a + b;

	return coba;
}

let hasil = tambah(5,4,10);

console.log(hasil);