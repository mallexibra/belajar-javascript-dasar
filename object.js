// // Penulisan Object
// // Object Literal
// let mhs1 = {
//     nama: "Maulana Malik Ibrahim",
//     nim: "093247934",
//     jurusan: "Teknik Informatika"
// }

// // function declaration
// function mahasiswaDua(nama, nim, jurusan){
//     let mhs2 = {}
//     mhs2.nama = nama;
//     mhs2.nim = nim;
//     mhs2.jurusan = jurusan;
//     return mhs2;
// }

// let mhs2 = mahasiswaDua("Anastasya Afianti", "928798389", "Teknik Informatika");

// // Constructor
// // Biasanya nama function diawali dengan huruf besar atau kapital
// function Mahasiswa(nama, nim, jurusan){
//     // Asumsikan jika function ini memiliki
//     // var this = {}
//     this.nama = nama;
//     this.nim = nim;
//     this.jurusan = jurusan;
//     // return this;
// }
// // pada saat mau memanggil harus di sertai kata new;
// let mhs3 = new Mahasiswa("Anastasya Ibrahim", "9230344394", "Teknik Informatika");


// This
// sebuah keyword spesial, secara otomatis didefinisikan pada setiap function;
// this === window;
// console.log(this); // output: window atau object global;
// var a = 10;
// console.log(window.a) // 10 atau sama saja;

// // Function Declaration
// function halo(){
//     console.log("halo");
//     // console.log(this);
// }
// this.halo(); 
// // this pada function declaration mengembalikan object global;

// object literal
// var obj = {a: 10, nama: "Maulana Malik"};
// obj.halo = function(){
//     console.log(this);
//     console.log("halo");
// }
// obj.halo();
// console.log(obj);
// This akan mengembalikan object yang bersangkutan;

// constructor
// function Halo(){
    // this.nama = "Maulana Malik";
    // // console.log(this);
    // console.log('halo');
// }
// new Halo();
// constructor akan membuat object sendiri
// this akan mengembalikan object yang baru dibuat
// var obj1 = new Halo();
// // output: Halo {nama: 'Maulana Malik'}
// // halo
// var obj2 = new Halo();
// console.log(obj2);