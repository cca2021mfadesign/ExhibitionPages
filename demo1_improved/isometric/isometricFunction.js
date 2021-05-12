

  var moreText = document.querySelectorAll('.more');
  var btnText = document.querySelectorAll('.myBtn');
var leftHolder=document.querySelectorAll('.leftHolder');
var samplediv = document.querySelectorAll(".samplediv");
var close = document.querySelectorAll('.close');
var dots = document.querySelectorAll('.dots');
var lStatementsContents = document.querySelectorAll('.lStatementsContents');

for(var i =0; i<btnText.length; i++){
(function(i) {
btnText[i].addEventListener('click', function(){
    btnText[i].innerHTML = ""; 
    btnText[i].style.color = "#000";
    close[i].style.opacity= 1;
    close[i].style.padding="12px";
    samplediv[i].style.animationName = "rotateDivOn";
    samplediv[i].style.animationDuration = "1s";
    dots[i].style.display = "none";
    moreText[i].style.display = "block";
    samplediv[i].style.width = "150%";

    samplediv[i].style.height = "150%";
    lStatementsContents[i].style.padding = "30px";
    samplediv[i].style.transform = "rotate(0)";
    samplediv[i].style.fontSize ="18px";
     samplediv[i].style.zIndex= "10";

});
})(i);
(function(i) {
 close[i].addEventListener('click', function(){
   dots[i].style.display = "inline";
    moreText[i].style.display = "none";
  //   leftHolder.style.transform = "rotateZ(360deg) skewY(-30deg)";
    samplediv[i].style.animationName = "rotateDivBack";
    samplediv[i].style.animationDuration = "1s";
   samplediv[i].style.transform = "scale(1) rotate(0) skewY(30deg)"; 
    btnText[i].innerHTML = "MORE"; 
    samplediv[i].style.width = "100%";
        samplediv[i].style.height = "100%";
    close[i].style.opacity= 0;
    samplediv[i].style.fontSize ="15px";
         samplediv[i].style.zIndex= "1";
 
  });
})(i);
    }



  
 

  var rdots = document.querySelectorAll('.rdots');
  var rmoreText = document.querySelectorAll('.rmore');
  var rbtnText = document.querySelectorAll('.rmyBtn');
//const leftHolder=document.querySelectorAll('.leftHolder');
   var rsamplediv = document.querySelectorAll(".rsamplediv");
   var rclose = document.querySelectorAll('.rclose');
var rStatementsContents = document.querySelectorAll('.rStatementsContents');
 //   rbtnText.style.color = "#000";

for(var i =0; i<rbtnText.length; i++){
(function(i) {
    rbtnText[i].addEventListener('click', function(){
    rbtnText[i].innerHTML = ""; 
    rbtnText[i].style.color = "#000";
    rclose[i].style.opacity= 1;
    rclose[i].style.padding="12px";
    rsamplediv[i].style.animationName = "rotateDivOnR";
    rsamplediv[i].style.animationDuration = "1s";
    rdots[i].style.display = "none";
    rmoreText[i].style.display = "block";
    rsamplediv[i].style.width = "150%";
      rsamplediv[i].style.height= "150%";
    rStatementsContents[i].style.padding = "30px";
    rsamplediv[i].style.transform = "rotate(0)";
        rsamplediv[i].style.zIndex = "10";
            rsamplediv[i].style.fontSize ="18px";
    });

  })(i);
(function(i) {

 rclose[i].addEventListener('click', function(){
   rdots[i].style.display = "inline";
    rmoreText[i].style.display = "none";
  //   leftHolder.style.transform = "rotateZ(360deg) skewY(-30deg)";
    rsamplediv[i].style.animationName = "rotateDivBackR";
    rsamplediv[i].style.animationDuration = "1s";
    rbtnText[i].innerHTML = "MORE"; 
    rsamplediv[i].style.width = "100%";
    rsamplediv[i].style.transform = "scale(1) rotateZ(-60deg) skewY(30deg)"; 
        rsamplediv[i].style.zIndex = "0";
  rsamplediv[i].style.height = "100%";
      rsamplediv[i].style.fontSize ="15px";
     rclose[i].style.opacity= 0;
      rsamplediv[i].style.zIndex = "1";

  });

  })(i)
}


// function openModal() {
//   document.getElementById("myModal").style.display = "block";
// }

// function closeModal() {
//   document.getElementById("myModal").style.display = "none";
// }



// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("demo");
//   var captionText = document.getElementById("caption");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < slides.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
//   captionText.innerHTML = dots[slideIndex-1].alt;
// }

// var abigaleImages1 = document.getElementById('abigaleImages1');
//   abigaleImages1.addEventListener('click', function () {
//  document.body.style.backgroundColor = "red";
//   //  galleries[i].style.opacity=1;
   
// });


