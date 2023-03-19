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
  alert("A");
 } else if (value >= 60 && value <= 79) {
  alert("B");
 } else if (value >= 49 && value <= 59) {
  alert("C");
 } else if (value >= 40 && value <= 49) {
  alert("D");
 } else if (value < 40 && value > 0) {
  alert("E");
 } else {
  alert("Please provide correct input");
 }
});

speedSubmit.addEventListener('click', function (e) {
  e.preventDefault();
 const value = speedInput.value;
 if (value <= 70) {
  alert("ok");
 } else {
   let extraspeed = value - 70;
   let points = extraspeed / 5;
   if (points > 12) {
    alert("License suspended");
   } else {
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

