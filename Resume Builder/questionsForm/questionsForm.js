let currentBox = 1;

var personal_details = ["", "", "", "", "", ""];
var skills = ["", "", "", "", "", ""];;
var education_details = [
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""]
];
var profiles = ["", "", "", "", "", ""];
var projects = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""]
];
var achievements = [
    ["", "", ""],
    ["", "", "", ""],
    [""]
];
var internships = [
    ["", "", "", "", ""],
    ["", "", "", "", ""]
];
var hobbies = ["Travellling","Lisenting Music","Watching Movies","Playing Sports"];
var languages = ["Telugu","English","Hindi"];

var CareerObjectives = [
    "A well organised and motivated employee capable of working under pressure and with excellent time management skills, seeking to join in this company as a communication Expert to help ensure good internal communications and seamless cliet interactions.",
    "Dedicated and goal-oriented proffessional with experience nurturing positive client relationships to drive key bussiness metrics, such as client satisfaction, Adept at streamlining processes, enhancing productivity, and developing customer service solutions.",
    "professional and passionate about the job and having the ability to launch sales programs that generate record-setting sales revenues, Looking to bring superior communication, analytical, and problem-solving skills to achieve sales targets at Branded products.",
    "Responsible and organised college student, with a demonstrated taklent for improving customer service. Seeking to apply my abilities and enthusiasm to a part-time role as a Customer Service Assistant at this company.",
    "Highly organised and wanted to be detail-oriented professional in administrative roles, seeking the position of an administrative officer.",
    "Well motivated and proficient in managing office opertions, streamlining processes, and maintaining office efficiency. Adept at coordinating meetings, managing inventory, and building relationships with staff and clients. Looking forward to bringing strong supervisory and organizational skills to a dynamic team while fostering a positive work environment.",
    "Seeking a challenging position in field where I can utilize my skills to contribute to the success of the company, To secure a role in a dynamic company that offers opportunities for professional growth and advancement.",
    "Detail-oriented individual seeking to help the company to achieve its goals as a best position, Excellent at skill and dedicated to delivering top-quality output.",
    "A competitive and challenging individual to develop the company growth and reputation, where I can serve your organization and establish a career for myself.",
    "Seeking a responsible job with an opportunity for professional challenges,To secure a challenging position that utilizes my skills and talents, while allowing me the opportunity to grow professionally.",
    "To join a company that offers me a stable and positive atmosphere and inspires me to enhance and therefore to innovate the work culture for the betterment of all parties concerned.",
    "Highly passionated and also to gain employment with a company or institution that offers me a consistently positive atmosphere to learn new technologies and implement them for the betterment of the business.",
    "To secure a position as a senior accountant in this company where I can utilize my talents and skills in accounting and finance to make a positive contribution to the organization.",
    "To obtain a position as a manager in this company that offers opportunities for career growth and development, And also seeking a challenging role as a manager in this company that values creativity and innovation.", 
    "Excellent communication, problem-solving, and organizational skills, Able to adapt quickly to new situations and learn new concepts quickly, And also seeking a challenging position in this company that values innovation, creativity, and hard work.",
    "Expertise in delivering complex, high-visibility projects. Able to establish strong working relationships with diverse teams and stakeholders. Looking for a challenging role that will utilize my skills and experience in project management.",
    "I am seeking a position that will allow me to use my skills and talents to positively impact the organization. In particular, I would like to work on projects that require me to use my machine learning and predictive modeling skills. I am confident that I can significantly contribute to the organization and help achieve its goals.",
    "To secure a position with a company where I can use my skills and experience to build high-quality websites. In addition, I am motivated to learn new technologies and stay up-to-date on industry best practices. Ultimately, I want to find a position that will allow me to grow my career in web development.",
    "Self-motivated graduate with having interest and more passionate in administrative work seeking administrative assistant role, with strong attention to detail and collaborative skills.",
    "Software engineering student eager to tackle job opportunities in web development. Has full range of HTML/CSS, testing and debugging skills and an efficient, deadline-focused approach to work.",
    "Highly motivated graduate with a strong academic background and enthusiasm for development. Seeking a job opportunity to apply theoretical knowledge, strong communication and outstanding research skills in a laboratory setting.",
    "Offering strong work ethic, attention to detail and award-winning client service skills, Eager to expand my knowledge, to mke or create new innovations for company's growth.",
    "Passionate about the profession for seeking an opportunity to apply my quality skills to make a meaningful impact in a collaborative work environment.",
    "A highly motivated, hardworking individual looking for a responsible role in a reputable organization, seeking a role in a company where I can contribute my ideas and be mentored towards a successful career.",
    "An organized and motivated employee capable of time management and working under pressure in all environments. Seeking to join in this company as a higher position to ensure good internal communications and budget management.",
    "Dedicated to getting an opportunity where I can maximize my potential and significantly contribute to the organization's growth by applying my skills.",
    "Looking to work in an organization that can provide a variety of opportunities that allow me to expand my skills and knowledge while working towards achieving the organizational goals.",
    "To land a job in a marketing organisation that offers a stimulating learning environment for developing and putting into practice new ideas for the company's development. Looking for entry-level employment where I can develop my abilities as a marketing expert and help a firm succeed overall.",
    "Self-Motivated team member seeking work as a lead web developer with next generation web Development where I can use my leadership skills and extensive understanding of web design to fulfil client demands and surpass their expetations.",
    "Highly skilled in communication, collaboration, and technical documentation, seeking a position in dynamic organisation where I can launch my career and work towards building a strong skill set.",
    "Demonstrating the track record of creating and carrying out creative social media strategies that improve sales and develop the growth of company's reputation",
    "Highly-motivated, passionate and certified Scientific Programmer and highly talented in developing, maintaining, and upgrading versions of software used for scientific research.",
    "An aspiring finance professional seeking a mid-level roles in an organization that could help me learn new skills. Excited to deliver my potential of financial analysis and strategic implementation with a novel approach toward the development of the company.",
    "A self-motivated and highly passionate individual, seeking a management position that will help me utilize my educational and training experience in Management to offer my insights and steer the business towards success.",
    "Seeking an entry-level position to begin my career in a high-level professional environment. To obtain a challenging and rewarding position in a dynamic organization where I can utilize my skills and talents to contribute to the growth and success of the company.",
    "Motivated enthusiast eager to start a career journey in Industry, bringing a fresh perspective, strong academic background, and a commitment to excellence in specific skills and responsibilities.",
    "Driven graduate passionate about the specific aspect of the industry, seeking an entry-level position to contribute my skills to company success and develop professionally in Field.",
    "Goal-oriented aspiring to make a meaningful impact in Industry, utilizing my skills to support company objectives while expanding my knowledge and skills in specific areas.",
    "Dedicated recent graduate pursuing opportunities in company, aiming to apply my strong academic background in relevant coursework and practical experience in internships, to contribute effectively to team goals.",
    "Ambitious enthusiast with a focus on Specialization, seeking an entry-level position to apply my knowledge acquired through coursework and practical experience, Dedicated to contributing to company growth and success.",
    "Passionate graduate pursuing a meaningful career in company, Excited to bring my skills to a dynamic organization where I can learn from industry leaders, contribute to innovative projects, and achieve professional milestones.",
    "Aspiring with a commitment to excellence and a passion, Eager to leverage my skills to support team goals while continuously expanding my knowledge and capabilities.",
    "Punctual and reliable enthusiast eager to launch a career in company, Bringing a disciplined approach to tasks and deadlines, with a goal of supporting team operations effectively and consistently.",
    "Punctuality-focused aspiring to excel in company, known for promptness and reliability in task execution, Eager to contribute my strong time management skills to support company goals and achieve mutual success.",
    "Reliable graduate ready to ensure punctual results in company, Bringing a track record of meeting deadlines and achieving goals, aiming to apply my punctuality skills to drive efficiency and success for company.",
    "Eager with a strong emphasis on timeliness and efficiency, Seeking to apply my punctuality and time management skills to support company objectives and contribute to organizational growth and success.",
    "Motivated enthusiast with a focus on meeting deadlines and exceeding expectations, Looking for opportunities in Industry where I can leverage my punctuality skills to deliver consistent results and drive continuous improvement for company.",
    "Innovative graduate eager to pioneer new solutions, Seeking a role where I can leverage my creative thinking and problem-solving abilities to drive transformative change and contribute to team success.",
    "Global-minded graduate committed to fostering cross-cultural collaboration, Eager to contribute my international experience and language skills to support company in achieving global business objectives.",
    "Creative with a knack for visual storytelling and brand communication in Industry, Eager to apply my creative skills and relevant experience to develop compelling campaigns that resonate with audiences for company." 
];


