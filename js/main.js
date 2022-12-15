var thumbs = new Swiper(".slide-thumb", {
  spaceBetween: 1,
  slidesPerView: 5,
  watchSlidesProgress: true,
});


var swiper2 = new Swiper(".slide-principal", {
  disableOnInteraction: true,
  allowTouchMove: false,
  autoplay: {
      delay: 4500,
      disableOnInteraction: false,
  },
  thumbs: {
      swiper: thumbs,
  },
  effect: "fade",
  fadeEffect: {
      crossfade: true,
  },
});

const progressBar = document.querySelector(".progress");

progressBar.addEventListener("animationend", myEndFunction);


function myEndFunction() {
  swiper2.slideNext();
  progressBar.style.animation = "none";
  void progressBar.offsetWidth;
  progressBar.style.animation = null;
}

swiper2.on("slideChange", function () {
  progressBar.style.animation = "none";
  void progressBar.offsetWidth; 
  progressBar.style.animation = null;
});





var btnActive = document.getElementById("btn-active");

btnActive.addEventListener("click", function() {
  
  var Jogos = document.getElementById("jogos");

  Jogos.classList.toggle("hide")

  if (document.getElementById("jogos").classList.contains("hide")) {
      
    document.getElementById("esportes").classList.remove("hide")
  }

});

btnActive.addEventListener("click", function() {
  
  var seta = document.getElementById("btn-active");

  seta.classList.toggle("seta")

  if (document.getElementById("btn-active2").classList.contains("seta")) {
      
    document.getElementById("btn-active2").classList.remove("seta")

  }

});




var btnActive2 = document.getElementById("btn-active2");

btnActive2.addEventListener("click", function() {

  var esportes = document.getElementById("esportes");

  esportes.classList.toggle("hide");

  if (document.getElementById("esportes").classList.contains("hide")) {
      
    document.getElementById("jogos").classList.remove("hide")

  }
  

});

btnActive2.addEventListener("click", function() {
  
  var seta = document.getElementById("btn-active2");

  seta.classList.toggle("seta")

  if (document.getElementById("btn-active").classList.contains("seta")) {
      
    document.getElementById("btn-active").classList.remove("seta")

  }

});

var loginActive = document.getElementById("login-active");

loginActive.addEventListener("click", function() {

  var login = document.getElementById("Login");

  login.classList.toggle("a-login");

});


var loginClose = document.getElementById("login-remove");

loginClose.addEventListener("click", function() {

  var close = document.getElementById("Login");

  close.classList.toggle("a-login");

  

});




