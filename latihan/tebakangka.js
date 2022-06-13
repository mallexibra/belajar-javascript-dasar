// User memasukkan angka => computer memilih angka => Jawaban ?
// Benar = Kamu benar
// Salah = Jawaban kamu salah, komputer memilih angka?
// Tanya ("Apakah kamu coba lagi?")
// Kesempatan berkurang

let tanya = true;

if (tanya == true) {
	for(let kesempatan = 3; kesempatan > 0; kesempatan--){
		let user = parseInt(prompt("Isikan angka yang anda inginkan"));

		let comp = Math.floor((Math.random()*10)+1);

		let hasil = "";

		if (comp == user) {
			hasil = "Benar"
		}else{
			hasil = "Salah"
		}

		alert(`Angka dari komputer ${comp} dan Angka dari anda adalah ${user}
			Maka jawaban anda adalah ${hasil}`);

		tanya = confirm("Kamu memiliki " + kesempatan + " Kesempatan lagi. \n Mau mencoba tebak angka lagi?");
		if (tanya == false) {
			kesempatan = 0;
		}
	}
	alert("Terimakasih sudah bermain game ini :) \n Jika ingin mencoba lagi silahkan reload halaman ini ya...")
}