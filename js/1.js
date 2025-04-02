function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function dropdownFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}


function popupFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}
function popupFunction2() {
  var popup = document.getElementById("myPopup2");
  popup.classList.toggle("show");
}


/*POPUPS FOR THE LOG. I KNOW IT LOOKS BAD, BUT I DONT KNOW HOW TO MAKE IT PRETTIER. IT WORKS, SOOOO-*/

function popupFunction3() {
  var popup = document.getElementById("myPopup3");
  var popup_text = document.getElementById("popup3");
  popup.classList.toggle("show3");
  if (popup.classList.contains("show3")) {
    popup_text.style.color = "#5cbce8cd";
  } else {
    popup_text.style.color = "black";
  }
}
function popupFunction4() {
  var popup = document.getElementById("myPopup4");
  var popup_text = document.getElementById("popup4");
  popup.classList.toggle("show4");
  if (popup.classList.contains("show4")) {
    popup_text.style.color = "#5cbce8cd";
  } else {
    popup_text.style.color = "black";
  }
}
function popupFunction5() {
  var popup = document.getElementById("myPopup5");
  var popup_text = document.getElementById("popup5");
  popup.classList.toggle("show5");
  if (popup.classList.contains("show5")) {
    popup_text.style.color = "#5cbce8cd";
  } else {
    popup_text.style.color = "black";
  }
}
function popupFunction6() {
  var popup = document.getElementById("myPopup6");
  var popup_text = document.getElementById("popup6");
  popup.classList.toggle("show6");
  if (popup.classList.contains("show6")) {
    popup_text.style.color = "#5cbce8cd";
  } else {
    popup_text.style.color = "black";
  }
}
function popupFunction7() {
  var popup = document.getElementById("myPopup7");
  var popup_text = document.getElementById("popup7");
  popup.classList.toggle("show7");
  if (popup.classList.contains("show7")) {
    popup_text.style.color = "#5cbce8cd";
  } else {
    popup_text.style.color = "black";
  }
}
function popupFunction8() {
  var popup = document.getElementById("myPopup8");
  var popup_text = document.getElementById("popup8");
  popup.classList.toggle("show8");
  if (popup.classList.contains("show8")) {
    popup_text.style.color = "#5cbce8cd";
  } else {
    popup_text.style.color = "black";
  }
}
function popupFunction9() {
  var popup = document.getElementById("myPopup9");
  var popup_text = document.getElementById("popup9");
  popup.classList.toggle("show9");
  if (popup.classList.contains("show9")) {
    popup_text.style.color = "#5cbce8cd";
  } else {
    popup_text.style.color = "black";
  }
}
function popupFunction10() {
  var popup = document.getElementById("myPopup10");
  var popup_text = document.getElementById("popup10");
  popup.classList.toggle("show10");
  if (popup.classList.contains("show10")) {
    popup_text.style.color = "#5cbce8cd";
  } else {
    popup_text.style.color = "black";
  }
}
function popupFunction11() {
  var popup = document.getElementById("myPopup11");
  var popup_text = document.getElementById("popup11");
  popup.classList.toggle("show11");
  if (popup.classList.contains("show11")) {
    popup_text.style.color = "#5cbce8cd";
  } else {
    popup_text.style.color = "black";
  }
}
function popupFunction12() {
  var popup = document.getElementById("myPopup12");
  var popup_text = document.getElementById("popup12");
  popup.classList.toggle("show12");
  if (popup.classList.contains("show12")) {
    popup_text.style.color = "#5cbce8cd";
  } else {
    popup_text.style.color = "black";
  }
}




var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("open");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}









let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

