console.log("javascript loaded");

// ================ CURSOR ================
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.pageX + 'px';
  cursor.style.top = e.pageY + 'px';
})

function invisible(div){
  div.style.fontSize = "0";
}

/*

function addEvent(obj, evt, fn) {
  if (obj.addEventListener) {
      obj.addEventListener(evt, fn, false);
  }
  else if (obj.attachEvent) {
      obj.attachEvent("on" + evt, fn);
  }
}

addEvent(document, "mouseout", function(e) {
  e = e ? e : window.event;
  var from = e.relatedTarget || e.toElement;
  if (!from || from.nodeName == "HTML") {
      cursor.style.width = '0';
  }
});
*/

// ================ JQUERY ================

var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
document.getElementsByTagName('head')[0].appendChild(script);

/*
$(".down").click(function() {
  $([document.documentElement, document.body]).animate({
      scrollTop: $("#project2").offset().top
  }, 2000);
});*/