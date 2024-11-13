// This function is to show hello world


/*\
 1, dfdff
 3 dfd
4. multiline comments

*/
//dfdfd


// document.getElementById("blue_box").innerHTML = " This is our new text";


// variables

// var dateOfBirth = " date of birth 1990";

// alert(dateOfBirth);


// var name = 123;
// var newNname = Number(name);
// var updateNumber = (name == 123);
// console.log(updateNumber);




// console.log(typeof name);


// var firstName = "Md Rafiqul";
// var lastName = "Sordar";



// console.log(firstName + " " + lastName + " something");


// Function or method er First Bracket er modde Ja Thakbe seta perameter

// var fullName = "Md Rafiqul Islam";

// console.log(fullName.replace("Rafiqul","Shafiqul"));

// var count = 6;

// var randomNumber = Math.random();

// console.log("random number " + randomNumber);

// var fixedNumber = randomNumber.toFixed(2);

// console.log("this is new number " + fixedNumber);

// var count = 6;

// count /= 4;

// console.log(count);



// count variable er man = "40.05";
// count2 er man = "20";

// result should be 60.05


// var orderValue = 2800;

// if (orderValue >= 1000) {
//     console.log("You are eligible to finance your order.");
// } else {
//     console.log("Finance options are not available for orders below US$1000");
// }


// birthday = "your birthday (like 1st october)";
// currentDate = "21st october";


// result should be "Happy Birthday" or "Sorry, today is not your birthday"




// document.getElementById("click-me").onclick = function () {


//     var firstName = "Md Rafiqul";

//     alert("firstName");
// };

// document.getElementById("hover-me").onmouseover = function () {

//     alert("you hovered");
// }
// document.getElementById("leave-me").onmouseout = function () {

//     alert("you hovered");
// }


// function ShowMe() {
//     alert("Hello World");
// }




// id,className, TagName, 


// var button = document.getElementById("color_button");


// button.onclick = function () {
//     // document.getElementsByClassName("box2").style.display = "block";

//     document.getElementById("box2").style.display = "block";

// }
// var elements = document.getElementsByClassName("example");


// elements[1].innerHTML = "This is our new text";





var clickButton = document.getElementById("color_button");
var showButton = document.getElementById("hide");

clickButton.onclick = function () {
    document.getElementById('box2').classList.toggle("show")
    showButton.classList.toggle("show")
}

showButton.onclick = function () {
    document.getElementById("box2").classList.toggle("show")

}
