function MyBiodata(Nama, TempatLahir, TanggalLahir) {
    let biodata = {
        Nama: Nama,
        'Tempat Lahir': TempatLahir,
        'Tanggal Lahir': TanggalLahir
    };
    return biodata;
}

let Nama = "Gea Vista Yulia Candra";
let TempatLahir = "Kediri";
let TanggalLahir = "04 Juli";

let biodataSaya = MyBiodata(Nama, TempatLahir, TanggalLahir);


for (let key in biodataSaya) {
    if (biodataSaya.hasOwnProperty(key)) {
        console.log(key + ': ' + biodataSaya[key]);
    }
}
