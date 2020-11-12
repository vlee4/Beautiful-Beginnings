
////////////Slideshow functionality//////////
const slideshow = document.querySelector(".slideshow");

function slideshowInit(){
  let timerId;

  var counter = 1;
  const slide = document.querySelector(".slideshow-container");
  const slideImgs = document.querySelectorAll(`.slideshow-container img`);

  //Btns
  const prevBtn = document.querySelector("#prevBtn");
  const nextBtn = document.querySelector("#nextBtn");

  const size = slideImgs[0].clientWidth||940;

  slide.style.transform = `translateX(-940px)`;

  function nextSlide(){
    //Checks display of slideshow, if slideshow not displayed, as in mobile view then rest of function won't run
    if(getComputedStyle(slideshow).display!=="none"){
      if(counter>=slideImgs.length-1) return;
      slide.style.transition = "transform 0.4s ease-in-out";
      counter++;
      slide.style.transform = `translateX(-${size*counter}px)`;
    }
  }

  //Btn listeners
  nextBtn.addEventListener("click", nextSlide)

  prevBtn.addEventListener("click", ()=>{
    if(counter<=0) return;
  slide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  slide.style.transform = `translateX(-${size*counter}px)`;
  })

  //Also prevents slideshow from iterating passed possible slides
  slide.addEventListener("transitionend", ()=> {
    if(slideImgs[counter].id==="lastClone"){
      slide.style.transition = "none";
      counter = slideImgs.length-2;
      slide.style.transform = `translateX(-${size*counter}px)`;
    }

    if(slideImgs[counter].id==="firstClone"){
      slide.style.transition = "none";
      counter = slideImgs.length-counter;
      slide.style.transform = `translateX(-${size*counter}px)`;
    }
  })


  //Slideshow timer
  const IntervalTimer = function (callback, delay){
    let state = 1; // 1 = running, 2 = paused;

    this.pause = function(){
      if(state !== 1) return;
      window.clearInterval(timerId);
      state = 2;
    }

    this.resume = function(){
      if(state!==2) return;
      timerId = window.setInterval(callback, delay)
      state = 1;
    }

    timerId = window.setInterval(callback, delay)
    state = 1;
  }

  const timer = new IntervalTimer(nextSlide, 3000);

  //mouseover detection
  slideshow.addEventListener("mouseenter", timer.pause)
  slideshow.addEventListener("mouseleave", timer.resume)

}
window.addEventListener("load", slideshowInit);


////////Hamburger menu functionality/////////
const hamburgerIcon = document.querySelector(".menu-toggle");
let menuState = 0; //default closed = 0

function toggleHamMenu(){
  let navMenu = document.querySelector(".header-bottom")
  if(menuState===0 &&(getComputedStyle(navMenu).display==="none")){// if menu is closed -> open
    menuState = 1;
    navMenu.style.display = "block";
  }
  else {// if menu open -> close
    menuState = 0;
    navMenu.style.display = "none";
  }
}
hamburgerIcon.addEventListener("click", toggleHamMenu)
//////////Footer Accordion///////////
function footerAccordion() {
  const columns = document.querySelectorAll(".expander");

  for(let i = 0; i<columns.length; i++){
    columns[i].addEventListener("click", ()=>{
      let panel = columns[i].querySelector(".expander__panel");
      if(panel.style.display==="none"){ // if panel is closed
        panel.style.display = "block"
      } else { //if panel is open
          panel.style.display ="none"
      }
    })
  }
}

window.addEventListener("load", footerAccordion)
