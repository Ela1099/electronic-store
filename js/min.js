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



const navig = document.querySelector('nav');
const navLinks = document.querySelectorAll('.menu-item-links');
const navBtnImgs = document.querySelector('#nav-btn-img');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
      navig.classList.remove('open');
      navBtnImgs.src ="imdge/Menu.svg";
  });
});




 const cardImages = document.querySelectorAll('.card-image'); // Получаем все элементы с классом card-image

 cardImages.forEach(cardImage => {
     const carImgChange = cardImage.querySelector('#carImgChange'); // Находим изображение внутри card-image
     const originalSrc = carImgChange.src; // Сохраняем исходный src

    cardImage.onclick = () => {
         if (carImgChange.classList.contains('change')) {
             carImgChange.classList.remove('change');
             carImgChange.src = originalSrc; // Возвращаем исходный src
         } else {
             carImgChange.classList.add('change');
             carImgChange.src = "imdge/img.png";
         }
     };
 });