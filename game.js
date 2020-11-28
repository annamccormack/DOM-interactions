// Don't change or delete this line! It waits until the DOM has loaded, then calls 
// the start function. More info: 
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start() {
  bindEventListeners(document.getElementsByClassName('board')[0].children)
}

function bindEventListeners(dots) {
  for (var i = 0; i < dots.length; i++) {
    // BIND YOUR EVENT LISTENERS HERE
    // The first one is provided for you
    dots[i].addEventListener('contextmenu', makeGreen)
    dots[i].addEventListener('click', makeBlue)
    dots[i].addEventListener('dblclick', hide)
  }
}

function makeGreen(evt) {
  evt.preventDefault()
  evt.target.classList.toggle('green')
  updateCounts()
}

// CREATE FUNCTION makeBlue HERE
function makeBlue(evt) {
  evt.target.classList.toggle('blue')
  updateCounts()
}

// CREATE FUNCTION hide HERE

function hide(evt) {
  evt.target.classList.toggle('invisible')
  updateCounts()
}


function updateCounts() {
  var totals = {
    blue: 0,
    green: 0,
    invisible: 0
  }
  // WRITE CODE HERE TO COUNT BLUE, GREEN, AND INVISIBLE DOTS

  let blueArray = document.getElementsByClassName('blue');
  totals.blue = blueArray.length

  let greenArray = document.getElementsByClassName('green');
  totals.green = greenArray.length

  let invisibleArray = document.getElementsByClassName('invisible');
  totals.invisible = invisibleArray.length
 
  // Once you've done the counting, this function will update the display
  displayTotals(totals)
}

function displayTotals(totals) {
  for (var key in totals) {
    document.getElementById(key + '-total').innerHTML = totals[key]
  }
}


// the number of 'blue' classes = property value (number of blue dots) within the totals object. 
// the property value = the array length of the array created from document.getElementsByClassName('')

// 1. create a vairable that contains the array from document.getElementsByClassName??

// let blueArray = document.getElementsByClassName('blue'); 
// console.log(blueArray.length);

//  2. change property value to length of the array 

// totals.blue = blueArray.length

// 3. repeat for green and invisible dots

// 4. can I make a function that that I can pass in blue, green and invisible as arguements to make my code less reptitive?

// attempt 1:
/*function findTotals (prop) {
  let array = document.getElementsByClassName(prop);
  totals.prop = array.length;
}
findTotals('blue'); */

//attempt:2

/*function findTotals (dots, prop) {
  let array = document.getElementsByClassName(dots)
  totals.prop = array.length
}

findTotals('green', green) */


