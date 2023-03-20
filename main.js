const gradeInput = document.getElementById('grade-generator');
const speedInput = document.getElementById('speed-detector');
const netInput = document.getElementById('net-salary');
const gradeSubmit = document.getElementById('grade-submit');
const speedSubmit = document.getElementById('speed-submit');
const netSubmit = document.getElementById('net-submit');

gradeSubmit.addEventListener('click', function (e) {
 e.preventDefault();
 const value = gradeInput.value;
 if (value > 79 && value <= 100) {
  //if marks are equal to 79 or greater 100, assign the grade A and return it .
  alert("A");
 } else if (value >= 60 && value <= 79) {
  //if marks are between 60 and 79, assign the grade B and return.
  alert("B");
 } else if (value >= 49 && value <= 59) {
  //if marks are between 49 and 59, assign the grade C and return.
  alert("C");
 } else if (value >= 40 && value <= 49) {
  //if marks are between 40 and 49, assign the grade D   and return.
  alert("D");
 } else if (value < 40 && value > 0) {
  //if marks are less than 40, assign the grade F and return.
  alert("E");
 } else {
  alert("Please provide correct input");
 }
});

speedSubmit.addEventListener('click', function (e) {
  e.preventDefault();
 const value = speedInput.value;
 if (value <= 70) {
  // the input value is equal or less than 70 it should return 70
  alert("ok");
 } else {
   let extraspeed = value - 70;
   let points = extraspeed / 5;
   if (points > 12) {
    //  and if the input value minus the the value divide by five to give out the points
    alert("License suspended");
   } else { 
    //  it should print out license sus
   alert(`pionts: ${points}`)
   }
 }
 });
 
 netSubmit.addEventListener('click', function (e) {
  e.preventDefault();
  const grossSalary = Number(netInput.value);
  let tax = 0;
  if (grossSalary > 0 && grossSalary <= 24000) {
   tax = grossSalary * 0.1;
   alert(`Net salary: ${tax}`)
  } else if (grossSalary >= 24001 && grossSalary <= 32333) {
   tax = grossSalary * 0.25;
   alert(`Net salary: ${tax}`)
  } else if (grossSalary > 32333) {
   tax = grossSalary * 0.3;
   alert(`Net salary: ${tax}`)
  }
 });

