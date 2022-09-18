const iconMenu = document.querySelector('.menu_icon');

const leftAll = document.querySelector('.navigation_button_leftall');
const left = document.querySelector('.navigation_button_left');
const page = document.querySelector('.navigation_button_number');
const right = document.querySelector('.navigation_button_right');
const rightAll = document.querySelector('.navigation_button_rightall');
const petsSlider = document.querySelector('.pets_sider_hiden')
let offset = 0;
let pageStep = 1;



fetch('/shelter/assets/json/pets.json')
.then((response) => response.json())
.then((data) => {
    function shuffle(ar) {
      let j, tmp;
      for(var i=0; i<ar.length; i++) {
          // Случайный индекс элемента для обмена
          do {
              j=parseInt(Math.random()*ar.length);
          } while(i==j);
          // Обменять местами два элемента массива
          tmp=ar[i];
          ar[i]=ar[j];
          ar[j]=tmp;
      }
      return ar;
  };

    shuffle(data);
    const sliderPets = document.querySelector('.our_pets_slider')
    for(let i=0; i<data.length; i++) {
        let petCard = ` 
      <div class="slider_card card" id="${data[i].id}">
        <img src="${data[i].img}" alt="">
        <p>${data[i].name}</p>
        <button class="our_pets_button">Learn more</button>
      </div>`;
      sliderPets.insertAdjacentHTML('beforeend', petCard)
    }

    shuffle(data);
    const sliderPets2 = document.querySelector('.our_pets_slider2')
    for(let i=0; i<data.length; i++) {
        let petCard2 = ` 
      <div class="slider_card card" id="${data[i].id}">
        <img src="${data[i].img}" alt="">
        <p>${data[i].name}</p>
        <button class="our_pets_button">Learn more</button>
      </div>`;
      sliderPets2.insertAdjacentHTML('beforeend', petCard2)
    }

    shuffle(data);
    const sliderPets3 = document.querySelector('.our_pets_slider3')
    for(let i=0; i<data.length; i++) {
        let petCard3 = ` 
      <div class="slider_card card" id="${data[i].id}">
        <img src="${data[i].img}" alt="">
        <p>${data[i].name}</p>
        <button class="our_pets_button">Learn more</button>
      </div>`;
      sliderPets3.insertAdjacentHTML('beforeend', petCard3)
    }

    shuffle(data);
    const sliderPets4 = document.querySelector('.our_pets_slider4')
    for(let i=0; i<data.length; i++) {
        let petCard4 = ` 
      <div class="slider_card card" id="${data[i].id}">
        <img src="${data[i].img}" alt="">
        <p>${data[i].name}</p>
        <button class="our_pets_button">Learn more</button>
      </div>`;
      sliderPets4.insertAdjacentHTML('beforeend', petCard4)
    }

    shuffle(data);
    const sliderPets5 = document.querySelector('.our_pets_slider5')
    for(let i=0; i<data.length; i++) {
        let petCard5 = ` 
      <div class="slider_card card" id="${data[i].id}">
        <img src="${data[i].img}" alt="">
        <p>${data[i].name}</p>
        <button class="our_pets_button">Learn more</button>
      </div>`;
      sliderPets5.insertAdjacentHTML('beforeend', petCard5)
    }

    shuffle(data);
    const sliderPets6 = document.querySelector('.our_pets_slider6')
    for(let i=0; i<data.length; i++) {
        let petCard6 = ` 
      <div class="slider_card card" id="${data[i].id}">
        <img src="${data[i].img}" alt="">
        <p>${data[i].name}</p>
        <button class="our_pets_button">Learn more</button>
      </div>`;
      sliderPets6.insertAdjacentHTML('beforeend', petCard6)
    }

    function addDisabled(first, second) {
      first.setAttribute('disabled', 'true');
      second.setAttribute('disabled', 'true');
    }
    function removeDisabled(first, second) {
      first.removeAttribute('disabled');
      second.removeAttribute('disabled');
    }
      addDisabled(left, leftAll);
    

    //right btn
    right.addEventListener('click', function() {
      offset = offset - 1200;
      pageStep = pageStep + 1;
      petsSlider.style.left = offset + 'px';
      page.textContent = pageStep;

      if(page.textContent == 6) {
        addDisabled(right, rightAll);
      } else if(page.textContent < 6) {
        removeDisabled(right, rightAll);
        removeDisabled(left, leftAll);
      }console.log('тут');
    });

    //right btnall
    rightAll.addEventListener('click', function() {
      offset = -6000;
      pageStep = 6;
      petsSlider.style.left = offset + 'px';
      page.textContent = pageStep;

      if(page.textContent == 6) {
        addDisabled(right, rightAll);
        removeDisabled(left, leftAll);
      } else if(page.textContent < 6) {
        removeDisabled(right, rightAll);
        removeDisabled(left, leftAll);
      }console.log('тут');
    });

     //left btn
     left.addEventListener('click', function() {
      offset = offset + 1200;
      pageStep = pageStep - 1;
      petsSlider.style.left = offset + 'px';
      page.textContent = pageStep;

      if(page.textContent == 1) {
        addDisabled(left, leftAll);
      } else if(page.textContent > 1) {
        removeDisabled(left, leftAll);
        removeDisabled(right, rightAll);
      }console.log('тут');
    });

    //left btnall
    leftAll.addEventListener('click', function() {
      offset = 0;
      pageStep = 1;
      petsSlider.style.left = offset + 'px';
      page.textContent = pageStep;

      if(page.textContent == 1) {
        addDisabled(left, leftAll);
        removeDisabled(right, rightAll);
      } else if(page.textContent > 1) {
        removeDisabled(left, leftAll);
        removeDisabled(right, rightAll);
      }console.log('тут');
    });
    
    
   
      
    
    

    

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
    const closeBtnJennifer = () => {
      popupJennifer.style.display = 'none';
    }
    closeBtn.addEventListener("click", closeBtnJennifer);

    const closeBtnSophia = document.querySelector(".close2");
    const closeSophia = () => {
      popupSophia.style.display = 'none';
    }
    closeBtnSophia.addEventListener("click", closeSophia);
    
    const closeBtnWoody = document.querySelector(".close3");
    const closeWoody = () => {
      popupWoody.style.display = 'none';
    }
    closeBtnWoody.addEventListener("click", closeWoody);

    const closeBtnScarlett = document.querySelector(".close4");
    const closeScarlett = () => {
      popupScarlett.style.display = 'none';
    }
    closeBtnScarlett.addEventListener("click", closeScarlett);

    const closeBtnKatrine = document.querySelector(".close5");
    const closeKatrine = () => {
      popupKatrine.style.display = 'none';
    }
    closeBtnKatrine.addEventListener("click", closeKatrine);

    const closeBtnTimmy = document.querySelector(".close6");
    const closeTimmy = () => {
      popupTimmy.style.display = 'none';
    }
    closeBtnTimmy.addEventListener("click", closeTimmy);

    const closeBtnFreddie = document.querySelector(".close7");
    const closeFreddie = () => {
      popupFreddie.style.display = 'none';
    }
    closeBtnFreddie.addEventListener("click", closeFreddie);
    
    const closeBtnCharly = document.querySelector(".close8");
    const closeCharly = () => {
      popupCharly.style.display = 'none';
    }
    closeBtnCharly.addEventListener("click", closeCharly);
});


if (iconMenu) {
    const menuBody = document.querySelector('.header_nav')
    const help = document.querySelector('.help');
    const contacts = document.querySelector('.contacts');
    const ourPets = document.querySelector('.our_pets')
    iconMenu.addEventListener('click', function(e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
        ourPets.classList.toggle('dark');
    });
    help.addEventListener('click', function(e) {
      document.body.classList.remove('_lock');
      iconMenu.classList.remove('_active');
      menuBody.classList.remove('_active');
      ourPets.classList.remove('dark');
    });
    contacts.addEventListener('click', function(e) {
      document.body.classList.remove('_lock');
      iconMenu.classList.remove('_active');
      menuBody.classList.remove('_active');
      ourPets.classList.remove('dark');
    });
}