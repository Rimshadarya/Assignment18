// chapter31 to 34

// Question1

// var date = new Date();

// document.write(date);

// Question2

// function alertCurrentMonth() {
//     const date = new Date();
    
//     const monthNames = [
//         "January", "February", "March", "April", "May", "June",
//         "July", "August", "September", "October", "November", "December"
//     ];
    
//     const currentMonthIndex = date.getMonth();

//     alert(`Current month is: ${monthNames[currentMonthIndex]}`);
// }

// alertCurrentMonth();

// Question3

// function alertCurrentDayAbbreviation() {
//     const date = new Date();

//     const dayNames = [
//         "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
//     ];

//     const currentDayIndex = date.getDay();
    
//     alert(`Current day is: ${dayNames[currentDayIndex]}`);
// }

// alertCurrentDayAbbreviation();

// Question4

// function checkFunDay() {

//     const date = new Date();
    
//     const currentDayIndex = date.getDay();
    
//     if (currentDayIndex === 0 || currentDayIndex === 6) {
//         console.log("It's Fun day");
//     } else {
//         console.log("It's a regular day");
//     }
// }

// checkFunDay();

// Question5

// function checkDaysOfMonth() {

//     const date = new Date();

//     const currentDate = date.getDate();
 
//     if (currentDate < 16) {
//         console.log("First fifteen days of the month");
//     } else {
//         console.log("Last days of the month");
//     }
// }

// checkDaysOfMonth();

// Question6

// const currentDate = new Date();

// const millisecondsSinceEpoch = currentDate.getTime();

// let minutesSinceEpoch = millisecondsSinceEpoch / 60000;

// minutesSinceEpoch = Math.floor(minutesSinceEpoch);

// console.log(`Minutes since midnight, Jan. 1, 1970: ${minutesSinceEpoch}`);

// Question7

// function checkTimeOfDay() {
 
//     const date = new Date();
 
//     const currentHour = date.getHours();
 
//     if (currentHour < 12) {
//         alert("It's AM");
//     } else {
//         alert("It's PM");
//     }
// }

// checkTimeOfDay();

// Question8

// const laterDate = new Date(2020, 11, 31);

// console.log(laterDate);

// Question9

// function daysSinceRamadan() {
  
//     const ramadanStartDate = new Date(2015, 5, 18); 
    
//     const currentDate = new Date();

//     const differenceInMilliseconds = currentDate - ramadanStartDate;
  
//     const daysPassed = Math.floor(differenceInMilliseconds / 86400000);

//     alert(`${daysPassed} days have passed since 1st Ramadan,2015`);
// }

// daysSinceRamadan();

// Question10

// function secondsSinceReferenceDate() {

//     const referenceDate = new Date(2015, 5, 18);

//     const startOf2015 = new Date(2015, 0, 1); 

//     const differenceInMilliseconds = referenceDate - startOf2015;
  
//     const secondsElapsed = Math.floor(differenceInMilliseconds / 1000);
    
//     document.body.innerHTML = `Seconds elapsed between January 1, 2015, and June 18, 2015: ${secondsElapsed}`;
// }

// secondsSinceReferenceDate();

// Question11

// function updateDateAndDisplay() {
   
//     const currentDate = new Date();
 
//     const currentHours = currentDate.getHours();
//     console.log(`Current Hours: ${currentHours}`);

//     currentDate.setHours(currentHours + 1);
  
//     document.body.innerHTML = `Updated Date and Time (1 hour ahead): ${currentDate}`;
// }

// updateDateAndDisplay();

// Question12

// function showDate100YearsBack() {
 
//     const currentDate = new Date();
   
//     currentDate.setFullYear(currentDate.getFullYear() - 100);
   
//     alert(`Date 100 years back: ${currentDate}`);
// }

// showDate100YearsBack();

// Question13

// var userInput = prompt("ENTER YOUR YEAR")
// var date =new Date();
// var result = date.getFullYear()-(userInput);
// console.log(`Your age is`,result);
// console.log(`Your birth year is`,userInput);

// Question14

