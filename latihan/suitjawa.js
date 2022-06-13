// Mengambil inputan dari user
let konfirm = true;


while(konfirm == true){
let user = prompt("Masukkan jawaban anda! \n (cth: orang, gajah, semut)");


// Menentukan jawaban dari komputer
	let comp = Math.random();

	let hasil ="";

	if (comp < 0.34) {
		comp = "orang"
	}else if(comp >= 0.34 && comp <= 0.68){
		comp = "gajah"
	}else if (comp > 0.68) {
		comp = "semut"
	}else{
		comp = "Data yang anda masukkan salah!"
	}

	if (user == comp) {
		hasil = "Seri!"
	}else if( user == "gajah"){
		if (comp == "orang") {
			hasil = "Menang!"
		}else{
			hasil = "Kalah!"
		}
	}else if(user == "semut"){
		if (comp == "gajah") {
			hasil = "Menang"
		}else if(comp == "orang"){
			hasil = "Kalah"
		}
	}else{
		hasil = "Jawaba tidak dapat diterima"
	}
	alert(`Anda menjawab ${user} dan Komputer menjawab ${comp} \n Jadi game ini menyatakan kamu ${hasil} `);
	konfirm = confirm("Coba lagi?");
}

alert("Terimakasih atas jawabannya hehe");