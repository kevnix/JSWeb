const blackButton = document.querySelector("#black-button")
const purpleButton = document.querySelector("#purple-button")
const blueButton = document.querySelector("#blue-button")
const yellowButton = document.querySelector("#yellow-button")

// body.style.background = localStorage.bgColor

// getComputedStyle(document.documentElement).getPropertyValue('--maincolor') = localStorage.theme;

switch (localStorage.theme) {
    case "Volters.black":
        document.documentElement.style.setProperty('--maincolor', '#333333');
        document.documentElement.style.setProperty('--boxcolor', 'rgba(233, 233, 233, 0.5)');
        break;
    case "Volters.purple":
        document.documentElement.style.setProperty('--maincolor', 'purple');
        document.documentElement.style.setProperty('--boxcolor', 'rgba(153, 39, 245, 0.5)');
        break;
    case "Volters.blue":
        document.documentElement.style.setProperty('--maincolor', 'blue');
        document.documentElement.style.setProperty('--boxcolor', 'rgba(0, 0, 255, 0.5)')
        break;
    case "Volters.yellow":
        document.documentElement.style.setProperty('--maincolor', 'yellow');
        document.documentElement.style.setProperty('--boxcolor', 'rgba(255, 255, 0, 0.5)')
        document.documentElement.style.setProperty('--txtcolor', 'black')
        break;

}

blackButton.addEventListener('click', function () {
    document.documentElement.style.setProperty('--maincolor', '#333333');
    document.documentElement.style.setProperty('--boxcolor', 'rgba(233, 233, 233, 0.5)')
    document.documentElement.style.setProperty('--txtcolor', 'white')
    localStorage.theme = "Volters.black"
    console.log("black click")
    console.log(localStorage.theme)
})

purpleButton.addEventListener('click', function () {
    document.documentElement.style.setProperty('--maincolor', 'purple');
    document.documentElement.style.setProperty('--boxcolor', 'rgba(153, 39, 245, 0.5)')
    document.documentElement.style.setProperty('--txtcolor', 'white')
    localStorage.theme = "Volters.purple"
    console.log("purple click")
    console.log(localStorage.theme)
})
blueButton.addEventListener('click', function () {
    document.documentElement.style.setProperty('--maincolor', 'blue');
    document.documentElement.style.setProperty('--boxcolor', 'rgba(0, 0, 255, 0.5)')
    document.documentElement.style.setProperty('--txtcolor', 'white')
    localStorage.theme = "Volters.blue"
    console.log("blue click")
    console.log(localStorage.theme)
})
yellowButton.addEventListener('click', function () {
    document.documentElement.style.setProperty('--maincolor', 'yellow');
    document.documentElement.style.setProperty('--boxcolor', 'rgba(255, 255, 0, 0.5)')
    document.documentElement.style.setProperty('--txtcolor', 'black')
    localStorage.theme = "Volters.yellow"
    console.log("yellow click")
    console.log(localStorage.theme)
})


// Slideshow-----------------------
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
  
}

//Uz Augshu-------------------------------------
// Get the button:
let mybutton = document.getElementById("toTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}