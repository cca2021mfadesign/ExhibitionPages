
  function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
  document.getElementById("popup-btn1").classList.toggle("rot");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var downArrows = document.getElementsByClassName("centerButton1");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');

      }
    }

    for(let i=0; i<downArrows.length;i++){
      var downArrow = downArrows[i];
      if(downArrow.classList.contains('rot')){
        downArrow.classList.remove('rot');
      }
    }
  }
}
  var popup = document.getElementById('popup-wrapper');
var btn = document.getElementById("popup-btn");
var span = document.getElementById("close");
btn.onclick = function() {
    popup.classList.add('show');
}
span.onclick = function() {
    popup.classList.remove('show');
}

window.onclick = function(event) {
    if (event.target == popup) {
        popup.classList.remove('show');
    }
}
