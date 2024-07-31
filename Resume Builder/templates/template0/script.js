document.addEventListener('DOMContentLoaded', function() {
    var personal_details = JSON.parse(localStorage.getItem('personal_details'));
    var CareerObjectives = JSON.parse(localStorage.getItem('CareerObjectives'));
    var education_details = JSON.parse(localStorage.getItem('education_details'));
    var internship_details = JSON.parse(localStorage.getItem('internships'));
    var skills = JSON.parse(localStorage.getItem('skills'));
    var profiles = JSON.parse(localStorage.getItem('profiles'));
    var projects = JSON.parse(localStorage.getItem('projects'));
    var achievements = JSON.parse(localStorage.getItem('achievements'));
    var hobbies = JSON.parse(localStorage.getItem('hobbies'));
    var languages = JSON.parse(localStorage.getItem('languages'));
    console.log(personal_details);
    console.log(education_details);
    //Personal Details
    var name = document.getElementById('name');
    name.innerHTML = personal_details[0];
    var email = document.getElementById('email');
    email.innerHTML = personal_details[1];
    var phone = document.getElementById('phone');
    phone.innerHTML = personal_details[2];
    var address = document.getElementById('address');
    address.innerHTML = personal_details[3];

    //Education Details
    var institute1 = document.getElementById('institute1');
    institute1.innerHTML = education_details[0][0];
    var location1 = document.getElementById('location1');
    location1.innerHTML = education_details[0][1];
    var cgpa1 = document.getElementById('cgpa1');
    cgpa1.innerHTML = education_details[0][2]
    var degree1 = document.getElementById('degree1');
    degree1.innerHTML = education_details[0][3];
    var startYear1 = document.getElementById('startYear1');
    startYear1.innerHTML = education_details[0][4];
    var endYear1 = document.getElementById('endYear1');
    endYear1.innerHTML = education_details[0][5];

    var institute2 = document.getElementById('institute2');
    institute2.innerHTML = education_details[1][0];
    var location2 = document.getElementById('location2');
    location2.innerHTML = education_details[1][1];
    var cgpa2 = document.getElementById('cgpa2');
    cgpa2.innerHTML = education_details[1][2]
    var degree2 = document.getElementById('degree2');
    degree2.innerHTML = education_details[1][3];
    var startYear2 = document.getElementById('startYear2');
    startYear2.innerHTML = education_details[1][4];
    var endYear2 = document.getElementById('endYear2');
    endYear2.innerHTML = education_details[1][5];

    var institute3 = document.getElementById('institute3');
    institute3.innerHTML = education_details[2][0];
    var location3 = document.getElementById('location3');
    location3.innerHTML = education_details[2][1];
    var cgpa3 = document.getElementById('cgpa3');
    cgpa3.innerHTML = education_details[2][2]
    var degree3 = document.getElementById('degree3');
    degree3.innerHTML = education_details[2][3];
    var startYear3 = document.getElementById('startYear3');
    startYear3.innerHTML = education_details[2][4];
    var endYear3 = document.getElementById('endYear3');
    endYear3.innerHTML = education_details[2][5];

    //Internship Details
    var internshipName1 = document.getElementById('internshipName1');
    internshipName1.innerHTML = internship_details[0][0];
    var internshipStartYear1 = document.getElementById('internshipStartYear1');
    internshipStartYear1.innerHTML = internship_details[0][1];
    var internshipEndYear1 = document.getElementById('internshipEndYear1');
    internshipEndYear1.innerHTML = internship_details[0][2];
    var internshipRole1 = document.getElementById('internshipRole1');
    internshipRole1.innerHTML = internship_details[0][3];
    var internshipDesc1 = document.getElementById('internshipDesc1');
    internshipDesc1.innerHTML = internship_details[0][4];

    var internshipName2 = document.getElementById('internshipName2');
    internshipName2.innerHTML = internship_details[1][0];
    var internshipStartYear2 = document.getElementById('internshipStartYear2');
    internshipStartYear2.innerHTML = internship_details[1][1];
    var internshipEndYear2 = document.getElementById('internshipEndYear2');
    internshipEndYear2.innerHTML = internship_details[1][2];
    var internshipRole2 = document.getElementById('internshipRole2');
    internshipRole2.innerHTML = internship_details[1][3];
    var internshipDesc2 = document.getElementById('internshipDesc2');
    internshipDesc2.innerHTML = internship_details[1][4];

    //Skills
    var skill1 = document.getElementById('skill1');
    skill1.innerHTML = skills[0];
    var skill2 = document.getElementById('skill2');
    skill2.innerHTML = skills[1];
    var skill3 = document.getElementById('skill3');
    skill3.innerHTML = skills[2];
    var skill4 = document.getElementById('skill4');
    skill4.innerHTML = skills[3];
    var skill5 = document.getElementById('skill5');
    skill5.innerHTML = skills[4];
    var skill6 = document.getElementById('skill6');
    skill6.innerHTML = skills[5];

    //Profiles

    var profile1 = document.getElementById('profile1');
    profile1.href = profiles[0];
    var profile2 = document.getElementById('profile2');
    profile2.href = profiles[1];
    var profile3 = document.getElementById('profile3');
    profile3.href = profiles[2];
    var profile4 = document.getElementById('profile4');
    profile4.href = profiles[3];
    var profile5 = document.getElementById('profile5');
    profile5.href = profiles[4];
    var profile6 = document.getElementById('profile6');
    profile6.href = profiles[5];

    //Projects
    
    var projectName1 = document.getElementById('projectName1');
    projectName1.innerHTML = projects[0][0];
    var projectStartYear1 = document.getElementById('projectStartYear1');
    projectStartYear1.innerHTML = projects[0][1];
    var projectEndYear1 = document.getElementById('projectEndYear1');
    projectEndYear1.innerHTML = projects[0][2];
    var projectRole1 = document.getElementById('projectRole1');
    projectRole1.innerHTML = projects[0][3];
    var projectDesc1 = document.getElementById('projectDesc1');
    projectDesc1.innerHTML = projects[0][4];

    var projectName2 = document.getElementById('projectName2');
    projectName2.innerHTML = projects[1][0];
    var projectStartYear2 = document.getElementById('projectStartYear2');
    projectStartYear2.innerHTML = projects[1][1];
    var projectEndYear2 = document.getElementById('projectEndYear2');
    projectEndYear2.innerHTML = projects[1][2];
    var projectRole2 = document.getElementById('projectRole2');
    projectRole2.innerHTML = projects[1][3];
    var projectDesc2 = document.getElementById('projectDesc2');
    projectDesc2.innerHTML = projects[1][4];

    //Achievements
    var badge1 = document.getElementById('badge1');
    badge1.innerHTML = achievements[0][0];
    var badge2 = document.getElementById('badge2');
    badge2.innerHTML = achievements[0][1];
    var badge3 = document.getElementById('badge3');
    badge3.innerHTML = achievements[0][2];

    var achievement1 = document.getElementById('achievement1');
    achievement1.innerHTML = achievements[1][0];
    var achievement2 = document.getElementById('achievement2');
    achievement2.innerHTML = achievements[1][1];
    var achievement3 = document.getElementById('achievement3');
    achievement3.innerHTML = achievements[1][2];
    
    var hackathon1 = document.getElementById('hackathon1');
    hackathon1.innerHTML = achievements[2][0];
    var hackathon2 = document.getElementById('hackathon2');
    hackathon2.innerHTML = achievements[2][1];
    var hackathon3 = document.getElementById('hackathon3');
    hackathon3.innerHTML = achievements[2][2];

    //Hobbies
    var hobby1 = document.getElementById('hobby1');
    hobby1.innerHTML = hobbies[0];
    var hobby2 = document.getElementById('hobby2');
    hobby2.innerHTML = hobbies[1];
    var hobby3 = document.getElementById('hobby3');
    hobby3.innerHTML = hobbies[2];

    //Languages
    var language1 = document.getElementById('language1');
    language1.innerHTML = languages[0];
    var language2 = document.getElementById('language2');
    language2.innerHTML = languages[1];
    var language3 = document.getElementById('language3');
    language3.innerHTML = languages[2];

});


document.getElementById('download').addEventListener('click', () => {
    const element = document.querySelector('.resumeBody');
    html2pdf().from(element).save('New Aditya.pdf');
});

function choose(){
    window.location.href = "../../chooseTemplates/Templates.html";
}
