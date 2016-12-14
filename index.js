$( window ).scroll( function (e) {
  $('#background').css({ 'filter' : 'blur(' + $(this).scrollTop()/20 + 'px)'});
});


//******************* CSS **********************//
// NATIF
var logo = document.getElementById('logo');
logo.style.width = '185px';

// JQUERY
$('#logo').css({
  'width' : '185px'
});

//******************* ANIMATE **********************//
// NATIF
var logo = document.getElementById('logo');
var length = 1000;
var frequence = 16;
var goalWidth = logo.offsetWidth * 2;

var nombreDeStep = 1000/16;
stepWidth = logo.offsetWidth/nombreDeStep;

var animate = function () {
  var width = logo.offsetWidth
  logo.style.width =  width + stepWidth + 'px';
  if(width >= goalWidth) {
    clearInterval(intervalID);
  }
}

//var intervalID = window.setInterval(animate, frequence);

// JQUERY
$('#logo').animate({
  'width' : '370px'
}, 1000);

//******************* EVENT LISTENER **********************//
//NATIF

var logo = document.getElementById('logo');

logo.addEventListener('click', function(event) {
  console.log(event);
});


//JQUERY
$('#logo').click(function (event) {
  console.log(event);
});

//********************* ITERER ************************//
// NATIF

// Array
[0, 1].forEach ( function (element, index) {
  console.log(element);
});

// Object
var obj = {a: "abeille", b: "barbe"};
var keys = Object.keys[obj];

keys.forEach ( function (element, index) {
  console.log(obj[element]);
});

// JQUERY

// Array
$.each([0,1], function( index, element ){
  console.log(element);
});

// Object
$.each({a: "abeille", b: "barbe"}, function (index, element) {

});

//********************* AJAX ************************//
// NATIF
var xmlhttp = new XMLHttpRequest();

  xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == XMLHttpRequest.DONE ) {ch
         if (xmlhttp.status == 200) {
            console.log(xmlhttp.responseText);
         }
         else if (xmlhttp.status == 400) {
            console.log('There was an error 400');
         }
         else {
            console.log(xmlhttp.status);
         }
      }
  };

  xmlhttp.open("GET", "data.json", true);
  xmlhttp.send();


// JQUERY
$.get('data.json').then( function (data) {
  console.log(data);
});
