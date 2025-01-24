 const cards = document.querySelectorAll('.card');

 function toggleAppear(element, add) {
     if (element) {
         if (add) {
            element.classList.add('appear');
         } else {
             element.classList.remove('appear');
        }
     }
 }


 cards.forEach(card => {
    const butonAppearCard = card.querySelector('#butonAppearCard');

    card.addEventListener("mouseenter", () => {
        toggleAppear(butonAppearCard, true);
    });

   card.addEventListener("mouseleave", () => {
        toggleAppear(butonAppearCard, false);
   });
 });





const navig = document.querySelector('nav');
const navLinks = document.querySelectorAll('.menu-item-links');
const navBtnImgs = document.querySelector('#nav-btn-img');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
      navig.classList.remove('open');
      navBtnImgs.src ="imdge/Menu.svg";
  });
});

const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');

navBtn.onclick = () => {
    if (nav.classList.toggle('open')){
        navBtnImg.src ="imdge/close.svg";
}
    else {
        navBtnImg.src ="imdge/Menu.svg";
}
}





const mobileBreakpoint = 390;
const cardImages = document.querySelectorAll('.card-image');

function setupMobileListeners(cardImage) {
    const carImgChange = cardImage.querySelector('#carImgChange');
    const originalSrc = carImgChange.src;

    cardImage.onclick = () => {
        if (carImgChange.classList.contains('change')) {
            carImgChange.classList.remove('change');
            carImgChange.src = originalSrc;
        } else {
            carImgChange.classList.add('change');
            carImgChange.src = "imdge/img.png";
        }
    };
}



function checkScreenSize() {
    cardImages.forEach(cardImage => {
    if (window.innerWidth <= mobileBreakpoint) {
          setupMobileListeners(cardImage);
      } 
  });
}

// Вызываем checkScreenSize при загрузке страницы
checkScreenSize();

// Вызываем checkScreenSize при изменении размера окна
window.addEventListener('resize', checkScreenSize);

