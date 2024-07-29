function fun(element) 
{
    var child = element.nextElementSibling;
    if (child.style.display === 'block') 
    {
        child.style.display = 'none';
    } 
    else 
    {
        child.style.display = 'block';
    }
}
function menuopen(element) 
{
    var animatedDiv2 = document.querySelector('.animated_div2');
    // var items = document.querySelector('.items' );
    var home=document.querySelector('.Home');
    var wrong=document.querySelector('.wrong');
    var aboutus=document.querySelector('.aboutus');
    var Contact=document.querySelector('.Contact');
    var accounts=document.querySelector('.accounts');
    var child = element.querySelector('.logoutchild');

    
    if (animatedDiv2.style.width === '200px') 
    {
        animatedDiv2.style.width = '0';
        home.style.display = "none";
        wrong.style.display = "none";
        aboutus.style.display = "none";
        Contact.style.display = "none";
        accounts.style.display = "none";
        child.style.display = 'none';
        items.style.display = 'none';
    } 
    else 
    {
        animatedDiv2.style.width = '200px';
        animatedDiv2.style.height = '450px';
        home.style.display="block";
        wrong.style.display="block";
        aboutus.style.display="block";
        Contact.style.display="block";
        accounts.style.display="block";
        child.style.display = 'none';
    }
}
function goback(element) 
{
    var animatedDiv2 = document.querySelector('.animated_div2');
    var home = document.querySelector('.Home');
    var wrong = document.querySelector('.wrong');
    var aboutus = document.querySelector('.aboutus');
    var contact = document.querySelector('.Contact');
    var accounts = document.querySelector('.accounts');
    var child = element.querySelector('.logoutchild');

    animatedDiv2.style.width = '0';
    home.style.display = "none";
    wrong.style.display = "none";
    aboutus.style.display = "none";
    contact.style.display = "none";
    accounts.style.display = "none";
    child.style.display = 'none';
}
function logout(element) 
{
    var child = element.querySelector('.logoutchild');
    child.style.display = 'block';
    if(child.classList.contains('show')) 
    {
        
      child.classList.remove('show');
    } 
    else 
    {
      child.classList.add('show');
    }
}
let userLogin = document.getElementById("userLogin");
let userLogin1 = document.getElementById("userLogin1");
userLogin.innerHTML = JSON.parse(localStorage.getItem('loggedUser'));
userLogin1.innerHTML = JSON.parse(localStorage.getItem('loggedUser'));