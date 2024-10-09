// Task 1 age check

var TakingAge = +prompt("Enter Your Age")

if (TakingAge >= 18) {
    alert("You are an adult.")
}
else if(TakingAge > 13 && TakingAge < 18){
    alert("You are a teenager.")
}
else{
    alert("You are a child.")
}

// Task 2 Weather Advice

var WeatherInput = prompt("Type Weather according to this. \n 1)Sunny\n 2)Rainy \n 3)Snowy")

if (WeatherInput == "sunny") {
    alert("Wear sunglasses!")
}
else if (WeatherInput == "rainy") {
    alert("Take an umbrella.")
}
else if (WeatherInput == "snowy") {
    alert("Wear warm clothes.")
}
else{
    alert("Enjoy your day!")
}

// Task 3 Grade Determination

var InputMarks = +prompt("Enter your Marks")

if (InputMarks >= 90) {
    alert("You got Grade A")
}
else if (InputMarks >= 80 && InputMarks <= 89) {
    alert("You got Grade B")
}
else if (InputMarks >= 70 && InputMarks <= 79) {
    alert("You got Grade C")
}
else if (InputMarks >= 60 && InputMarks <= 69) {
    alert("You got Grade D")
}
else{
    alert("You got Grade F Better luck next time")
}

// Task 4 Simple Login System

var LoginUsername = prompt("Type Username. admin")
var LoginPassword = prompt("Type Password. 1234")

if (LoginUsername == "admin" && LoginPassword == "1234") {
    alert("Login successful!")
}
else{
    alert("Login failed. Try again.")
}

// Task 5 Number Range Checker

var NumberInput = prompt("Type number")

if (NumberInput >= 1 && NumberInput <= 10) {
    alert("The number is between 1 and 10.")
}
else if (NumberInput >= 11 && NumberInput <= 20) {
    alert("The number is between 11 and 20.")
}
else if (NumberInput >= 21 && NumberInput <= 30) {
    alert("The number is between 21 and 30.")   
}
else if (NumberInput >= 31 && NumberInput <= 40) {
    alert("The number is between 31 and 40.")
}
else if (NumberInput >= 41 && NumberInput <= 50) {
    alert("The number is between 41 and 50.")
}
else if (NumberInput >= 51 && NumberInput <= 60) {
    alert("The number is between 51 and 60.")
}
else if (NumberInput >= 61 && NumberInput <= 70) {
    alert("The number is between 61 and 70.")
}
else if (NumberInput >= 71 && NumberInput <= 80) {
    alert("The number is between 71 and 80.")
}
else if (NumberInput >= 81 && NumberInput <= 90) {
    alert("The number is between 81 and 90.")
}
else if (NumberInput >= 91 && NumberInput <= 100) {
    alert("The number is between 91 and 100.")
}
else{
    alert("The number is out of range.")
}