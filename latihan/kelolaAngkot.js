let penumpang = [];
let tambahPenumpang = function(namaPenumpang, penumpang){
    // Jika angkot kosong
    if(penumpang.length === 0){
        // Tambah penumpang di awal array
        penumpang.push(namaPenumpang);
        // Kembalikan isi array & keluar dari function
        return penumpang;
    }else{
        // telusuri seluruh kursi dari awal
        for(let i = 0; i < penumpang.length; i++){
            // jika ada kursi kosong
            if(penumpang[i] == undefined){
                // tambah penumpang di kursi tersebut
                penumpang[i] = namaPenumpang;
                // kembalikan isi array & keluar dari function
                return penumpang;
            }
            // jika sudah ada nama yang sama
            else if(penumpang[i] == namaPenumpang){
                // tampilkan pesan kesalahannya
                console.log("Nama sudah ada didalam angkot broo");
                // kembalikan isi array & keluar dari function
                return penumpang;
            }
            // jika seluruh kursi terisi
            else if(i === penumpang.length-1){
                // tambah penumpang di akhir array
                penumpang.push(namaPenumpang);
                // kembalikan isi array & keluar dari function
                return penumpang;
            }
        }
    }
}

let hapusPenumpang = function(namaPenumpang, penumpang){
    // jika angkot kosong
    if(penumpang.length == 0){
        // tampilkan pesan bahwa angkot kosong, dan
        // tidak mungkin ada penumpang turun
        console.log("Angkot masih kosong brooo");
        // kembalikan isi array & keluar dari function
        return penumpang;
    }
    // else
    else{
        // telusuri seluruh kursi dari awal
        for(let j = 0; j < penumpang.length; j++){
            // jika nama penumpang sesuai
            if(penumpang[j] == namaPenumpang){
                // hapus penumpang dengan mengubah namanya,
                // menjadi undefined
                penumpang[j] = undefined;
                // kembalikan isi array & keluar dari function
                return penumpang;
            }
            // jika tidak ada nama yang sesuai
            else{
                // tampilkan pesan kesalahannya
                console.log("Nama penumpang tidak ada");
                // kembalikan isi array & keluar dari function
                return penumpang;
            }
        }
    }
}