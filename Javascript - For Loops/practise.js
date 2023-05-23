//? 1'den number'a kadar olan sayıların toplamını bulma
// let number = +prompt("please enter a number")
// let sum = 0;

// for (let i = 1; i <= number; i++) {
//     sum = sum +i;
// }
// console.log(sum);

//? 3'e tam bölünenlere "Fizz", 5'e tam bölünenlere "Buzz", hem 3'e hem de 5'e tam bölünenlere "FizzBuzz" yazdıran program

// let number = +prompt("please enter a number")
//     for (let i = 1; i < number; i++) {
//         if (i % 3 == 0 && i % 5 == 0) {
//             console.log("FizzBuzz");
//         } else if (i % 3 == 0) {
//             console.log("fizz");
//         } else if (i % 5 == 0) {
//             console.log("Buzz");
//         } else {
//             console.log(i);
//         }
//     }


//? 500 ile 1250 arasındaki 13 e bölümünden kalanı 3 olan sayıları yazdırma ve kaç tane yazdırdığını hesaplama

// const number1 = 500;
// const number2 = 1250;
// let count = 0;

//     for (let i = number1; i <= number2 ; i++) {
//         if (i%13==3) {
//             console.log(i);
//             count++
//         }
//     }
//     console.log(`There are ${count} value`);

//? Negatif sayı girilene kadar girdiği sayıları toplama

// let sum = 0;
// let number = +prompt("bir sayi giriniz");
// while (number >= 0) {
//     sum += number;
//     number = +prompt("bir sayi giriniz");
// }
// console.log(sum);


//* Alternatif çözüm

// let total = 0
// let num;
// do {
//     num = +prompt("bir sayi giriniz");
//     if (total<=total+num) {
//         total = total + num
//     }else{
//         break
//     }
// } while ("mustafa");
// console.log(total);

// //? Aşagıdaki çıktıyı konsola yazdırma

// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

// for (let i = 1;  i<6 ; i++) { 
//     for (let j = 1; j <6 ; j++) { 
//         console.log("* ");
//                     document.getElementById("ilk").innerHTML += "* ";
//     }
// console.log("\n");
//         document.getElementById("ilk").innerHTML += "<br>";
// }

// * Alternati çözüm
// let x =""
// for (let i = 1; i < 6 ; i++) {
//     if (i!=1) {
//         x+="\n"
//     }
//     for (let j = 1; j < 6; j++) {
//         x += "* ";
//     }    
// }
// console.log(x);


// //?Aşagıdaki çıktıyı konsola yazdırma


//* 0
//* 00
//* 000
//* 0000
//* 00000
//* 000000

// for (let i = 1; i <= 10; i++) {
//     for (let j = 1; j <= i; j++) {
//                     document.getElementById("ilk").innerHTML += (" 0 " + " 0 ");
//     }
//         document.getElementById("ilk").innerHTML += "<br>";
// }
// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= 10; j++) {
//                     document.getElementById("ilk").innerHTML += "0 ";
//     }
//         document.getElementById("ilk").innerHTML += "<br>";
// }
// for (let i = 1; i <= 2; i++) {
//     for (let j = 1; j <= 30; j++) {
//                     document.getElementById("ilk").innerHTML += "0 ";
//     }
//         document.getElementById("ilk").innerHTML += "<br>";
// }