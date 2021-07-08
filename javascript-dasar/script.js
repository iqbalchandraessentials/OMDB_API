// var nama = prompt('masukan nama anda'); 

// alert('hello world ' + nama);

// var tes = confirm('are you sure ');

// if (tes === true) {
//     alert ("you say Yes")
// }  else {
//     alert("you say No");
// } 


// var lagi = true ;
// while (lagi === true) {
//     var nama = prompt('masukan nama');
//     alert ('halo ' + nama)
//     lagi = confirm ("ulangi ??");
// }
// alert ('terimakasih');

// var x = 0;

// while ( x<= 5 ) {
// console.log("oke oke " +x)
//     x++;
// }

// var jumlahAngkot = 10;
// var nilaiAwal = 1;
//  while ( nilaiAwal<=jumlahAngkot ) {
//         console.log("Angkokt No."+nilaiAwal+" Beroprasi dengan baik")
//         nilaiAwal++;
//        }
       
//        for (var noAngkot = 0; noAngkot<10; noAngkot++){
//               console.log("Angkokt No."+noAngkot+" Beroprasi dengan baik")
// }

// var noAngkot = 1;
// var jmlAngkot = 10;
// var beroprasi = 4;
// while (noAngkot<=beroprasi) {
//        console.log("Angkokt No."+noAngkot+" Beroprasi dengan baik")
       
//        noAngkot++
// }
// for (noAngkot = beroprasi+1; noAngkot<=jmlAngkot; noAngkot++){
       
//        console.log("Angkokt No."+noAngkot+" Tidak beroprasi")
// }


// for (var noAngkot = 1; noAngkot<=10; noAngkot++){
//        if (noAngkot <= 6 && noAngkot != 5){
//               console.log("Angkokt No."+noAngkot+" Beroprasi dengan baik")
//        }
//        else if(noAngkot==8 || noAngkot==10  || noAngkot==5) {
//               console.log("Angkokt No."+noAngkot+" Sedang lembur")
//        }
//        else {
//               console.log("Angkokt No."+noAngkot+" Tidak Beroprasi")
//        }
// }


// var s = '';

// for (var nilaiAwal=10; nilaiAwal>0; nilaiAwal--){
//       for (var tes = 0; tes<= nilaiAwal; tes++){
//              s += '*';
//       }
//        s+= '\n';
// }

// console.log(s)


// suwit jawa

// var ulang = true;

// while (ulang) {


// // menangkap pilihan player
// var player = prompt("pilih Semut, Gajah, Orang :");

// // menangkap pilihan koumputer
// var computer = Math.random();
//        if (computer < 0.34) {
//               computer= "gajah";
//        }
//        else if (computer >=0.34 && computer <0.67) {
//               computer = "orang";
//        } else {
//               computer = "semut"
//        }
//        // rulers
//        console.log ("pilihan Player "+player);
//        console.log ("pilihan Computer "+computer);
// var hasil = '';
// if (player == computer) {
//        hasil= 'SERI';
// } else if ( player=='gajah'){
//        if (computer=='orang'){
//               hasil='Menang';
//        } else {
//               hasil = 'kalah';
//        }
// } else if ( player=='orang'){
//        if (computer=='semut'){
//               hasil='Menang';
//        } else {
//               hasil = 'kalah';
//        }
// } else if ( player=='semut'){
//        if (computer=='gajah'){
//               hasil='Menang';
//        } else {
//               hasil = 'kalah';
//        }
// } else {
//        hasil = 'input masukan not define'
// }

// // hasil suwit 
// alert (hasil);
// console.log(hasil);

// ulang++;
// var ulang = confirm("Apakah anda ingin lanjut ?")
// }

// alert ('Terimakasih');


// var a = parseInt(prompt ('masukan angka pertama : '));
// var b = parseInt(prompt ('masukan angka kedua : '));

// function tambah (a,b) {
//        var total = a+b;
//        return total;
// }

// var hasil = tambah(a,b);

// alert (hasil);

// var arr = [
//        "iqbal" , "chandra" , "dewangga"
// ];
// for  (var x = 0; x<arr.length; x++){
//        console.log(arr[x]);
// }
// console.log(arr.join(';'));

// arr.forEach(function(e){
//        console.log(e);
// })

// var penumpang = [
//        "iqbal",
//        "chandra",
//        "dewangga"
// ];

// var tambahPenumpang = function (namaPenumpang, penumpang) {
// // jika angkot kosong
//        if (penumpang.length == 0){
//               // tambah penumpang di awal array
//               penumpang.push(namaPenumpang)
//               // kembalikan nilai array
//               return penumpang;
//        } else {

