var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

	var button =document.createElement("button");
	button.appendChild(document.createTextNode("Done!"));
	li.appendChild(button);
	button.onclick=underlineParent;
// CREATE AN ELEMENT
	var button =document.createElement("button"); 
// APPEND TEXT TO BUTTON
	button.appendChild(document.createTextNode("Delete!")); /* [vagasilac]: This new button won't have the "enter" id,
	so there's no confusion. */
// APPEND BUTTON TO LIST
	li.appendChild(button);

	button.onclick=removeParent; /* [vagasilac]: This is the part of the solution that I could not find out on my own... to call the
	remove-function with "onclick" */

//THIS FUNCTION WILL DO THIS FOR EVERY BUTTON CREATED.
	
}

// ul.onclick = function(event){
// 	var target = event.target;
// 	target.classList.toggle("done");
// }

function underlineParent(event){		/* [vagasilac]: Here, I'll need to understand how this "cross-referencing" of
|event -> event| or |evt -> evt| below works...   also "target" */
	event.target.parentNode.classList.toggle("done");
}

/* Here's a nice explanation for EVENT.TARGET:

// Make a list
const ul = document.createElement('ul');
document.body.appendChild(ul);

const li1 = document.createElement('li');
const li2 = document.createElement('li');
ul.appendChild(li1);
ul.appendChild(li2);

function hide(evt) {
  // evt.target refers to the clicked <li> element
  // This is different than evt.currentTarget, which would refer to the parent <ul> in this context
  evt.target.style.visibility = 'hidden';
}

// Attach the listener to the list
// It will fire when each <li> is clicked
ul.addEventListener('click', hide, false);

*/



function removeParent(evt){
	evt.target.parentNode.remove();
} 

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
