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



