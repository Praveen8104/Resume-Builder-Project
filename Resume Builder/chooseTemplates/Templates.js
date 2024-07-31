const images = document.querySelectorAll('.vertical-div img');
let currentIndex = 0;

function updateCards() {
    document.querySelectorAll('.card img').forEach(cardImg => {
        cardImg.src = images[currentIndex].src;
        let apply = document.getElementById("choose");
        apply.onclick = null;
        apply.onclick = function(){
            window.location.href = `../templates/template${currentIndex}/index.html`
        };
    });
}

images.forEach((img, index) => {
    img.addEventListener('click', function() {
        currentIndex = index;
        updateCards();
    });
});