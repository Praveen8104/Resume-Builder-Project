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

var create_resume_btn = document.getElementById('create_resume_btn');
var resume_samples_btn = document.getElementById('resume_samples_btn');
var resume_targeting_btn = document.getElementById('resume_targeting_btn');
var reviews_btn = document.getElementById('reviews_btn');
var create_resume = document.getElementById('create_resume');
var resume_samples = document.getElementById('resume_samples');
var resume_targeting = document.getElementById('resume_targeting');
var reviews = document.getElementById('reviews');
create_resume_btn.addEventListener('click', () => {
    create_resume.style.display = 'block';
    create_resume_btn.style.backgroundColor = '#0D3170';
    resume_samples.style.display = 'none';
    resume_samples_btn.style.backgroundColor = 'transparent';
    resume_targeting.style.display = 'none';
    resume_targeting_btn.style.backgroundColor = 'transparent';
    reviews.style.display = 'none';
    reviews_btn.style.backgroundColor = 'transparent';
});

resume_samples_btn.addEventListener('click', () => {
    create_resume.style.display = 'none';
    create_resume_btn.style.backgroundColor = 'transparent';
    resume_samples.style.display = 'block';
    resume_samples_btn.style.backgroundColor = '#0D3170';
    resume_targeting.style.display = 'none';
    resume_targeting_btn.style.backgroundColor = 'transparent';
    reviews.style.display = 'none';
    reviews_btn.style.backgroundColor = 'transparent';
}
);

resume_targeting_btn.addEventListener('click', () => {
    create_resume.style.display = 'none';
    create_resume_btn.style.backgroundColor = 'transparent';
    resume_samples.style.display = 'none';
    resume_samples_btn.style.backgroundColor = 'transparent';
    resume_targeting.style.display = 'block';
    resume_targeting_btn.style.backgroundColor = '#0D3170';
    reviews.style.display = 'none';
    reviews_btn.style.backgroundColor = 'transparent';
});

reviews_btn.addEventListener('click', () => {
    create_resume.style.display = 'none';
    create_resume_btn.style.backgroundColor = 'transparent';
    resume_samples.style.display = 'none';
    resume_samples_btn.style.backgroundColor = 'transparent';
    resume_targeting.style.display = 'none';
    resume_targeting_btn.style.backgroundColor = 'transparent';
    reviews.style.display = 'block';
    reviews_btn.style.backgroundColor = '#0D3170';
});