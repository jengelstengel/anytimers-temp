//Function which closes the buttons
function closeButtons() {
  document.getElementById("add-bttn").style.transform = "translate(0,0)";
  document.getElementById("drink-bttn").style.transform = "translate(0,0)";
  document.getElementById("drink-bttn").style.backgroundColor = "#31b16c";
  document.getElementById("beer-bttn").style.display = "block";
}

// Opening the drink buttons when pressing the beer button
function on() {
  overlayToggle();
  document.getElementById("add-bttn").style.transform = "translate(-30px, -60px)";
  document.getElementById("drink-bttn").style.transform = "translate(-65px, -10px)";
  document.getElementById("drink-bttn").style.backgroundColor = "rgb(255, 91, 91)";
  document.getElementById("beer-bttn").style.display = "none";
  document.getElementById("profile").style.color = "rgba(0, 0, 0, 0.5)";
}

// Closing the drink buttons when pressing the cross
function off() {
  closeButtons();
  overlayToggle();
  document.getElementById("profile").style.color = "#31b16c";
  //Closing profileAside
  document.getElementById("profileAside").setAttribute("style", "right: -15rem;");
}

//Opening profile profileAsideOpen
function profileAsideOpen() {
  overlayToggle();
  document.getElementById("profileAside").setAttribute("style", "right: 0;");
}

// Opening the add page
function testadd() {
  document.getElementById("testadd").style.display = "block";
  document.getElementById("app").style.display = "none";
}

// Closing the add page + button update
function testaddoff() {
  closeButtons();
  overlayToggle();
  document.getElementById("testadd").style.display = "none";
  document.getElementById("app").style.display = "block";
  document.getElementById("profile").style.color = "#31b16c";
}

// Opening the drink page
function testdrink() {
  document.getElementById("testdrink").style.display = "block";
  document.getElementById("app").style.display = "none";
}

// Closing the drink page + button update
function testdrinkoff() {
  closeButtons();
  overlayToggle();
  document.getElementById("testdrink").style.display = "none";
  document.getElementById("app").style.display = "block";
  document.getElementById("profile").style.color = "#31b16c";
}


// Increasing add value
function increaseAddValue() {
  var score = parseInt(document.getElementById('addValue').innerHTML);
    score = score+1;
    document.getElementById('addValue').innerHTML = score;
}
// Decrease add value
function decreaseAddValue() {
  var score = parseInt(document.getElementById('addValue').innerHTML);
  //check if score is not below zero
  if (score >= 1) {
    score = score-1;
    document.getElementById('addValue').innerHTML = score;
  }
}

// Increasing drink value
function increaseDrinkValue() {
  var score = parseInt(document.getElementById('drinkValue').innerHTML);
    score = score+1;
    document.getElementById('drinkValue').innerHTML = score;
}
// Decrease drink value
function decreaseDrinkValue() {
  var score = parseInt(document.getElementById('drinkValue').innerHTML);
  //check if score is not below zero
  if (score >= 1) {
    score = score-1;
    document.getElementById('drinkValue').innerHTML = score;
  }
}

//Overlay toggle
function overlayToggle() {
  var x = document.getElementById('overlay');
  if (x.style.display === "block") {
    x.setAttribute("style", "background-color: transparent; display: none;");
  } else{
    x.setAttribute("style", "background-color: rgba(0, 0, 0, 0.5); display: block;");
  }
}

//Simple jQuery slideToggle to show anytimer details
var flag = false;
$(document).ready(function(){
  $(".user").on( 'touchstart click', function(){
    if (!flag) {
      flag = true;
      setTimeout(function(){flag = false;}, 100);
      $(".userList").slideToggle("fast, easeOutQuart");
    }
  });
});


//jQuery slideToggle for picking a group
$(document).ready(function(){
  $(".group").on( 'touchstart click', function(){
    if (!flag) {
      flag = true;
      setTimeout(function(){flag = false;}, 100);
    $(".groupList").slideToggle("fast, easeOutQuart");
  }
  });
});
