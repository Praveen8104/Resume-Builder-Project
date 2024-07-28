function moveNext()
{
    i++;
    console.log(i);
    if(i < template1.length)
    {
        continueButtonAddress.style.display = "none";
        previousButtonAddress.style.display = "none";
        promptAddress.innerHTML = "";
        new TypeIt("#prompt", {
            strings: template1[i],
            speed: 20,
            cursor: false,
            afterComplete: function(instance){
                if(i < template1.length)
                continueButtonAddress.style.display = "block";
                if(i > 0)
                previousButtonAddress.style.display = "block";
            }
        }).go();
        inputFieldAddress.value = res[i];
    }
    if(i == template1.length)
    {
        continueButtonAddress.style.display = "none";
        createForm();
    }
    if(i > -1)
    {
        inputFieldAddress.style.display = "block";
    }
}
function moveBack(){
    i--;
    if(i >= 0)
    {
        previousButtonAddress.style.display = "none";
        continueButtonAddress.style.display = "none";
        promptAddress.innerHTML = "";
        new TypeIt("#prompt", {
            strings: template1[i],
            speed: 20,
            cursor: false,
            afterComplete: function(instance){
                if(i < template1.length - 1)
                continueButtonAddress.style.display = "block";
                if(i > 0)
                previousButtonAddress.style.display = "block";
            }
        }).go();
        inputFieldAddress.value = res[i];
    }
    if(i > -1)
    {
        inputFieldAddress.style.display = "block";
    }
}

const createForm = () => {
    let formContainer = document.getElementById('form');
    formContainer.innerHTML = '';
    formContainer.style.display = "block";
    innerAddress.style.display = "none";
    for (let j = 0; j < template1.length; j++) {
        let label = document.createElement('label');
        label.innerHTML = template1[j];
        label.setAttribute('for', 'input' + j);
        formContainer.appendChild(label);
        let input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('id', 'input' + j);
        input.setAttribute('name', 'input' + j);
        input.value = res[j];
        input.addEventListener('input', function(event) {
            res[j] = event.target.value;
        });

        formContainer.appendChild(input);
        formContainer.appendChild(document.createElement('br'));

    }
    let submitButton = document.createElement('button');
    submitButton.innerHTML = 'Submit';
    let anchor = document.createElement('a')
    anchor.setAttribute('href','template1.html');
    anchor.innerHTML = 'Open';
    submitButton.addEventListener('click', function (event) {
        event.preventDefault();
        localStorage.setItem('formData', JSON.stringify(res));
    });
    formContainer.appendChild(anchor);
    formContainer.appendChild(submitButton);

    
}    



9










function storeData(event)
{
    res[i] = event.target.value;
}
// promptAddress.innerHTML = "";
new TypeIt("#prompt", {
    strings: "Welcome to Resume Builder!!!",
    speed: 20,
    cursor: false,
    afterComplete : function(instance){
        continueButtonAddress.style.display = "block";
    }
}).go();








var i = -1;
var template1 = ["Enter your name ? "," Enter your github link :"];
    // , "Enter your LinkedIn profile link :"," Enter your Email :","Enter your phone number ?","Enter your university name?","Enter the branch you have pursued ?", "Enter number of internships?","Enter your Project1","Enter your Mentor name for project1 ?","StartDate of your Project1","EndDate of your Project1","Enter your project1 description","Location of your Project1","Enter your Project1 Github link","Enter your Mentor name for project2 ?","StartDate of your Project2","EndDate of your Project2","Enter your project2 description","Location of your Project2","Enter your Project2 Github link","Enter your Mentor name for project3 ?","StartDate of your Project3","EndDate of your Project3","Enter your project3 description","Location of your Project3","Enter your Project3 Github link","Enter number of Achievements:","Enter the number of Programming languages:","Enter the number of Web technologies:","Enter the number of AI/ML tools:", "Enter the other Developer tools:"];
var res = Array(template1.length).fill("");
var innerAddress = document.getElementById("inner")
var previousButtonAddress = document.getElementById("previous");
var continueButtonAddress = document.getElementById("continue");
var promptAddress = document.getElementById("prompt");
var inputFieldAddress = document.getElementById("inputField");
// var bodyAddress = document.getElementsByTagName("body")[0];


