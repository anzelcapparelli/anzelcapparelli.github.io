// Get the modal
// var modal = document.getElementById("myModal");
var modal = document.getElementsByClassName("projectDesc")[0];

// Get the button that opens the modal
var toggler = document.getElementsByClassName("projects")[0];


// Get the <span> element that closes the modal

var span = document.getElementsByClassName("close")[0];
// console.log(document.getElementsByClassName("close"));

// When the user clicks on the button, open the modal
toggler.onclick = function (event) {
    if (event.target.tagName !== "IMG") return
    document.getElementById(event.target.dataset.index).style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function (event) {
    // parentNode.parentNode
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {

    if (event.target.classList.contains("modal")) {
        event.target.style.display = "none";
    }
}