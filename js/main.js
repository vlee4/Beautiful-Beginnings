var counter = 1;
const slide = document.querySelector(".slideshow-container");
const slideImg = document.querySelectorAll(`.slideshow-container img`);

//Btns
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

const size = slideImg[0].clientWidth||940;

slide.style.transform = `translateX(-940px)`;
let move = size*counter;

//Btn listeners
nextBtn.addEventListener("click", ()=>{
  //if condition prevents clicking pass possible slides
  if(counter>=slideImg.length-1) return;
  slide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  slide.style.transform = `translateX(-${size*counter}px)`;
})

prevBtn.addEventListener("click", ()=>{
  if(counter<=0) return;
  slide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  slide.style.transform = `translateX(-${size*counter}px)`;
})

//Also prevents slideshow from iterating passed possible slides
slide.addEventListener("transitionend", ()=> {

  if(slideImg[counter].id==="lastClone"){
    slide.style.transition = "none";
    counter = slideImg.length-2;
    slide.style.transform = `translateX(-${size*counter}px)`;
  }

  if(slideImg[counter].id==="firstClone"){
    slide.style.transition = "none";
    counter = slideImg.length-counter;
    slide.style.transform = `translateX(-${size*counter}px)`;
  }
})
