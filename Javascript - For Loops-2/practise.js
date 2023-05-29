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
//     console.log(`${i+1}. basamagi ` +  Math.floor((number%10**(i+1))/10**i));
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
