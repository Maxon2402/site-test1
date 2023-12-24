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

function scrollToServices() {
    const servicesSection = document.querySelector('.services-section');
    if (servicesSection) {
        window.scrollTo({
            top: servicesSection.offsetTop,
            behavior: 'smooth'
        });
    }
}



function scrollToBackground() {
    const background = document.querySelector('.background');
    if (background) {
        window.scrollTo({
            top: background.offsetTop,
            behavior: 'smooth'
        });
    }
}


function scrollToFooter() {
    const mainfooter = document.querySelector('.main-footer');
    if (mainfooter) {
        window.scrollTo({
            top: mainfooter.offsetTop,
            behavior: 'smooth'
        });
    }
}



// Функция для открытия модального окна
function openPriceList() {
    var modal = document.getElementById('priceListModal');
    var overlay = document.getElementById('bodyOverlay');
    document.body.classList.add('modal-open');
    modal.style.display = 'block';
    overlay.style.display = 'block';
  }
  
  // Функция для закрытия модального окна
  function closePriceList() {
    var modal = document.getElementById('priceListModal');
    var overlay = document.getElementById('bodyOverlay');
    document.body.classList.remove('modal-open');
    modal.style.display = 'none';
    overlay.style.display = 'none';
  }

  // Закрытие модального окна при нажатии на клавишу Esc
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closePriceList();
    }
});


  // Закрытие модального окна при клике на затемненный фон
  document.getElementById('bodyOverlay').addEventListener('click', closePriceList);
  



/* Остальной код остается без изменений */
document.addEventListener('DOMContentLoaded', function () {
    const popupTriggers = document.querySelectorAll('.popup-trigger');
    const overlay = document.getElementById('overlay');
    const popups = document.querySelectorAll('.popup-container');

    function showPopup(popupId) {
        popups.forEach(popup => {
            popup.style.display = 'none';
        });

        document.getElementById(popupId).style.display = 'block';
        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Запрет скролла при открытии окна
    }

    function closePopup() {
        popups.forEach(popup => {
            popup.style.display = 'none';
        });

        overlay.style.display = 'none';
        document.body.style.overflow = ''; // Разрешение скролла при закрытии окна
    }

    popupTriggers.forEach(function (trigger) {
        trigger.addEventListener('click', function () {
            const popupId = trigger.id.replace('Button', 'Popup');
            showPopup(popupId);
        });
    });

    overlay.addEventListener('click', function (event) {
        // Закрываем окно только если клик произошел вне любого из всплывающих окон
        if (!Array.from(popups).some(popup => popup.contains(event.target))) {
            closePopup();
        }
    });

    popups.forEach(function (popup) {
        // Изменено: удаляем поиск кнопки закрытия и добавляем закрытие по клику на overlay
        popup.addEventListener('click', function (event) {
            if (event.target.classList.contains('popup-container') || event.target.classList.contains('close-button')) {
                closePopup();
            }
        });
    });
});





