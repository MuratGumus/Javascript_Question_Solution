// ? Çarpım tablosu oluşturma

// for (let i = 1; i <= 10; i++) {
//     for (let j = 1; j <= 10; j++) {
//         console.log(` ${i}x${j} = ${i*j}`);
//     }
//     console.log("******");
// }

// ? Arsmstrong sayısı

//* 153 => 1**3 + 5**3 + 3**3 = 153 - bu armstrong sayısıdır

// let number = 975;
// let total = 0;
// let yuzlerBasamagi;
// let binlerBasamagi;

// let birlerBasamagi =  Math.floor((number%10)/1)
// console.log(birlerBasamagi);
// let onlarBasamagi = Math.trunc((number%100)/10);
// console.log(onlarBasamagi);

// yuzlerBasamagi = Math.floor((number%1000)/100)
// console.log(yuzlerBasamagi);

// * Alternatif Çözüm 1
//* Hüseyin Hocaya Armağan
// let number = prompt("Please enter a number")
// for (let i = 0; i < number.length; i++) {
//     console.log(`Sagdan ${i+1}. basamagi ` +  Math.floor((number%10**(i+1))/10**i));
// }

//* Alternatif Çözüm 2
// let number = prompt("Lütfen bir sayı giriniz");
// let numberArray = [...number];
// console.log(numberArray);
// const newNumber = numberArray.reduce((sum, val) => sum + val ** 3, 0);
// if (number == newNumber) {
//     alert("Bu bir Amstrong rakamıdır");
// } else {
//     alert("Bu bir Amstrong rakamı değildir");
// }

// for (let i = 0; i < number.length; i++) {
//     total += number[i]**3 // string "1" olmasına rağmen küp alma işleminde number gibi işlem görür
// }
// if (total == number) {
//     console.log("This is armstrong number");
// }else{
//     console.log("This is not a armstrong number");
// }


// ? Kullanıcıdan 0-100 arasında bir not isteyen ve girilen not 0-100'den farklı ise kullanıcıyı uyararak yeniden 0-100 arasında not girmeye zorlayan kodu While döngüsü ile yazınız.

// * AÇIKLAMA => Promp ile kullanıcıdan sayı istiyoruz. Daha sonra while döngüsüyle bu sayının 0'dan küçük olması veya 100'den büyük olması durumunda yeniden sayı istemesini istiyoruz. Kullanıcı 0-100 arasında sayı girene kadar döngü devam edecek.

// //* While ile çözüm
// let number = +prompt("Please enter a number (0-100)")
// while (number<0 || number>100) {
//     number = +prompt("Wrong number. Please enter a number (0-100)")
// }
// console.log(number);


// //* Do While ile çözüm
// let number2;
// do {
//     number2 = +prompt("Please enter a number (0-100)")
// } while (number2<0 || number2>100);
// console.log(number2);



// let total = 0; // Kullanıcının girdiği sayıların toplamı
// let count = 0; // Ortalamayı almak için kaç tane toplama yaptığımızı öğrenmek için sayaç
// let avarage = 0; // Ortalama

// do {
//     number = prompt("Please enter the number")
//     if (number ==  "q" || number == "Q") {
//     }else{
//         total += +(number)
//         count++;
//     }
// } while ((number !=  "q" && number != "Q"));
// avarage = total / count;
// console.log(avarage);

// console.log("-------------------------------");

// //? ID Password Control
// * Normalde siteler id ve parolayı aynı anda kontrol eder. Biz bu örnekte ayrı ayrı kontrol ediyoruz. amacımız login check örneği üzerinden iç içe döngüleri anlamak. 

// * Normal sitelerin kontrol kodu aşağıdaki gibidir.
// if (kontrolIsim == isim && kontrolNumara == numara) {
//     console.log("giris basarili");
// }else{
//     hak--
// }

// //* Login Check - önce id kontrolü yapılacak. eğer id doğru ise parola kontrolü yapılacak. toplamda 3 hata hakkı var.

// const isim = "gumus";
// const numara = 1669;
// let hak = 3;
// let flag = true;
// let kontrolIsim;
// let kontrolNumara;

// while (flag) {
//     if (hak <= 0) {
//         console.log("Hakkiniz kalmadi");
//         flag = false
//         break;
//     }else{
//         kontrolIsim = prompt(`ismini giriniz. ${hak} hata hakkiniz kaldi`);
//         if (hak <= 0) {
//             console.log("Hakkiniz kalmadi");
//             break;
//         }
//         if (kontrolIsim != isim) {
//             hak--;
//             console.log(`${hak} hakkiniz kaldi`);
//         }else{
//             while (flag) {
//                 if (hak <= 0) {
//                     console.log("Hakkiniz kalmadi");
//                     flag = false
//                     break;
//                 }else if (kontrolNumara != numara) {
//                 kontrolNumara = +prompt(`numaranizi giriniz. ${hak} hata hakkiniz kaldi`);
//                     hak--;
//                     console.log(`numaranizi hatali girdiniz.  ${hak} hata hakkiniz kaldi`);
//                 }
//             }
//         }
//     }
// }

// if (isim == kontrolIsim && numara == kontrolNumara) {
//     console.log("tebrikler. giriş yapabilirsiniz");
// }











// * Alternatif Çözüm

// let kullaniciID = "gumus";
// let kullaniciParola = "123"
// let hak = 3;
// let id;
// let parola;

// do {
//     id = prompt("id")
//     if (kullaniciID != id) {
//     hak--;
//     }
//     if (hak==0) {
//         console.log("hakkiniz kalmadi");
//         break
//     }
// } while (kullaniciID != id);


// while (hak>0) {
//     parola = prompt("parola")
//     if (hak==0) {
//         console.log("hakkiniz kalmadi");
//         break
//     }else{
//         if (kullaniciParola==parola) {
//             console.log("sisteme giris yaptiniz");
//             break
//         }else{
//             hak--;
//             }
//     }
// }