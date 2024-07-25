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

var how_to_use_btn = document.getElementById('how_to_use_btn');
var resume_samples_btn = document.getElementById('resume_samples_btn');
var companies_placed_btn = document.getElementById('companies_placed_btn');
var reviews_btn = document.getElementById('reviews_btn');
var how_to_use = document.getElementById('how_to_use');
var resume_samples = document.getElementById('resume_samples');
var companies_placed = document.getElementById('companies_placed');
var reviews = document.getElementById('reviews');
how_to_use_btn.addEventListener('click', () => {
    how_to_use.style.display = 'block';
    how_to_use_btn.style.backgroundColor = '#133D87';
    resume_samples.style.display = 'none';
    resume_samples_btn.style.backgroundColor = 'transparent';
    companies_placed.style.display = 'none';
    companies_placed_btn.style.backgroundColor = 'transparent';
    reviews.style.display = 'none';
    reviews_btn.style.backgroundColor = 'transparent';
});

resume_samples_btn.addEventListener('click', () => {
    how_to_use.style.display = 'none';
    how_to_use_btn.style.backgroundColor = 'transparent';
    resume_samples.style.display = 'block';
    resume_samples_btn.style.backgroundColor = '#133D87';
    companies_placed.style.display = 'none';
    companies_placed_btn.style.backgroundColor = 'transparent';
    reviews.style.display = 'none';
    reviews_btn.style.backgroundColor = 'transparent';
}
);

companies_placed_btn.addEventListener('click', () => {
    how_to_use.style.display = 'none';
    how_to_use_btn.style.backgroundColor = 'transparent';
    resume_samples.style.display = 'none';
    resume_samples_btn.style.backgroundColor = 'transparent';
    companies_placed.style.display = 'block';
    companies_placed_btn.style.backgroundColor = '#133D87';
    reviews.style.display = 'none';
    reviews_btn.style.backgroundColor = 'transparent';
});

reviews_btn.addEventListener('click', () => {
    how_to_use.style.display = 'none';
    how_to_use_btn.style.backgroundColor = 'transparent';
    resume_samples.style.display = 'none';
    resume_samples_btn.style.backgroundColor = 'transparent';
    companies_placed.style.display = 'none';
    companies_placed_btn.style.backgroundColor = 'transparent';
    reviews.style.display = 'block';
    reviews_btn.style.backgroundColor = '#133D87';
});