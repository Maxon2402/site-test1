document.addEventListener("DOMContentLoaded", function() {
    console.log("Документ загружен");

    // Ваш JavaScript код здесь
});


function scrollToCompanyInfo() {
    const companyInfoSection = document.querySelector('.company-info');
    if (companyInfoSection) {
        window.scrollTo({
            top: companyInfoSection.offsetTop,
            behavior: 'smooth'
        });
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}