//Personal Details
var personal_details_name = document.getElementById('name');
var personal_details_phonenumber = document.getElementById('phone');
var personal_details_Email = document.getElementById('email');
var personal_details_country = document.getElementById('country');
var personal_details_city = document.getElementById('city');
var personal_details_pincode = document.getElementById('pincode');

//skills
var skill1 = document.getElementById('skill1');
var skill2 = document.getElementById('skill2');
var skill3 = document.getElementById('skill3');
var skill4 = document.getElementById('skill4');
var skill5 = document.getElementById('skill5');
var skill6 = document.getElementById('skill6');

//Education Details
var collage_name1 = document.getElementById('collage_name1');
var collage_location1 = document.getElementById('collage_location1');
var collage_GPA1 = document.getElementById('collage_GPA1');
var collage_branch1 = document.getElementById('collage_branch1');
var collage_start1 = document.getElementById('collage_start1');
var collage_end1 = document.getElementById('collage_end1');

var collage_name2 = document.getElementById('collage_name2');
var collage_location2 = document.getElementById('collage_location2');
var collage_GPA2 = document.getElementById('collage_GPA2');
var collage_branch2 = document.getElementById('collage_branch2');
var collage_start2 = document.getElementById('collage_start2');
var collage_end2 = document.getElementById('collage_end2');

