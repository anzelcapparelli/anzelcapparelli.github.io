// Get the modal
// var modal = document.getElementById("myModal");
var modal = document.getElementsByClassName("projectDesc")[0];

// Get the button that opens the modal
// var toggler = document.getElementById("projectPic");
var toggler = document.getElementsByClassName("projects")[0];
// var toggler = document.getElementsByClassName("projectPic");
console.log(toggler.tagName)


// Get the <span> element that closes the modal

var span = document.getElementsByClassName("close")[0];
// console.log(document.getElementsByClassName("close"));

// When the user clicks on the button, open the modal
toggler.onclick = function(event) {
    if(event.target.tagName !== "IMG") return
    console.log(event.target.dataset.index)
    document.getElementById(event.target.dataset.index).style.display = "block";
//   modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function(event) {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}