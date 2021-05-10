

  var moreText = document.querySelectorAll('.more');
  var btnText = document.querySelectorAll('.myBtn');
var leftHolder=document.querySelectorAll('.leftHolder');
var samplediv = document.querySelectorAll(".samplediv");
var close = document.querySelectorAll('.close');
var dots = document.querySelectorAll('.dots');
var lStatementsContents = document.querySelectorAll('.lStatementsContents');
var i= 0;
for(i =0; i<btnText.length; i++){
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
    samplediv[i].style.width = "200%";
    lStatementsContents[i].style.padding = "20px";
    samplediv[i].style.transform = "rotate(0)";
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
    btnText[i].innerHTML = "Expand"; 
    samplediv[i].style.width = "100%";
    close[i].style.opacity= 0;

 
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
var i= 0;
for(i =0; i<rbtnText.length; i++){
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
    rsamplediv[i].style.width = "200%";
      rsamplediv[i].style.height= "200%";
    rStatementsContents[i].style.padding = "20px";
    rsamplediv[i].style.transform = "rotate(0)";
        rsamplediv[i].style.zIndex = "10";
    });

  })(i);
(function(i) {

 rclose[i].addEventListener('click', function(){
   rdots[i].style.display = "inline";
    rmoreText[i].style.display = "none";
  //   leftHolder.style.transform = "rotateZ(360deg) skewY(-30deg)";
    rsamplediv[i].style.animationName = "rotateDivBackR";
    rsamplediv[i].style.animationDuration = "1s";
    rbtnText[i].innerHTML = "Expand"; 
    rsamplediv[i].style.width = "100%";
    rclose[i].style.opacity= 0;
    rsamplediv[i].style.transform = "scale(1) rotateZ(-60deg) skewY(30deg)"; 
        rsamplediv[i].style.zIndex = "0";
  rsamplediv[i].style.height = "100%";
 
  });

  })(i)
}

