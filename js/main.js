//Slideshow functionality

var counter = 1;
let clicked = false;
const slide = document.querySelector(".slideshow-container");
const slideImg = document.querySelectorAll(`.slideshow-container img`);

//Btns
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

const size = slideImg[0].clientWidth||940;

slide.style.transform = `translateX(-940px)`;
let move = size*counter;

function nextSlide(){
  if(counter>=slideImg.length-1) return;
  clicked = true;
  slide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  slide.style.transform = `translateX(-${size*counter}px)`;
  clicked = false;
}

//Btn listeners
nextBtn.addEventListener("click", nextSlide)

prevBtn.addEventListener("click", ()=>{
  if(counter<=0) return;
  clicked = true;
  slide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  slide.style.transform = `translateX(-${size*counter}px)`;
  clicked = false;
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


//Slideshow timer
const IntervalTimer = function (callback, delay){
  let timerId;
  let state = 1; // 1 = running, 2 = paused;

  this.pause = function(){
    if(state !== 1) return;
    window.clearInterval(timerId);
    state = 2;
    console.log("pause", state)
  }

  this.resume = function(){
    if(state!==2) return;
    timerId = window.setInterval(callback, delay)
    console.log("resume", state)
    state = 1;
  }

  timerId = window.setInterval(callback, delay)
  state = 1;
  console.log(state, "State")
}

const timer = new IntervalTimer(nextSlide, 3000);
const slideshow = document.querySelector(".slideshow")

//mouseover detection
slideshow.addEventListener("mouseenter", timer.pause)
slideshow.addEventListener("mouseleave", timer.resume)

