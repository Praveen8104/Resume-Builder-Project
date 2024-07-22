document.getElementById('download').addEventListener('click', () => {
    const element = document.querySelector('.resume_body');
    const options = {
        filename: 'Resume.pdf',
        jsPDF: {
            unit: 'px',
            format: 'a4',
            orientation: 'portrait'
        }
    };
    html2pdf().from(element).set(options).save();
});