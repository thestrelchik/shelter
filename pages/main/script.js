import petsData from '/shelter/assets/json/pets.js';
console.log(petsData);

const iconMenu = document.querySelector('.menu_icon'); 

const BTN_LEFT = document.querySelector("#btn-left");
const BTN_RIGHT = document.querySelector("#btn-right");
const CAROUSEL = document.querySelector(".our_pets_slider1");
const ITEM_LEFT = document.querySelector("#our_pets_slider--prev");
const ITEM_RIGHT = document.querySelector("#our_pets_slider--next");

const createCardTemplate = () => {
  let petCard = document.createElement('div');
      petCard.classList.add('slider_card');
        let img = document.createElement('img')
        img.classList.add('class="imgpet"')
        img.src = '/shelter/assets/images/pets-charly.png';
        petCard.appendChild(img);
        let title = document.createElement('p');
        title.classList.add('petname')
        title.innerHTML = 'Charly';
        petCard.appendChild(title)
        let button = document.createElement('button')
        button.classList.add('our_pets_button')
        button.innerText= 'Learn more';
        petCard.appendChild(button);
  return petCard
}

const moveLeft = () => {
  CAROUSEL.classList.add('transition-left');
  BTN_LEFT.removeEventListener('click', moveLeft)
  BTN_RIGHT.removeEventListener('click', moveRight)
}


const moveRight = () => {
  CAROUSEL.classList.add('transition-right');
  BTN_LEFT.removeEventListener('click', moveLeft)
  BTN_RIGHT.removeEventListener('click', moveRight)
}

BTN_LEFT.addEventListener('click', moveLeft)
BTN_RIGHT.addEventListener('click', moveRight)

CAROUSEL.addEventListener('animationend', (animationEvent) => {
  
  if (animationEvent.animationName === 'move-left') {
    CAROUSEL.classList.remove('transition-left');
    const leftItems = ITEM_LEFT.innerHTML;
    document.querySelector("#our_pets_slider--active").innerHTML = leftItems;

      let petCard1 = createCardTemplate();
      let petCard2 = createCardTemplate();
      let petCard3 = createCardTemplate();
         
      ITEM_LEFT.innerHTML ='';
      ITEM_LEFT.appendChild(petCard1);
      ITEM_LEFT.appendChild(petCard2);
      ITEM_LEFT.appendChild(petCard3);
  } else {
    CAROUSEL.classList.remove('transition-right');
    const rightItems = ITEM_RIGHT.innerHTML;
    document.querySelector("#our_pets_slider--active").innerHTML = rightItems;

      let petCard1 = createCardTemplate();
      let petCard2 = createCardTemplate();
      let petCard3 = createCardTemplate();
         
      ITEM_RIGHT.innerHTML ='';
      ITEM_RIGHT.appendChild(petCard1);
      ITEM_RIGHT.appendChild(petCard2);
      ITEM_RIGHT.appendChild(petCard3);
  }
  
  
  BTN_LEFT.addEventListener('click', moveLeft)
  BTN_RIGHT.addEventListener('click', moveRight)
})



































    
const cardJennifer = document.querySelector("#Jennifer");
const popupJennifer = document.querySelector(".popupJennifer");
const popJennifer = () => {
  popupJennifer.style.display = 'flex';
}
cardJennifer.addEventListener("click", popJennifer);

const cardSophia = document.querySelector("#Sophia");
const popupSophia = document.querySelector(".popupSophia");
const popSophia = () => {
  popupSophia.style.display = 'flex';
}
cardSophia.addEventListener("click", popSophia);

const cardWoody = document.querySelector("#Woody");
const popupWoody = document.querySelector(".popupWoody");
const popWoody = () => {
  popupWoody.style.display = 'flex';
}
cardWoody.addEventListener("click", popWoody);

const cardScarlett = document.querySelector("#Scarlett");
const popupScarlett = document.querySelector(".popupScarlett");
const popScarlett = () => {
  popupScarlett.style.display = 'flex';
}
cardScarlett.addEventListener("click", popScarlett);

