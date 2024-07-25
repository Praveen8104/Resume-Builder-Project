document.getElementById('download').addEventListener('click', () => {
    const element = document.querySelector('.resume');
    html2pdf().from(element).save('MainResume_5.pdf');
});