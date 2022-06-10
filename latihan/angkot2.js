var jmlAngkot = 10;
var angkotBeroperasi = 8;
var noAngkot = 1;

while (noAngkot <= angkotBeroperasi) {
    console.log(`Angkot No. ${noAngkot} Beroperasi dengan Baik`);
    noAngkot++;
}
for(angkotBeroperasi +=1 ;angkotBeroperasi <= jmlAngkot ; angkotBeroperasi++){
    console.log(`Angkot No. ${angkotBeroperasi} Sedang tidak Beroperasi`);
}