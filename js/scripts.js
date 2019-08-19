//addition function
// var add = function(number1, number2) {
//   return number1 + number2;
// };

// var number1 = parseInt(prompt("Enter a number:"));
// var number2 = parseInt(prompt("Enter another number:"));
// var result = add(number1, number2);
// alert(result);

//Body Mass Index calculation(BMI) 
const bmi =(weight, height)=>{
  return weight/ (height)^2;
};
var weight = parseInt(prompt("Enter Your Weight in Kilograms here:"));
var height = parseInt(prompt("Enter Your Height in meters here:"));
var result = bmi(weight, height);
alert("Your Body Mass Index is "+result+"Kg/m^2");
