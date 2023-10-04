// let navbar=document.querySelector('.navbar');
// document.querySelector('#menu-bar').onclick=() => {
//     navbar.classList.toggle('active');
// }
// document.querySelector('#close').onclick=() => {
//     navbar.classList.remove('active');
// }



// window.onscroll=()=>{
//     navbar.classList.remove('active');
//     if(window.scrollY>100){
//         document.querySelector('header').classList.add('active');
//     } else {
//         document.querySelector('header').classList.remove('active');
//     }
// }

// let themeToggler =document.querySelector('#theme');

// themeToggler.onclick = () => {
//     themeToggler.classList.toggle('fa-sun');
//     if(themeToggler.classList.contains('fa-sun')){
//         document.querySelector('body').classList.add('active');
//     }else{
//         document.querySelector('body').classList.remove('active');
//     }
// }

// Cache DOM elements to avoid redundant queries
const navbar = document.querySelector('.navbar');
const menuBar = document.querySelector('#menu-bar');
const closeBtn = document.querySelector('#close');
const header = document.querySelector('header');
const themeToggler = document.querySelector('#theme');
const body = document.querySelector('body');

// Add an event listener for the menu bar click
menuBar.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

// Add an event listener for the close button click
closeBtn.addEventListener('click', () => {
  navbar.classList.remove('active');
});

// Add an event listener for window scroll
window.addEventListener('scroll', () => {
  navbar.classList.remove('active');
  if (window.scrollY > 100) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
});

// Add an event listener for the theme toggler
themeToggler.addEventListener('click', () => {
  themeToggler.classList.toggle("fa-sun");
  body.classList.toggle('active');
});
var swiper = new Swiper(".product-slider", {
    slidesPerView:3,
    loop:true,
    spaceBetween:10,
    autoplay:{
        delay:4000,
        disableOnInteraction:false,
    },
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        550:{
            slidesPerView:2,
        },
        800:{
            slidesPerView:3,
        },
        1000:{
            slidesPerView:3,
        }
    },
    
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });
  document.querySelectorAll('.small-image-1').forEach(image => {
    image.onclick = () => {
      document.querySelector('.big-image-1').src = image.getAttribute('src');
    };
  });
  
  document.querySelectorAll('.small-image-2').forEach(image => {
    image.onclick = () => {
      document.querySelector('.big-image-2').src = image.getAttribute('src');
    };
  });
  
  document.querySelectorAll('.small-image-3').forEach(image => {
    image.onclick = () => {
      document.querySelector('.big-image-3').src = image.getAttribute('src');
    };
  });
  
let countDate=new Date('aug,2023 00:00:00').getTime();
function countDown(){
  let now=new Date().getTime();
  gap = now -countDate;
let seconds=1000;
let minutes=seconds*60;
let hours=minutes*60;
let day=hours*24;
let d= Math.floor(gap / (day));
let h= Math.floor((gap % (day)) /(hours));
let m= Math.floor((gap % (hours)) /(minutes));
let s= Math.floor((gap % (minutes)) /(seconds));

document.getElementById('days').innerText = d;
document.getElementById('hours').innerText = h;
document.getElementById('minutes').innerText = m;
document.getElementById('seconds').innerText = s;
}

setInterval(function(){
  countDown()
},1000)

