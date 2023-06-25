// //* concat(): İki veya daha fazla diziyi birleştirir ve yeni bir dizi oluşturur.
// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const newArray = array1.concat(array2);
// console.log(newArray); 

// //* every(): Dizideki tüm elemanlar belirli bir koşulu sağladığında true, aksi halde false döndürür.
// const array = [1, 2, 3, 4, 5];
// const allEven = array.every((num) => num % 2 === 0);
// console.log(allEven); 

// //* find(): Belirli bir koşulu sağlayan dizinin ilk elemanını döndürür.
// const array = [1, 2, 3, 4, 5];
// const found = array.find((num) => num > 3);
// console.log(found);

// //* findIndex(): Belirli bir koşulu sağlayan dizinin ilk elemanının indeksini döndürür.
// const array = [1, 2, 3, 4, 5];
// const foundIndex = array.findIndex((num) => num > 3);
// console.log(foundIndex);

// //* includes(): Belirli bir değerin dizide var olup olmadığını kontrol eder.
// const array = [1, 2, 3, 4, 5];
// const includesThree = array.includes(3);
// console.log(includesThree); 

// //* indexOf(): Belirli bir değerin dizideki ilk indeksini döndürür. Eğer değer bulunmazsa -1 döndürür.
// const array = [1, 2, 3, 4, 5];
// const index = array.indexOf(3);
// console.log(index); 

// //* lastIndexOf(): Belirli bir değerin dizideki son indeksini döndürür. Eğer değer bulunmazsa -1 döndürür.
// const array = [1, 2, 3, 4, 5, 3];
// const lastIndex = array.lastIndexOf(3);
// console.log(lastIndex); 

// //* pop(): Dizinin son elemanını çıkarır ve çıkarılan elemanı döndürür.
// const array = [1, 2, 3];
// const popped = array.pop();
// console.log(popped); 
// console.log(array);

// //* push(): Dizinin sonuna bir veya daha fazla eleman ekler ve yeni uzunluğunu döndürür.
// const array = [1, 2, 3];
// const newLength = array.push(4, 5);
// console.log(newLength); 
// console.log(array);

// //* shift(): Dizinin ilk elemanını çıkarır ve çıkarılan elemanı döndürür.
// const array = [1, 2, 3];
// const shifted = array.shift();
// console.log(shifted); 
// console.log(array); 

// //* unshift(): Dizinin başına bir veya daha fazla eleman ekler ve yeni uzunluğunu döndürür.
// const array = [1, 2, 3];
// const newLength = array.unshift(0);
// console.log(newLength); 
// console.log(array); 

// //* toString(): Dizinin elemanlarını birleştirerek bir dize olarak döndürür.
// const array = [1, 2, 3];
// const string = array.toString();
// console.log(string); 

// //* join(): Dizinin elemanlarını birleştirerek bir dize oluşturur.
// const array = [1, 2, 3];
// const joined = array.join('-');
// console.log(joined);

// //* slice(): Belirtilen başlangıç ve bitiş indeksleri arasındaki elemanları yeni bir dizi olarak döndürür.
// const array = [1, 2, 3, 4, 5];
// const sliced = array.slice(1, 3);
// console.log(sliced);

// //* sort(): Diziyi sıralar.
// const array = [3, 1, 4, 2, 5];
// array.sort();
// console.log(array); 

// //* reverse(): Dizinin elemanlarını tersine çevirir.
// const array = [1, 2, 3];
// array.reverse();
// console.log(array); 

//********************************/

//? Örnek 1 => Array içerisindeki numaraları toplama
// const numbers = [1, 2, 3, 4, 5, 6, 7];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i]
// }
// console.log(sum);


//? Örnek 2 => Array içerisindeki sayıları önce küçükten büyüğe, sonra tersten yazalım.
// const numbers = [2, 1, 3, 4, 5];

// const reversedNumber = numbers.sort().reverse()
// console.log(reversedNumber);

//? Örnek 3 => pop push shift unshift ile ilk elemanı sona, son elemanı başa yazdırınız.

// const fruits = ["Apple", "Orange", "Banana"];
// const banana = fruits.pop()
//     console.log(fruits);
// const apple = fruits.shift();
//     console.log(fruits);
// fruits.unshift(banana);
//     console.log(fruits);
// fruits.push(apple)
//     console.log(fruits);

//? Örnek 4 => sayıları küçükten büyüğe doğru sıralayınız
//     let numbers = [5, 3, 1, 4, 22];
// numbers.sort((a, b) => a - b);
// console.log(numbers); 



//? Örnek 5 => iki farklı stringden slice methodu ile kelimeleri seçip ayrı bir string oluşturunuz 
// let string1 = "Hello World!";
// let string2 = "How are you friend";

// let sliced1 = string1.slice(0, 6); 
// let sliced2 = string2.slice(12);

// let result = sliced1 + sliced2;

// console.log(result);