document.getElementById('download').addEventListener('click', () => {
    const element = document.querySelector('.resume');
    const options = {
        filename: 'MainResume1.pdf',
    };
    html2pdf().from(element).set(options).save();
});