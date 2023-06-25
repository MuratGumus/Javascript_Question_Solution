// ? ÖRNEK 1 => Dizi içerisindeki pozitif sayıların toplamını for in ile hesaplama

// const numbers = [-3, 7, -2, 10, 5, -8, 9];
// let sum = 0;

// for (let index in numbers) {
//     if (numbers[index] > 0) {
//         sum += numbers[index];
//     }
// }

// console.log("Pozitif sayilarin toplami:", sum);

// *********************************

// ? ÖRNEK 2 => Dizi içerisindeki harfleri büyük harfe çevirerek yeni diziye ekleyiniz

// const letters = ["a", "b", "c", "d", "e"];
// let uppercaseLetters = [];

// for (let letter of letters) {
//     uppercaseLetters.push(letter.toUpperCase());
// }

// console.log("Büyük harfler:", uppercaseLetters);

// *********************************

// ? ÖRNEK 3 => Bir dizideki sayıların karelerini alarak yeni bir dizi oluşturun.

// const numbers = [1, 2, 3, 4, 5];
// let squares = [];

// numbers.forEach(function (number) {
//     squares.push(number * number);
// });

// console.log("Sayilarin kareleri:", squares);

// *********************************

// ? ÖRNEK 4 => Bir dizideki sayıların karelerini alarak yeni bir dizi oluşturun.

// const numbers1 = [1, 2, 3, 4, 5];

// numbers1.map(function (number, index, numbers1) {
//     numbers1[index] = number * number;
// });

// console.log("Sayilarin kareleri:", numbers1);

// *********************************

// ? ÖRNEK 5 => Bir dizideki çift sayıları filtreleyerek yeni dizi oluşturun.

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evenNumbers = numbers.filter(function (number) {
//     return number % 2 === 0;
// });

// console.log("Çift sayilar:", evenNumbers);

// *********************************

// ? ÖRNEK 6 => Dizideki çift sayıları ikiye çarpıp elde edilen sayiları toplayınız.

// const numbers = [1, 2, 3, 4, 5, 6];

// const filteredNumbers = numbers.filter((number) => number % 2 === 0);
// const mappedNumbers = filteredNumbers.map((number) => number * 2);

// let sum = 0;
// for (let i = 0; i < mappedNumbers.length; i++) {
//     sum += mappedNumbers[i];
// }

// console.log("Sonuç:", sum);

// *********************************

// ? ÖRNEK 6 => Sırasıyla for in, for of, foreach kullanarak Lenght'i 5 ten büyük olan kelimeleri büyük kelimelerin tüm harflerini büyüterek yazdırınız

// const words = [
//     "Merhaba",
//     "Dünya",
//     "Nasilsiniz",
//     "Bugün",
//     "Günlerden",
//     "Pazartesi",
// ];

// const filteredWords = words.filter((word) => word.length > 5);
// const mappedWords = filteredWords.map((word) => word.toUpperCase());

// let concatenated = "";

//* for...in ile çözüm
// for (let index in mappedWords) {
//     concatenated += mappedWords[index] + " ";
// }

// console.log("Sonuç (for...in):", concatenated.trim());

//* for...of ile çözüm
// for (let word of mappedWords) {
//     concatenated += word + " ";
// }

// console.log("Sonuç (for...of):", concatenated.trim());


//* forEach ile çözüm
// mappedWords.forEach((word) => {
//     concatenated += word + " ";
// });

// console.log("Sonuç (forEach):", concatenated.trim());
