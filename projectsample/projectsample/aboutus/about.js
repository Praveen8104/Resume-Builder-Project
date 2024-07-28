// var jyo = false;
var ic = document.getElementById("iframe");
var ico =document.getElementById("crossmark");
fun=()=>{
    // if(jyo===false){
        
        var ic = document.getElementById("iframe");
        ic.style.display="none";
        var sb=document.getElementById("sidebar");
        sb.style.opacity="1";
        sb.style.width="300px";
        sb.style.transition="all 0.5s ease";
        var nb=document.getElementById("navbar");
        nb.style.opacity="1";
        sb.style.zIndex = "999";
        nb.style.width="300px";
        nb.style.transition="all 0.5s ease";
        ico.style.display="block";
}
jyo1=()=>{
        var ico =document.getElementById("crossmark");
        ico.style.display="none";
        var sb=document.getElementById("sidebar");
        sb.style.opacity="0";
        sb.style.width="0px";
        sb.style.transition="all 0.5s ease";
        var nb=document.getElementById("navbar");
        nb.style.opacity="0";
        nb.style.width="0px";
        nb.style.transition="all 0.5s ease";
        ic.style.display="block";
}
Vinay=()=>{
    let img = document.getElementById("leftimage");
    img.style.opacity = '0';
    img.style.transition = 'all 0.5s ease';
    setTimeout(() => {
        let img = document.getElementById("leftimage");
        img.style.opacity = '1';
        img.style.transition = 'all 0.5s ease';
        img.src = "../Assests/vinay.jpg";
        let md = document.getElementById("memberdesignation");
        md.innerHTML="Team Lead";
        md.style.transition = 'all 0.5s ease';
        var n = document.getElementById("name");
        n.innerHTML="Name : Vinay";
        md.style.transition = 'all 0.5s ease';
        let about = document.getElementById("matter");
        about.innerHTML = "As the Team Lead, I am committed to guiding our talented team towards achieving outstanding results. I excel in fostering collaboration, facilitating open communication, and driving innovation. With a strategic mindset and a commitment to mentorship, I ensure that every project is executed with precision and excellence, aligning with our organizational goals and values. My leadership inspires our team to reach new heights and deliver exceptional outcomes for our clients."
    }, 10);
}
Mounika=()=>{
    let img = document.getElementById("leftimage");
    img.style.opacity = '0';
    img.style.transition = 'all 0.5s ease';
    setTimeout(() => {
        let img = document.getElementById("leftimage");
        img.style.opacity = '1';
        img.style.transition = 'all 0.5s ease';
        img.src = "../Assests/mounika.jpg";
        let md = document.getElementById("memberdesignation");
        md.innerHTML="Team Member";
        md.style.transition = 'all 0.5s ease';
        var n = document.getElementById("name");
        n.innerHTML="Name : P.Mounika Devi";
        md.style.transition = 'all 0.5s ease';
        let about = document.getElementById("matter");
        about.innerHTML = "I drive our digital innovation by creating user-friendly and visually compelling websites and applications. My expertise spans HTML, CSS, JavaScript, and various frameworks, enabling me to build robust and scalable solutions. I prioritize seamless user experiences and stay current with industry advancements to ensure our projects are always cutting-edge."
    }, 10);
}
Praveen=()=>{
    let img = document.getElementById("leftimage");
    img.style.opacity = '0';
    img.style.transition = 'all 0.5s ease';
    setTimeout(() => {
        let img = document.getElementById("leftimage");
        img.style.opacity = '1';
        img.style.transition = 'all 0.5s ease';
        img.src = "../Assests/praveen.png";
        let md = document.getElementById("memberdesignation");
        md.innerHTML="Team Member";
        md.style.transition = 'all 0.5s ease';
        var n = document.getElementById("name");
        n.innerHTML="Name : Praveen";
        md.style.transition = 'all 0.5s ease';
        let about = document.getElementById("matter");
        about.innerHTML = "As the Web Developer, I play a crucial role in shaping our digital presence, combining technical expertise with creativity to deliver exceptional web solutions. Specializing in both front-end and back-end development, I excel in creating seamless, user-friendly websites and applications tailored to our clients' needs. With a strong background in HTML, CSS, JavaScript, and various frameworks, I ensure our web solutions are robust, scalable, and visually appealing."
    }, 10);
}
Supriya=()=>{
    let img = document.getElementById("leftimage");
    img.style.opacity = '0';
    img.style.transition = 'all 0.5s ease';
    setTimeout(() => {
        let img = document.getElementById("leftimage");
        img.style.opacity = '1';
        img.style.transition = 'all 0.5s ease';
        img.src = "../Assests/logo.png";
        let md = document.getElementById("memberdesignation");
        md.innerHTML="Team Member";
        md.style.transition = 'all 0.5s ease';
        var n = document.getElementById("name");
        n.innerHTML="Name : Supriya";
        md.style.transition = 'all 0.5s ease';
        let about = document.getElementById("matter");
        about.innerHTML = "I am dedicated to crafting visually stunning and intuitive user interfaces. My expertise lies in creating designs that enhance user experience, ensuring seamless navigation and engagement. With a keen eye for detail and a deep understanding of design principles, I transform complex requirements into aesthetically pleasing and functional designs. ";
    }, 10);
}

Venkatateja=()=>{
    let img = document.getElementById("leftimage");
    img.style.opacity = '0';
    img.style.transition = 'all 0.5s ease';
    setTimeout(() => {
        let img = document.getElementById("leftimage");
        img.style.opacity = '1';
        img.style.transition = 'all 0.5s ease';
        img.src = "../Assests/teja.png";
        let md = document.getElementById("memberdesignation");
        md.innerHTML="Team Member";
        md.style.transition = 'all 0.5s ease';
        var n = document.getElementById("name");
        n.innerHTML="Name : K.Naga Venkata Teja";
        md.style.transition = 'all 0.5s ease';
        let about = document.getElementById("matter");
        about.innerHTML="I thrive in dynamic environments and enjoy working collaboratively with my team to create seamless user experiences. When I am not coding, I love exploring new technologies and staying up-to-date with  industry trends."
    }, 10);
}

Jyothi=()=>{
    let img = document.getElementById("leftimage");
    img.style.opacity = '0';
    img.style.transition = 'all 0.5s ease';
    setTimeout(() => {
        let img = document.getElementById("leftimage");
        img.style.opacity = '1';
        img.style.transition = 'all 0.5s ease';
        img.src = "../Assests/jyo.jpg";
        let md = document.getElementById("memberdesignation");
        md.innerHTML="Team Member";
        md.style.transition = 'all 0.5s ease';
        var n = document.getElementById("name");
        n.innerHTML="Name : M.Jyothi Swaroopa";
        md.style.transition = 'all 0.5s ease';
        let about = document.getElementById("matter");
        about.innerHTML="I thrive on solving complex problems and optimizing algorithms under pressure. My strong foundation in data structures and algorithms, coupled with my ability to think critically and quickly, allows me to excel in coding competitions. I continuously challenge myself to improve my skills and stay ahead of the curve"
    }, 10);
}
//navbar