var collage_name3 = document.getElementById('school_name');
var collage_location3 = document.getElementById('school_location3');
var collage_GPA3 = document.getElementById('school_GPA2');
var collage_branch3 = document.getElementById('school_board2');
var collage_start3 = document.getElementById('school_start2');
var collage_end3 = document.getElementById('school_end2');

//Profiles
var profileGithub = document.getElementById('profile_github');
var profileLinkedIn = document.getElementById('profile_linkedin');
var profileHackerRank = document.getElementById('profile_hacker_rank');
var profileCodeChef = document.getElementById('profile_code_chef');
var profileLeetCode = document.getElementById('profile_leet_code');
var profileGFG = document.getElementById('profile_geeks_for_geeks');


//Projects
var projectName1 = document.getElementById('project_name1');
var projectStart1 = document.getElementById('project_start1');
var projectEnd1 = document.getElementById('project_end1');
var projectRole1 = document.getElementById('project_role1');
var projectDescription1 = document.getElementById('project_description1');

var projectName2 = document.getElementById('project_name2');
var projectStart2 = document.getElementById('project_start2');
var projectEnd2 = document.getElementById('project_end2');
var projectRole2 = document.getElementById('project_role2');
var projectDescription2 = document.getElementById('project_description2');

var projectName3 = document.getElementById('project_name2');
var projectStart3 = document.getElementById('project_start2');
var projectEnd3 = document.getElementById('project_end2');
var projectRole3 = document.getElementById('project_role2');
var projectDescription3 = document.getElementById('project_description2');

//Achievements
var achievement_badge1 = document.getElementById('achievement_badge1');
var achievement_badge2 = document.getElementById('achievement_badge2');
var achievement_badge3 = document.getElementById('achievement_badge3');