//               for (var x = 0; x < penumpang.length; x++) {
//                      if (penumpang[x]==undefined) {
//                             penumpang[x]=namaPenumpang;
//                             return penumpang;
//                      } else if (penumpang[x]==namaPenumpang){
//                             console.log ("nama" + namaPenumpang+ "sudah ada");
//                             return penumpang;
//                      }
//                      else if (x == penumpang.length - 1) {
//                             penumpang.push(namaPenumpang);
//                             return penumpang;
//                      }
//               } 
              
              
//        }
// }

// var hapusPenumpang = function(namaPenumpang,penumpang) {
//        if (penumpang.length == 0){
//               console.log ("angkot kosong");
//               return penumpang;
//        }

//        else {
//               for (x = 0; x<penumpang.length; x++){
//                      if (penumpang[x]==namaPenumpang){
//                             penumpang[x]=undefined;
//                             return penumpang;
//                      } else if (x== penumpang.length -1) {
//                             console.log("nama penumpang " +namaPenumpang+ " tidak ada");
//                             return penumpang;
//                      }
//               }
//        }
// }


// var warung = {
//        satu : {
//               nama : "iqbal",
//               toko : "sepeda",
//               alamat : {
//                      kota : "jakarta",
//                      jalan : "lubang buaya"
//               },
//               barang : ["frame","helm","pedal","toolkit"],
//               kategori : "hobi"
//        },
       
//        dua : {
//               nama : "chandra",
//               toko : "dapur",
//               alamat : {
//                      kota : "jakarta",
//                      jalan : "pondok gede"
//               },
//               barang : ["sayur","telur","daging"],
//               kategori : "pangan"
//        }
// };

// console.log (warung);

// object deklarasi

// function tambahMobil(nama,produsen,asal,tipe) {
//        var mobil = {};
//        mobil.nama = nama;
//        mobil.produsen = produsen;
//        mobil.asal = asal;
//        mobil.tipe = tipe ;
//        return mobil;
// }

// var oke = tambahMobil("jazz","toyota","jepang","city car");
// var oke1 = tambahMobil("city","toyota","jepang","sedan");



// object constructor (keyword NEW)

// function dataDiri (nama,gender,umur,alamat) {
//        this.nama=nama;
//        this.gender=gender;
//        this.umur=umur;
//        this.alamat=alamat;
// }

// var test = new dataDiri("lutfy","P",21,"bogor");
// var test1 = new dataDiri("kautsar","P",22,"bogor");


// ulangi

// object literal

// function hello(nama) {
//        alert("hello " +nama);
// }
// hello("iqbal");

// object deklarasi

// var sapa = {};

// sapa.pagi = function (nama) {
//        alert("selamat Pagi " + nama);
// }

// sapa.pagi("iqbal");


// object constructor (new)

// function Malam(nama) {
//        alert("selamat Malam " + nama);
// }

// new Malam("iqbal");



// membuat Angkot dengan Object

function Angkot(sopir,trayek,penumpang,kas) {
       this.sopir=sopir;
       this.trayek=trayek;
       this.penumpang=penumpang;
       this.kas=kas;

// jika angkot kosong
       this.penumpangNaik = function(namaPenumpang){
                     if (this.penumpang.length == 0){
                     this.penumpang.push(namaPenumpang);
                     return this.penumpang;
              } else {
                     for (var i = 0; i < this.penumpang.length; i++){
                            // jika ada bangku kosong
                            if ( this.penumpang[i] == undefined) {
                                   this.penumpang[i] = namaPenumpang;                     
                                   return this.penumpang;
                            }
                            // jika ada penumpang yang sama 
                            else if (this.penumpang[i]==namaPenumpang){
                                   alert(namaPenumpang+ "sudah ada dalam angkot");
                                   return this.penumpang;
                            }
                            // karna kalo ditelusuri dari awal yaitu
                            // jika penumpang dengan index ke 0 itu bukan undefine maka akan langsung mengisi ke kursi akhir
                            // jadi di tambahkan pengkondisian yaitu jika index sudah sampai akhir array maka -1
                            else if (i == this.penumpang.length) {
                                   this.penumpang.push(namaPenumpang);
                                   return this.penumpang;
                            }
                     }
              }
       }


       this.penumpangTurun = function(namaPenumpang,bayar) {
      
              if (this.penumpang.length==0){
                    alert ('angkot masih kosong');
                    return false;
             } else { 
              for (var i=0; i < this.penumpang.length; i++){
                     // console.log("penumpang nama" + this.penumpang[i]);
                     if ( this.penumpang[i] == namaPenumpang) {
                            this.penumpang[i] = undefined;
                            // this.kas.push(bayar);
                            this.kas += bayar;
                            return this.penumpang;                    
                     } 
                     else if (i == penumpang.length -1) {
                            alert ("Penumpang " +namaPenumpang+ " tidak ditemukan");
                     }
              }

              }
                     
             
       }
}

var angkot1 = new Angkot("iqbal",["pondok-gede","Kp.Rambutan"],[],0);

var angkot2 = new Angkot("chandra",["kp.Melayu","Kp.Rambutan"],[],0);