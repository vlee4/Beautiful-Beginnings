// function slideshow(){
//   let i = 0;
//   let images = [];
//   let time = 3000;

//   //images
//   images[0] = "images/bb-slideshow-example-1.jpg";
//   images[1] = "images/bb-slideshow-example-2.jpg";
//   images[2] = "images/bb-slideshow-example-3.jpg";

//   function changeSlide(){
//     document.slide.src = images[i];

//     if(i<images.length-1){
//       i++;
//     }else{
//       i=0;
//     }
//   }

//   setTimeout("changeSlide()", time);
// }


// window.onload = changeSlide;
// <img name="slide" width = x, height = y>

let counter = 1;
const slide = document.querySelector(".slideshow-container");
const slideImg = document.querySelectorAll(`.slideshow-container img`);

//Btns
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

const size = slideImg[0].clientWidth||940;
console.log("img", slideImg, "size", size);

slide.style.transform = `translateX(-940px)`;

//Btn listeners

nextBtn.addEventListener("click", ()=>{
  slide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  console.log("Counter", counter);
  let move = size*counter;
  slide.style.transform = `translateX(-${move}px)`;
})

prevBtn.addEventListener("click", ()=>{
  slide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  console.log("Counter", counter);
  let move = size*counter;
  slide.style.transform = `translateX(-${move}px)`;
})
