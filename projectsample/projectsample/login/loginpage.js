function changeToAdmin() 
{
	formName.innerHTML = "Admin Login";
	email.placeholder = "Admin Id";
	password.placeholder = "Password";
	login.style.display = "block";
	forgetPassword.style.display = "none";
	signUpButton.style.display = "none";
	form.style.left = "3%";
	removeDynamicElements();
	login.onclick = null;
	login.onclick = function (event) 
	{
		let emailValue = email.value;
		let index = loginDetailsAdmin.indexOf(emailValue);
		if (index != -1) 
		{
			let passwordValue = password.value;
			if (passwordAdmin[index] == passwordValue) 
			{
				event.preventDefault();
				localStorage.setItem("loggedUser",JSON.stringify(email.value));
				window.location.href = "../home/homepage.html";
			} 
			else 
			{
				alert("Enter Valid Password");
			}
		}
		else 
		{
		alert("Please Enter Valid Details");
		}
	};
}
function changeToUser() 
{
	formName.innerHTML = "User Login";
	email.placeholder = "User Id";
	password.placeholder = "Password";
	login.style.display = "block";
	forgetPassword.style.display = "block";
	signUpButton.style.display = "block";
	form.style.left ="53%";
	removeDynamicElements();
	login.onclick = null;
	login.onclick = function (event) 
	{
		event.preventDefault();
		let index = loginDetailsUser.indexOf(email.value);
		if (index != -1) 
		{
			if (passwordUser[index] == password.value) 
			{
				localStorage.setItem("loggedUser",JSON.stringify(email.value));
				window.location.href = "../home/homepage.html";
			} 
			else 
			{
				alert("wrong password");
			}
		} 
		else 
		{
			alert("wrong username");
		}
	};
}
function changeToSignUp() {
	formName.innerHTML = "Signing Up";
	email.placeholder = "New User Id";
	newInput.setAttribute("class", "password");
	password.placeholder = "New Password";
	newInput.setAttribute("placeholder", "Confirm New Password");
	newInput.setAttribute("id","newPassword");
	newInput.type = "password";
	forgetPassword.style.display = "none";
	signUpButton.style.display = "none";
	login.style.display = "none";
	innerForm.appendChild(newInput);
	register.innerHTML = "Register";
	register.setAttribute("class", "login");
	innerForm.appendChild(register);
	noRegister.innerHTML = "Have an Account!!!";
	noRegister.setAttribute("class", "forget");
	noRegister.style.marginTop = "30px";
	innerForm.appendChild(noRegister);
	register.onclick = null;
	register.onclick = function(event)
	{
		event.preventDefault();
		if(loginDetailsUser.includes(email.value))
		{
			alert("User Already Exists");
		}
		else if(password.value == newInput.value && password.value != null){
			loginDetailsUser.push(email.value);
			passwordUser.push(password.value);
			localStorage.setItem("loginDetailsUser", JSON.stringify(loginDetailsUser));
			localStorage.setItem("passwordUser", JSON.stringify(passwordUser));
			changeToUser();
		}
		else{
			alert("Check the Password");
		}
	}
 }
function resetPassword() 
{
	email.placeholder = "Your Id";
	password.placeholder = "Update Password";
	login.style.display = "none";
	forgetPassword.style.display = "none";
	signUpButton.style.display = "none";
	update.innerHTML = "Update";
	update.setAttribute("class", "login");
	innerForm.appendChild(update);
	remember.innerHTML = "Remember Password!!!";
	remember.setAttribute("class", "forget");
	remember.style.marginTop = "30px";
	innerForm.appendChild(remember);
	update.onclick = null;
	update.onclick = function (event) 
	{
		event.preventDefault();
		let index = loginDetailsUser.indexOf(email.value);
		if (index != -1) 
		{
			passwordUser[index] = password.value;
			localStorage.setItem("passwordUser", JSON.stringify(passwordUser));
		} 
		else 
		{
			alert("wrong details");
		}
		changeToUser();
	};
}
function validate(event) 
{
	event.preventDefault();
	let index = loginDetailsUser.indexOf(email.value);
	if (index != -1) 
	{
		if (passwordUser[index] == password.value) 
		{
			localStorage.setItem("loggedUser",JSON.stringify(email.value));
			window.location.href = "../home/homepage.html";
		} 
		else 
		{
			alert("wrong password");
		}
	} 
	else 
	{
		alert("wrong username");
	}
}
function removeDynamicElements() 
{
	try { innerForm.removeChild(newInput); } catch {}
	try { innerForm.removeChild(register); } catch {}
	try { innerForm.removeChild(update); } catch {}
	try { innerForm.removeChild(remember); } catch {}
	try { innerForm.removeChild(noRegister); } catch {}
}
function media()
{
	let changeButton = document.getElementById("changeButton");
	if (changeButton.innerHTML == "Not an User") 
	{
		changeButton.innerHTML = "Not an Admin";
		changeToAdmin();
		form.style.left = "53%";
	} 
	else 
	{
		changeButton.innerHTML = "Not an User";
		changeToUser();
		form.style.left = "53%";
	}
}

var newInput = document.createElement("input");
var register = document.createElement("button");
var update = document.createElement("button");
var remember = document.createElement("button");
var noRegister = document.createElement("button");

var form = document.getElementById("form");
var formName = document.getElementById("formName");
var signUpButton = document.getElementById("signUpButton");
var password = document.getElementById("password");
var forgetPassword = document.getElementById("forget");
var innerForm = document.getElementById("innerForm");
var login = document.getElementById("login");
var email = document.getElementById("email");

var inputDetailsEmail = [];
var inputDetailsPassword = [];

var loginDetailsAdmin1 = [
  "22a91a61a2",
  "22a91a1275",
  "22a91a12a7",
  "23a95a6113",
  "22mh1a4220",
  "22p31a0402",
];
var passwordAdmin1 = [
  "22a91a61a2",
  "22a91a1275",
  "22a91a12a7",
  "23a95a6113",
  "22mh1a4220",
  "22p31a0402",
];
var loginDetailsUser1 = ["22a91a61a2"];
var passwordUser1 = ["22a91a61a2"];

if (localStorage.getItem("loginDetailsAdmin")) 
{
  	var loginDetailsAdmin = JSON.parse(localStorage.getItem("loginDetailsAdmin"));
} 
else 
{
  	localStorage.setItem("loginDetailsAdmin", JSON.stringify(loginDetailsAdmin1));
  	var loginDetailsAdmin = JSON.parse(localStorage.getItem("loginDetailsAdmin"));
}

if (localStorage.getItem("passwordAdmin")) 
{
  	var passwordAdmin = JSON.parse(localStorage.getItem("passwordAdmin"));
} 
else 
{
  	localStorage.setItem("passwordAdmin", JSON.stringify(passwordAdmin1));
  	var passwordAdmin = JSON.parse(localStorage.getItem("passwordAdmin"));
}

if (localStorage.getItem("loginDetailsUser")) 
{
  	var loginDetailsUser = JSON.parse(localStorage.getItem("loginDetailsUser"));
} 
else 
{
  	localStorage.setItem("loginDetailsUser", JSON.stringify(loginDetailsUser1));
  	var loginDetailsUser = JSON.parse(localStorage.getItem("loginDetailsUser"));
}
if (localStorage.getItem("passwordUser")) 
{
  	var passwordUser = JSON.parse(localStorage.getItem("passwordUser"));
} 
else 
{
  	localStorage.setItem("passwordUser", JSON.stringify(passwordUser1));
  	var passwordUser = JSON.parse(localStorage.getItem("passwordUser"));
}