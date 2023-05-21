console.log("Hello World");
// //? Örnek 1 => Sayının Pozitif veya Negatif olduğunu bulma

// let number = 1;
// if (number>1) {
//     console.log("Positive");
// }else if (number<0) {
//     console.log("Negative");
// }else{
//     console.log("Zero");
// }


// //? Örnek 2 => Sayının tek mi çift mi olduğunu bulma

// let number = 2
// if (number%2==0) {
//     console.log("Even");
// }else{
//     console.log("Odd");
// }

// //? Örnek 3 => Haftanın gününü yazdırma
// // Which day of the week? Haftanın kaçıncı günü

// let number = 2
// if (number==1) {
//     console.log("Monday");
// }else if (number==2) {
//     console.log("Tuesday");
// }else if (number==3) {
//     console.log("Wednesday");
// }else if (number==4) {
//     console.log("Thursday");
// }else if (number==5) {
//     console.log("Friday");
// }else if (number==6) {
//     console.log("Saturday");
// }else if (number==7) {
//     console.log("Sunday");
// }else{
//     console.log("Wrong number");
// }


// //? Örnek 4 => Ehliyet alabiliyor mu

// let age = 17;
// let canDrive = true;

// if (age>=18 && canDrive == true) {
//     console.log("get a license");
// }else if (age>=18 && canDrive == false) {
//     console.log("You have to learn to drive");
// }else if (age<18 && canDrive == true) {
//     console.log("You are to young");
// }else{
//     console.log(" :) :) :) ");
// }


// //? Örnek 5 => Kullanıcı id ve şifre

// let realId = 123123;
// let realPassword = 123123;

// let id = 123;
// let password = 123;

// if (realId==realPassword && realPassword == password) {
//     console.log("Login succesfull");
// }else {
//     console.log("Login failed");
// }

// //? 2. örnek. iç içe if else işlem

// let realId = 123123;
// let realPassword = 123123;

// let id = +prompt("Please enter your ID")
// let password;
// if (realId ==id) {
//     password = +prompt("Please enter your password")
//     if (realPassword==password) {
//         console.log("Login succesfull");
//     }else{
//         console.log("Password is wrong");
//     }
// }else{
//     console.log("Wrong ID");
// }


// //? Örnek 6 => Hesap Makinesi

// console.log("Welcome to calculator");
// let number1 = +prompt("Please enter your first number");
// let number2 = +prompt("Please enter your second number");

// let calculate = +prompt("Please enter your operation \nPress 1 to add \nPress 2 to substraction \nPress 3 to multiplication \nPress 3 to division")
// if(calculate == 1){
//     console.log(number1 + number2);
// }else if(calculate == 2){
//     console.log(number1 - number2);
// }else if(calculate == 3){
//     console.log(number1 * number2);
// }else if(calculate == 4){
//     console.log(number1 / number2);
// }else{
//     console.log("Wrong operation");
// }   


// //? Örnek 6 => Switch case ile not yazdırma

// let day = 3;
// let dayName;

// switch (day) {
//   case 1:
//     dayName = 'Sunday';
//     break;
//   case 2:
//     dayName = 'Monday';
//     break;
//   case 3:
//     dayName = 'Tuesday';
//     break;
//   case 4:
//     dayName = 'Wednesday';
//     break;
//   case 5:
//     dayName = 'Thursday';
//     break;
//   case 6:
//     dayName = 'Friday';
//     break;
//   case 7:
//     dayName = 'Saturday';
//     break;
//   default:
//     dayName = 'Wrond number';
// }

// console.log(dayName); // Tuesday

