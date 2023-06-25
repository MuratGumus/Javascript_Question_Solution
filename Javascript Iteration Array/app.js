//! ARRAY METHODLARI

// //*? FOR IN

// const grades = [55, 77, 23, 89, 100, 44, 33, 45];
// const lessThan50 = [];
// const equalOrBiggerThan50 = [];

// for (let i in grades) {
//     grades[i] < 50
//         ? lessThan50.push(grades[i])
//         : equalOrBiggerThan50.push(grades[i]);
// }

// console.log(lessThan50);
// console.log(equalOrBiggerThan50);

//*******************************************/
// //*? FOR OF

// const students = ["ahmet", "mehmet", "ismet", "saffet", "ahmet", "saffet"];
// const findStudent = (name) => {
// let counter = 0;
// for(let student of students){
//     if (student.toLowerCase() === name) {
//         counter++
//     }
// }
//     return counter === 0 ? `${name} can not be found` : `${name} found ${counter} times`
// }
// console.log(findStudent("ahmet"));
// console.log(findStudent("mehmet"));
// console.log(findStudent("ferhat"));

//*******************************************/
// //*? FOREACH
// const prices = [250, 150, 300, 500];

// //* Klasik For ile
// for (let i = 0; i < prices.length; i++) {
//     console.log(prices[i]);
// }

// console.log("**********");

// //* Foreach ile
// prices.forEach((p) => console.log(p));

// console.log("**********");

// // indis
// prices.forEach((p, i) => console.log("DEGER:", p, "INDIS", i));

// console.log("**********");

// //* ÖRNEK

// let sum = 0;
// prices.forEach((price) => (sum += price))
// console.log(sum);

// //Foreach methodu void methodtur. herhangi bir değer döndürmez.
// console.log(prices.forEach((price) => price*2));

// // döndermiyor sadece consolda yazdırıyor
// prices.forEach((price) => console.log(price*2))

//*******************************************/
//*? MAP

// let names = ["Mustafa", "Murat", "Ahmet", "Mustafa", "Ayşe" ];
// const upperNames = names.map(name=> name.toUpperCase())
// console.log(names);
// console.log(upperNames);


// //*******************************************/
// //*? FILTER

// const salaries = [5500, 8000, 6500, 9000, 10000, 15000, 25000];
// const biggerThan = salaries.filter((salary) => salary>=10000)
// console.log(biggerThan);
// console.log(salaries);

// //* PIPELINE - CHAINING
// // Maaşı 9000 den az olanlara %10 zam yaparak yeni dizi oluşturma
// const range = salaries.filter((salary) => salary>=10000)
// console.log(range);
// const biggerThan9000 = salaries.filter((s) => s <9000).map((s) => Number((s*1.1).toFixed(2)));
// console.log(biggerThan9000);