var achievement_coding_profile1 = document.getElementById('achievement_coding_profile1');
var achievement_coding_profile2 = document.getElementById('achievement_coding_profile2');
var achievement_coding_profile3 = document.getElementById('achievement_coding_profile3');
var achievement_coding_profile4 = document.getElementById('achievement_coding_profile4');

var achievement_hackathon1 = document.getElementById('achievement_hackathon1');
var achievement_hackathon2 = document.getElementById('achievement_hackathon2');
var achievement_hackathon3 = document.getElementById('achievement_hackathon3');

//InterShips
var internship_name1 = document.getElementById('internship_name1');
var internship_start1 = document.getElementById('internship_start1');
var internship_end1 = document.getElementById('internship_end1');
var internship_role1 = document.getElementById('internship_role1');
var internship_description1 = document.getElementById('internship_description1');

var internship_name2 = document.getElementById('internship_name2');
var internship_start2 = document.getElementById('internship_start2');
var internship_end2 = document.getElementById('internship_end2');
var internship_role2 = document.getElementById('internship_role2');
var internship_description2 = document.getElementById('internship_description2');


function showBox(number) {
    currentBox = number;
    const boxes = document.querySelectorAll('.box1, .box2, .box3, .box4, .box5');
    boxes.forEach(box => box.style.display = 'none');
    document.getElementById('box1-' + number).style.display = 'flex';
    updateProgressBar();

    personal_details[0] = personal_details_name.value;
    personal_details[1] = personal_details_Email.value;
    personal_details[2] = personal_details_phonenumber.value;
    personal_details[3] = personal_details_country.value;
    personal_details[4] = personal_details_city.value;
    personal_details[5] = personal_details_pincode.value;

    skills[0] = skill1.value;
    skills[1] = skill2.value;
    skills[2] = skill3.value;
    skills[3] = skill4.value;
    skills[4] = skill5.value;
    skills[5] = skill6.value;

    education_details[0][0] = collage_name1.value;
    education_details[0][1] = collage_location1.value;
    education_details[0][2] = collage_GPA1.value;
    education_details[0][3] = collage_branch1.value;
    education_details[0][4] = collage_start1.value;
    education_details[0][5] = collage_end1.value;

    education_details[1][0] = collage_name2.value;
    education_details[1][1] = collage_location2.value;
    education_details[1][2] = collage_GPA2.value;
    education_details[1][3] = collage_branch2.value;
    education_details[1][4] = collage_start2.value;
    education_details[1][5] = collage_end2.value;

    education_details[2][0] = collage_name3.value;
    education_details[2][1] = collage_location3.value;
    education_details[2][2] = collage_GPA3.value;
    education_details[2][3] = collage_branch3.value;
    education_details[2][4] = collage_start3.value;
    education_details[2][5] = collage_end3.value;
    

    profiles[0] = profileLinkedIn.value;
    profiles[1] = profileGithub.value;
    profiles[2] = profileHackerRank.value;
    profiles[3] = profileCodeChef.value;
    profiles[4] = profileLeetCode.value;
    profiles[5] = profileGFG.value;

    projects[0][0] = projectName1.value;
    projects[0][1] = projectStart1.value;
    projects[0][2] = projectEnd1.value;
    projects[0][3] = projectRole1.value;
    projects[0][4] = projectDescription1.value;

    projects[1][0] = projectName2.value;
    projects[1][1] = projectStart2.value;
    projects[1][2] = projectEnd2.value;
    projects[1][3] = projectRole2.value;
    projects[1][4] = projectDescription2.value;

    projects[2][0] = projectName3.value;
    projects[2][1] = projectStart3.value;
    projects[2][2] = projectEnd3.value;
    projects[2][3] = projectRole3.value;
    projects[2][4] = projectDescription3.value;

    achievements[0][0] = achievement_badge1.value;
    achievements[0][1] = achievement_badge2.value;
    achievements[0][2] = achievement_badge3.value;

    achievements[1][0] = achievement_coding_profile1.value;
    achievements[1][1] = achievement_coding_profile2.value;
    achievements[1][2] = achievement_coding_profile3.value;
    achievements[1][3] = achievement_coding_profile4.value;

    achievements[2][0] = achievement_hackathon1.value;
    achievements[2][1] = achievement_hackathon2.value;
    achievements[2][2] = achievement_hackathon3.value;

    internships[0][0] = internship_name1.value;
    internships[0][1] = internship_start1.value;
    internships[0][2] = internship_end1.value;
    internships[0][3] = internship_role1.value;
    internships[0][4] = internship_description1.value;
    
    internships[1][0] = internship_name2.value;
    internships[1][1] = internship_start2.value;
    internships[1][2] = internship_end2.value;
    internships[1][3] = internship_role2.value;
    internships[1][4] = internship_description2.value;
}

