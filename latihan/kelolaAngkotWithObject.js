// Mengelola angkot dengan object
function Angkot(supir,trayek,penumpang,kas){
    this.supir = supir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;
    this.penumpangNaik = function(namaPenumpang){
            this.penumpang.push(namaPenumpang);
            return this.penumpang;
    }
    this.penumpangTurun = function(namaPenumpang, bayar){
        if(this.penumpang.length === 0){
            alert("penumpang masih kosong")
            return false;
        }else{
            for(let i = 0; i < this.penumpang.length; i++){
                if(this.penumpang[i] == namaPenumpang){
                    this.penumpang[i] = undefined;
                    this.kas += bayar;
                    return this.penumpang;
                }
            }
        }
    }
}

let angkot1 = new Angkot("Maulana", ["Kalibaru", "Genteng"], [],0);
let angkot2 = new Angkot("Malik", ["Genteng", "Rogojampi"], [], 0);