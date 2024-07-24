document.getElementById('download').addEventListener('click', () => {
    const element = document.querySelector('.resume_body');
    const options = {
        filename: 'Resume_3.pdf',
    };
    html2pdf().from(element).set(options).save();
});