function nextBox() {
    if (currentBox < 5) {
        showBox(currentBox + 1);
    }
}

function prevBox() {
    if (currentBox > 1) {
        showBox(currentBox - 1);
    }
}

function updateProgressBar() {
    const progressBar = document.getElementById('progress-bar');
    const width = window.innerWidth;
    let progress = 0;

    switch (currentBox) {
        case 2:
            progress = 25;
            break;
        case 3:
            progress = 50;
            break;
        case 4:
            progress = 75;
            break;
        case 5:
            progress = 100;
            break;
        default:
            progress = 0;
    }

    if (width > 500) {
        progressBar.style.transform = `scaleY(${progress / 100})`;
    } else {
        progressBar.style.transform = `scale(${progress / 100})`;
    }
}

showBox(1);
document.getElementById('education_form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Click Next');
});

//achievements
document.addEventListener('DOMContentLoaded', (event) => {
    const inputs = Array.from(document.querySelectorAll('input'));
    inputs.forEach((input, index) => {
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                const nextInput = inputs[index + 1];
                if (nextInput) {
                    nextInput.focus();
                }
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const para1 = document.getElementById('para1');
    const para2 = document.getElementById('para2');
    const para3 = document.getElementById('para3');
    const para4 = document.getElementById('para4');
    const para5 = document.getElementById('para5');
    const para6 = document.getElementById('para6');
    const para7 = document.getElementById('para7');
    const para8 = document.getElementById('para8');

    setInterval(() => {
        para1.classList.toggle('blink');
        para2.classList.toggle('blink');
        para3.classList.toggle('blink');
        para4.classList.toggle('blink');
        para5.classList.toggle('blink');
        para6.classList.toggle('blink');
        para7.classList.toggle('blink');
        para8.classList.toggle('blink');
        // para6.classList.toggle('blink');
  
    }, 1000); // Adjust the interval as needed
});


function chooseTemplate() {

    internships[0][0] = internship_name1.value;
    internships[0][1] = internship_start1.value;
    internships[0][2] = internship_end1.value;
    internships[0][3] = internship_role1.value;
    internships[0][4] = internship_description1.value;
    
    internships[1][0] = internship_name2.value;
    internships[1][1] = internship_start2.value;
    internships[1][2] = internship_end2.value;
    internships[1][3] = internship_role2.value;
    internships[1][4] = internship_description2.value;


    localStorage.setItem("personal_details", JSON.stringify(personal_details));
    localStorage.setItem("CareerObjectives", JSON.stringify(CareerObjectives)); 
    localStorage.setItem("skills",JSON.stringify(skills));
    localStorage.setItem("education_details",JSON.stringify(education_details));
    localStorage.setItem("projects",JSON.stringify(projects));
    localStorage.setItem("profiles",JSON.stringify(profiles));
    localStorage.setItem("achievements",JSON.stringify(achievements));
    localStorage.setItem("internships",JSON.stringify(internships));
    localStorage.setItem("hobbies",JSON.stringify(hobbies));
    localStorage.setItem("languages",JSON.stringify(languages));
    window.location.href = "../chooseTemplates/Templates.html";
}



