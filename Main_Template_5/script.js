document.addEventListener('DOMContentLoaded', function() {
    var personal_details = JSON.parse(localStorage.getItem('personal_details'));
    var education_details = JSON.parse(localStorage.getItem('education_details'));
    var internship_details = JSON.parse(localStorage.getItem('internships'));
    var skills = JSON.parse(localStorage.getItem('skills'));
    var projects = JSON.parse(localStorage.getItem('projects'));
    var languages = JSON.parse(localStorage.getItem('languages'));
    var certifications = JSON.parse(localStorage.getItem('certifications'));
    var hobbies = JSON.parse(localStorage.getItem('hobbies'));

    //Personal Details
    var name = document.getElementById('name');
    name.innerHTML = personal_details[0];

    var email = document.getElementById('email');
    email.innerHTML = personal_details[1];

    var phone = document.getElementById('phone');
    phone.innerHTML = personal_details[2];

    var address = document.getElementById('address');
    address.innerHTML = personal_details[3];


    // // Education Details 1
    var education_institue1 = document.getElementById('education_institute1');
    education_institue1.innerHTML = education_details[0][0];

    var education_location1 = document.getElementById('education_location1');
    education_location1.innerHTML = education_details[0][1];

    var education_cgpa1 = document.getElementById('education_cgpa1');
    education_cgpa1.innerHTML = education_details[0][2];

    var education_degree1 = document.getElementById('education_degree1');
    education_degree1.innerHTML = education_details[0][3];

    var start_year1 = document.getElementById('start_year1');
    start_year1.innerHTML = education_details[0][4];
    console.log(education_details[0][4]);

    var end_year1 = document.getElementById('end_year1');
    end_year1.innerHTML = education_details[0][5];


    // Education Details 2
    var education_institue2 = document.getElementById('education_institute2');
    education_institue2.innerHTML = education_details[1][0];

    var education_location2 = document.getElementById('education_location2');
    education_location2.innerHTML = education_details[1][1];

    var education_cgpa2 = document.getElementById('education_cgpa2');
    education_cgpa2.innerHTML = education_details[1][2];

    var education_degree2 = document.getElementById('education_degree2');
    education_degree2.innerHTML = education_details[1][3];

    var start_year2 = document.getElementById('start_year2');
    start_year2.innerHTML = education_details[1][4];

    var end_year2 = document.getElementById('end_year2');
    end_year2.innerHTML = education_details[1][5];


    var education_institue3 = document.getElementById('education_institute3');
    education_institue3.innerHTML = education_details[2][0];

    var education_location3 = document.getElementById('education_location3');
    education_location3.innerHTML = education_details[2][1];

    var education_cgpa3 = document.getElementById('education_cgpa3');
    education_cgpa3.innerHTML = education_details[2][2];

    var education_degree3 = document.getElementById('education_degree3');
    education_degree3.innerHTML = education_details[2][3];

    var start_year3 = document.getElementById('start_year3');
    start_year3.innerHTML = education_details[2][4];

    var end_year3 = document.getElementById('end_year3');
    end_year3.innerHTML = education_details[2][5];


    // Internship Details
    var internship_title1 = document.getElementById('internship_title1');
    internship_title1.innerHTML = internship_details[0][0];

    var intership_startyear1 = document.getElementById('intership_startyear1');
    intership_startyear1.innerHTML = internship_details[0][1];

    var intership_endyear1 = document.getElementById('intership_endyear1');
    intership_endyear1.innerHTML = internship_details[0][2];

    var internship_title2 = document.getElementById('internship_title2');
    internship_title2.innerHTML = internship_details[1][0];

    var intership_startyear2 = document.getElementById('intership_startyear2');
    intership_startyear2.innerHTML = internship_details[1][1];

    var intership_endyear2 = document.getElementById('intership_endyear2');
    intership_endyear2.innerHTML = internship_details[1][2];

});


document.getElementById('download').addEventListener('click', () => {
    const element = document.querySelector('.resume');
    html2pdf().from(element).save('MainResume_5.pdf');
});