var overview = document.getElementById('overview');
var resumeSamples = document.getElementById('resumeSamples');
var showCompany = document.getElementById("showCompanies");
var reviews = document.getElementById("reviews");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");

function showOverview(){
    reviews.style.display = "none";
    overview.style.display = "flex";
    showCompany.style.display = "none";
    resumeSamples.style.display = "none";
    
    button2.style.backgroundColor = "#052352";
    button1.style.backgroundColor = "#143E8A";
    button4.style.backgroundColor = "#052352";
    button3.style.backgroundColor = "#052352";
}
function showResumeSample(){
    
    reviews.style.display = "none";
    resumeSamples.style.display = "flex";
    overview.style.display = "none";
    showCompany.style.display = "none";

    button3.style.backgroundColor = "#052352";
    button1.style.backgroundColor = "#052352";
    button4.style.backgroundColor = "#052352";
    button2.style.backgroundColor = "#143E8A";

}
function showCompanies(){
    reviews.style.display = "none";
    showCompany.style.display = "flex";
    resumeSamples.style.display = "none";
    overview.style.display = "none";

    button2.style.backgroundColor = "#052352";
    button1.style.backgroundColor = "#052352";
    button3.style.backgroundColor = "#143E8A";
    button4.style.backgroundColor = "#052352";
}
function showReviews(){
    reviews.style.display = "flex";
    showCompany.style.display = "none";
    resumeSamples.style.display = "none";
    overview.style.display = "none";

    button4.style.backgroundColor = "#143E8A";
    button2.style.backgroundColor = "#052352";
    button3.style.backgroundColor = "#052352";
    button1.style.backgroundColor = "#052352";


}
var instruction1 = document.getElementById("instruction1");
var instruction2 = document.getElementById("instruction2");
var instruction3 = document.getElementById("instruction3");
var instruction4 = document.getElementById("instruction4");
var plus1 = document.getElementById("plus1");
var minus1 = document.getElementById("minus1");
var plus2 = document.getElementById("plus2");
var minus2 = document.getElementById("minus2");
var plus3 = document.getElementById("plus3");
var minus3 = document.getElementById("minus3");
var plus4 = document.getElementById("plus4");
var minus4 = document.getElementById("minus4");
function instruct1()
{
    instruction1.style.display ="block";
    instruction2.style.display ="none";
    instruction3.style.display ="none";
    instruction4.style.display ="none";
    if(plus1.style.display != "none")
    {
        plus1.style.display = "none";
        minus1.style.display = "block";
    }
    else
    {
        plus1.style.display = "block";
        minus1.style.display = "none";
    }
}
function instruct2()
{
    instruction2.style.display ="block";
    instruction1.style.display ="none";
    instruction3.style.display ="none";
    instruction4.style.display ="none";
}
function instruct3()
{
    instruction3.style.display ="block";
    instruction2.style.display ="none";
    instruction1.style.display ="none";
    instruction4.style.display ="none";
}
function instruct4()
{
    instruction4.style.display ="block";
    instruction2.style.display ="none";
    instruction3.style.display ="none";
    instruction1.style.display ="none";
}
function smoothScrollToDown() {
    event.preventDefault();
    const downSection = document.getElementById('down');
    const duration = 850;
    const start = window.scrollY;
    const end = downSection.offsetTop;
    const startTime = performance.now();

    function scroll() {
        const elapsed = performance.now() - startTime;
        const progress = elapsed / duration;
        const position = start + (end - start) * progress;

        window.scrollTo(0, position);

        if (elapsed < duration) {
            window.requestAnimationFrame(scroll);
        }
    }

    window.requestAnimationFrame(scroll);
};