const cardKatrine = document.querySelector("#Katrine");
const popupKatrine = document.querySelector(".popupKatrine");
const popKatrine = () => {
  popupKatrine.style.display = 'flex';
}
cardKatrine.addEventListener("click", popKatrine);

const cardTimmy = document.querySelector("#Timmy");
const popupTimmy = document.querySelector(".popupTimmy");
const popTimmy = () => {
  popupTimmy.style.display = 'flex';
}
cardTimmy.addEventListener("click", popTimmy);

const cardFreddie = document.querySelector("#Freddie");
const popupFreddie = document.querySelector(".popupFreddie");
const popFreddie = () => {
  popupFreddie.style.display = 'flex';
}
cardFreddie.addEventListener("click", popFreddie);

const cardCharly = document.querySelector("#Charly");
const popupCharly = document.querySelector(".popupCharly");
const popCharly = () => {
  popupCharly.style.display = 'flex';
}
cardCharly.addEventListener("click", popCharly);


//close btn
const closeBtn = document.querySelector(".close1");
console.log(closeBtn);
const closeBtnJennifer = () => {
  popupJennifer.style.display = 'none';
}
closeBtn.addEventListener("click", closeBtnJennifer);

const closeBtnSophia = document.querySelector(".close2");
console.log(closeBtnSophia);
const closeSophia = () => {
  popupSophia.style.display = 'none';
}
closeBtnSophia.addEventListener("click", closeSophia);

const closeBtnWoody = document.querySelector(".close3");
console.log(closeBtnWoody);
const closeWoody = () => {
  popupWoody.style.display = 'none';
}
closeBtnWoody.addEventListener("click", closeWoody);

const closeBtnScarlett = document.querySelector(".close4");
console.log(closeBtnScarlett);
const closeScarlett = () => {
  popupScarlett.style.display = 'none';
}
closeBtnScarlett.addEventListener("click", closeScarlett);

const closeBtnKatrine = document.querySelector(".close5");
console.log(closeBtnKatrine);
const closeKatrine = () => {
  popupKatrine.style.display = 'none';
}
closeBtnKatrine.addEventListener("click", closeKatrine);

const closeBtnTimmy = document.querySelector(".close6");
console.log(closeBtnTimmy);
const closeTimmy = () => {
  popupTimmy.style.display = 'none';
}
closeBtnTimmy.addEventListener("click", closeTimmy);

const closeBtnFreddie = document.querySelector(".close7");
console.log(closeBtnFreddie);
const closeFreddie = () => {
  popupFreddie.style.display = 'none';
}
closeBtnFreddie.addEventListener("click", closeFreddie);

const closeBtnCharly = document.querySelector(".close8");
console.log(closeBtnCharly);
const closeCharly = () => {
  popupCharly.style.display = 'none';
}
closeBtnCharly.addEventListener("click", closeCharly);









//                   МЕНЮ БУРГЕР
if (iconMenu) {
    const menuBody = document.querySelector('.header_nav');
    const help = document.querySelector('.help');
    const contacts = document.querySelector('.contacts');
    const main = document.querySelector('.main')
    const about = document.querySelector('.about')
    iconMenu.addEventListener('click', function(e) {
        document.body.classList.toggle('_lock');
        main.classList.toggle('dark');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
    help.addEventListener('click', function(e) {
      document.body.classList.remove('_lock');
      iconMenu.classList.remove('_active');
      menuBody.classList.remove('_active');
      main.classList.remove('dark');
    });
    contacts.addEventListener('click', function(e) {
      document.body.classList.remove('_lock');
      iconMenu.classList.remove('_active');
      menuBody.classList.remove('_active');
      main.classList.remove('dark');
    });
    about.addEventListener('click', function(e) {
      document.body.classList.remove('_lock');
      iconMenu.classList.remove('_active');
      menuBody.classList.remove('_active');
      main.classList.remove('dark');
    })
}

