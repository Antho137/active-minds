"use strict";

let validity = true;

// function that validate a user name from the user input
function validateFullName() {
	let fullName = document.getElementById("fname");
	let fullNameErr = document.getElementById("fnameError");
	
	try {
        if (/^[A-Za-z]{4,}(?: [A-Za-z]+){0,2}$/.test(fullName.value) === false) {
            throw "Please, enter a valid name!";
        }
	}
	catch(msg) {
        // display error message
		fullNameErr.style.display = "block";
		fullNameErr.style.color = "rgb(255,33,33)";
        fullNameErr.innerHTML = msg;
	    validity = false;
	}	
}

// function that validate a user email from the user input
function validateEmail() {
	let email = document.getElementById("email");
	let emailErr = document.getElementById("emailError");
	try {
	    if (/^[_\w\-]+(\.[_\w\-]+)*@[\w\-]+(\.[\w\-]+)*(\.[\D]{2,6})$/.test(email.value) === false) {
            throw "Please, enter a valid email.";
        }
	}
	catch(msg) {
        // display error message
		emailErr.style.display = "block";
		emailErr.style.color = "rgb(255,33,33)";
        emailErr.innerHTML = msg;
	    validity = false;
	}
}

/* validate form */
function validateForm(evt) {
    if (evt.preventDefault) {
       evt.preventDefault(); // prevent form from submitting
    } else {
       evt.returnValue = false; // prevent form from submitting in IE8
    }

    validateFullName();
	validateEmail(); 
	if (validity === true) {
		let fullName = document.getElementById("fname").value;
	    let email = document.getElementById("email").value;
        alert("Thanks for signing up for our newsletter. \nYou submitted: \nFull Name: " + fullName + "\n" + "Email Address: " + email + "\n");
	} 
}

// function that empty the form
function resetForm() {
	document.getElementById("fname").value = "";
	document.getElementById("email").value = "";
	document.getElementById("fnameError").innerHTML = "";
	document.getElementById("emailError").innerHTML = "";
}

// function that create an event from the user 
function createEventListeners() {
	if (validity === true) {
		document.getElementById("submit").addEventListener("click", validateForm, false);
    }
	document.getElementById("reset").addEventListener("click", resetForm, false);	
}

window.addEventListener("load", createEventListeners, false);

let nav = document.getElementById("navbar");
let links = nav.getElementsByClassName("nav-item");
for (let i = 0; i < links.length; i++) {
	links[i].addEventListener("click", function() {
		let current = document.getElementsByClassName("active");
		current[0].className = current[0].className.replace("active", "");
        this.className += " active";
	});
}