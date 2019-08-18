// declare and assign desktop drop-down menu variables

var dropDownMenus = document.getElementsByClassName("dt-dd-menu");
var dropDownMenuButtons = document.getElementsByClassName("dt-dd-but");

var dropDownOneEls = document.getElementsByClassName("dd-tab-1-element");

// start of desktop drop-down menus hide/show

function showDropDownMenu() {
	if (dropDownMenus[0].style.visibility == "hidden") {
	for (i = 0; dropDownMenus.length > i; i++) {
		dropDownMenus[i].style.visibility = "hidden";
	} 
	}
	dropDownMenus[0].style.visibility = "visible";
	dropDownMenuButtons[0].style.transition = "2s";
	dropDownMenuButtons[0].style.backgroundColor = "white";
	dropDownMenuButtons[0].style.fontSize = "2vw";
	dropDownMenuButtons[0].style.color = "silver";
	dropDownMenus[0].style.transition = "1s";
	dropDownMenus[0].style.height = "400%";
	dropDownMenus[0].style.opacity = "1";
}


function showDropDownMenu2() {
	if (dropDownMenus[1].style.visibility == "hidden") {
	for (i = 0; dropDownMenus.length > i; i++) {
		dropDownMenus[i].style.visibility = "hidden";
	}
	}
    dropDownMenus[1].style.visibility = "visible";
	dropDownMenuButtons[1].style.transition = "2s";
	dropDownMenuButtons[1].style.backgroundColor = "white";
	dropDownMenuButtons[1].style.fontSize = "2vw";
	dropDownMenuButtons[1].style.color = "silver";
	dropDownMenus[1].style.transition = "1s";
	dropDownMenus[1].style.height = "400%";
	dropDownMenus[1].style.opacity = "1";
}

function showDropDownMenu3() {
	if (dropDownMenus[2].style.visibility == "hidden") {
	for (i = 0; dropDownMenus.length > i; i++) {
		dropDownMenus[i].style.visibility = "hidden";
	}
	}
	dropDownMenus[2].style.visibility = "visible";
	dropDownMenuButtons[2].style.transition = "2s";
	dropDownMenuButtons[2].style.backgroundColor = "white";
	dropDownMenuButtons[2].style.fontSize = "2vw";
	dropDownMenuButtons[2].style.color = "silver";
	dropDownMenus[2].style.transition = "1s";
	dropDownMenus[2].style.height = "400%";
	dropDownMenus[2].style.opacity = "1";
}

function showDropDownMenu4() {
	if (dropDownMenus[3].style.visibility == "hidden") {
	for (i = 0; dropDownMenus.length > i; i++) {
		dropDownMenus[i].style.visibility = "hidden";
	}
	}
	dropDownMenus[3].style.visibility = "visible";
	dropDownMenuButtons[3].style.transition = "2s";
	dropDownMenuButtons[3].style.backgroundColor = "white";
	dropDownMenuButtons[3].style.fontSize = "2vw";
	dropDownMenuButtons[3].style.color = "silver";
	dropDownMenus[3].style.transition = "1s";
	dropDownMenus[3].style.height = "400%";
	dropDownMenus[3].style.opacity = "1";
}

function showDropDownMenu5() {
	if (dropDownMenus[4].style.visibility == "hidden") {
	for (i = 0; dropDownMenus.length > i; i++) {
		dropDownMenus[i].style.visibility = "hidden";
	}
	}
	dropDownMenus[4].style.visibility = "visible";
	dropDownMenuButtons[4].style.transition = "2s";
	dropDownMenuButtons[4].style.backgroundColor = "white";
	dropDownMenuButtons[4].style.fontSize = "2vw";
	dropDownMenuButtons[4].style.color = "silver";
	dropDownMenus[4].style.transition = "1s";
	dropDownMenus[4].style.height = "400%";
	dropDownMenus[4].style.opacity = "1";
}

function showDropDownMenu6() {
	if (dropDownMenus[5].style.visibility == "hidden") {
	for (i = 0; dropDownMenus.length > i; i++) {
		dropDownMenus[i].style.visibility = "hidden";
	}
	}
	dropDownMenus[5].style.visibility = "visible";
	dropDownMenuButtons[5].style.transition = "2s";
	dropDownMenuButtons[5].style.backgroundColor = "white";
	dropDownMenuButtons[5].style.fontSize = "2vw";
	dropDownMenuButtons[5].style.color = "silver";
	dropDownMenus[5].style.transition = "1s";
	dropDownMenus[5].style.height = "400%";
	dropDownMenus[5].style.opacity = "1";
}

function showDropDownMenu7() {
	if (dropDownMenus[6].style.visibility == "hidden") {
	for (i = 0; dropDownMenus.length > i; i++) {
		dropDownMenus[i].style.visibility = "hidden";
	}
	}
	dropDownMenus[6].style.visibility = "visible";
	dropDownMenuButtons[6].style.transition = "2s";
	dropDownMenuButtons[6].style.backgroundColor = "white";
	dropDownMenuButtons[6].style.fontSize = "2vw";
	dropDownMenuButtons[6].style.color = "silver";
	dropDownMenus[6].style.transition = "1s";
	dropDownMenus[6].style.height = "400%";
	dropDownMenus[6].style.opacity = "1";
}

dropDownMenuButtons[0].addEventListener ("mouseover", showDropDownMenu, false);
dropDownMenuButtons[1].addEventListener ("mouseover", showDropDownMenu2, false);
dropDownMenuButtons[2].addEventListener ("mouseover", showDropDownMenu3, false);
dropDownMenuButtons[3].addEventListener ("mouseover", showDropDownMenu4, false);
dropDownMenuButtons[4].addEventListener ("mouseover", showDropDownMenu5, false);
dropDownMenuButtons[5].addEventListener ("mouseover", showDropDownMenu6, false);
dropDownMenuButtons[6].addEventListener ("mouseover", showDropDownMenu7, false);

function hideDropDownMenu () { 
	dropDownMenus[0].style.visibility = "hidden";
	dropDownMenuButtons[0].style.transition = "1s";
	dropDownMenuButtons[0].style.backgroundColor = "dimgrey";
	dropDownMenuButtons[0].style.fontSize = "inherit";
	dropDownMenuButtons[0].style.color = "white";
	dropDownMenus[0].style.transition = "0.5s";
	dropDownMenus[0].style.height = "0";
	dropDownMenus[0].style.opacity = "0";
	
}

function hideDropDownMenu2 () { 
	dropDownMenus[1].style.visibility = "hidden";
	dropDownMenuButtons[1].style.transition = "1s";
	dropDownMenuButtons[1].style.backgroundColor = "dimgrey";
	dropDownMenuButtons[1].style.fontSize = "inherit";
	dropDownMenuButtons[1].style.color = "white";
	dropDownMenus[1].style.transition = "0.5s";
	dropDownMenus[1].style.height = "0";
	dropDownMenus[1].style.opacity = "0";
}

function hideDropDownMenu3 () { 
	dropDownMenus[2].style.visibility = "hidden";
	dropDownMenuButtons[2].style.transition = "1s";
	dropDownMenuButtons[2].style.backgroundColor = "dimgrey";
	dropDownMenuButtons[2].style.fontSize = "inherit";
	dropDownMenuButtons[2].style.color = "white";
	dropDownMenus[2].style.transition = "0.5s";
	dropDownMenus[2].style.height = "0";
	dropDownMenus[2].style.opacity = "0";
}

function hideDropDownMenu4 () { 
	dropDownMenus[3].style.visibility = "hidden";
	dropDownMenuButtons[3].style.transition = "1s";
	dropDownMenuButtons[3].style.backgroundColor = "dimgrey";
	dropDownMenuButtons[3].style.fontSize = "inherit";
	dropDownMenuButtons[3].style.color = "white";
	dropDownMenus[3].style.transition = "0.5s";
	dropDownMenus[3].style.height = "0";
	dropDownMenus[3].style.opacity = "0";
}

function hideDropDownMenu5 () { 
	dropDownMenus[4].style.visibility = "hidden";
	dropDownMenuButtons[4].style.transition = "1s";
	dropDownMenuButtons[4].style.backgroundColor = "dimgrey";
	dropDownMenuButtons[4].style.fontSize = "inherit";
	dropDownMenuButtons[4].style.color = "white";
	dropDownMenus[4].style.transition = "0.5s";
	dropDownMenus[4].style.height = "0";
	dropDownMenus[4].style.opacity = "0";
}

function hideDropDownMenu6 () { 
	dropDownMenus[5].style.visibility = "hidden";
	dropDownMenuButtons[5].style.transition = "1s";
	dropDownMenuButtons[5].style.backgroundColor = "dimgrey";
	dropDownMenuButtons[5].style.fontSize = "inherit";
	dropDownMenuButtons[5].style.color = "white";
	dropDownMenus[5].style.transition = "0.5s";
	dropDownMenus[5].style.height = "0";
	dropDownMenus[5].style.opacity = "0";
}

function hideDropDownMenu7 () { 
	dropDownMenus[6].style.visibility = "hidden";
	dropDownMenuButtons[6].style.transition = "1s";
	dropDownMenuButtons[6].style.backgroundColor = "dimgrey";
	dropDownMenuButtons[6].style.fontSize = "inherit";
	dropDownMenuButtons[6].style.color = "white";
	dropDownMenus[6].style.transition = "0.5s";
	dropDownMenus[6].style.height = "0";
	dropDownMenus[6].style.opacity = "0";
}

dropDownMenuButtons[0].addEventListener ("mouseout", hideDropDownMenu, false);
dropDownMenus[0].addEventListener ("mouseover", showDropDownMenu, false);
dropDownMenus[0].addEventListener ("mouseout", hideDropDownMenu,false);


dropDownMenuButtons[1].addEventListener ("mouseout", hideDropDownMenu2, false);
dropDownMenus[1].addEventListener ("mouseover", showDropDownMenu2, false);
dropDownMenus[1].addEventListener ("mouseout", hideDropDownMenu2,false);

dropDownMenuButtons[2].addEventListener ("mouseout", hideDropDownMenu3, false);
dropDownMenus[2].addEventListener ("mouseover", showDropDownMenu3, false);
dropDownMenus[2].addEventListener ("mouseout", hideDropDownMenu3,false);

dropDownMenuButtons[3].addEventListener ("mouseout", hideDropDownMenu4, false);
dropDownMenus[3].addEventListener ("mouseover", showDropDownMenu4, false);
dropDownMenus[3].addEventListener ("mouseout", hideDropDownMenu4,false);


dropDownMenuButtons[4].addEventListener ("mouseout", hideDropDownMenu5, false);
dropDownMenus[4].addEventListener ("mouseover", showDropDownMenu5, false);
dropDownMenus[4].addEventListener ("mouseout", hideDropDownMenu5,false);

dropDownMenuButtons[5].addEventListener ("mouseout", hideDropDownMenu6, false);
dropDownMenus[5].addEventListener ("mouseover", showDropDownMenu6, false);
dropDownMenus[5].addEventListener ("mouseout", hideDropDownMenu6,false);

dropDownMenuButtons[6].addEventListener ("mouseout", hideDropDownMenu7, false);
dropDownMenus[6].addEventListener ("mouseover", showDropDownMenu7, false);
dropDownMenus[6].addEventListener ("mouseout", hideDropDownMenu7,false);

// end of drop-down menu programming
	


// start of mobile dropdown menu progamming 

var row2 = document.getElementById("row-2");

var mobileMenuDdButton = document.getElementById("menu-icon");
var devAspRat;

function aspRatCalc() {

var devW = window.innerWidth;

var devH = window.innerHeight;

devAspRat = devW/devH;
};

function hideMobileDropDownMenu()  {
		row2.style.transition = "2s";
		row2.style.height = "0";
		row2.style.opacity = "0";
		setTimeout(function(){row2.style.visibility = "hidden"; }, 2000);
};

function displayMobileDropDownMenu () {
	if (row2.style.visibility == "visible") {
		hideMobileDropDownMenu();
	}
	else {
		row2.style.transition = "2s";
		row2.style.visibility = "visible";
		row2.style.opacity = "1";
		if (devAspRat > 1) {
		row2.style.height = "80vh";
		}
		else {
		row2.style.height = "87.5vh";
		}
}
};


// hide menus on resize

mobileMenuDdButton.addEventListener("click", displayMobileDropDownMenu, false);

window.addEventListener("resize", aspRatCalc, false);

window.addEventListener("resize", function() 
{row2.style.transition = "0s"; row2.style.height = "0"; row2.style.opacity = "0"; row2.style.visibility = "hidden"; 
row2.transition = "2s";} , false);

var formCounter = 0;
var formStage = document.getElementsByClassName("stage-wrap");
var rightControl = document.getElementsByClassName("right-control");
var leftControl = document.getElementsByClassName("left-control");

function formRight () {
	for(i = 0; i < formStage.length; i++) {
		formStage[i].style.width = "0";
		formStage[i].style.opacity = "0";
		setTimeout(function(){formStage[i].style.display = "none";}, 1200);
		
	}
	if((formCounter+1) < formStage.length) {
	formCounter++;
	}
	else {
		formCounter = 0;
	}
	formStage[formCounter].style.display = "flex";
	setTimeout(function(){
	formStage[formCounter].style.width = "80vw";
	formStage[formCounter].style.opacity = "1";},
	50)
		
	}
	
function formLeft () {
	for(i = 0; i < formStage.length; i++) {
		formStage[i].style.width = "0";
		formStage[i].style.opacity = "0";
		setTimeout(function(){formStage[i].style.display = "none";}, 1200);
		
	}
	if(formCounter != 0) {
	formCounter--;
	}
	else {
		formCounter = (formStage.length - 1);
	}
	formStage[formCounter].style.display = "flex";
	setTimeout(function(){
	formStage[formCounter].style.width = "80vw";
	formStage[formCounter].style.opacity = "1";},
	50)
		
	}

for(i=0; i < rightControl.length; i++) {
	rightControl[i].addEventListener("click", formRight, false);
}

for(i=0; i < leftControl.length; i++) {
	leftControl[i].addEventListener("click", formLeft, false);
}

// Text Editor 

var textEditor = document.getElementsByClassName('text-editor');
var textInput = document.getElementsByClassName('text-input');

function boldEdit() {
		
		if(event.target.classList.contains("bold")) {
		document.execCommand("bold");
		if(event.target.classList.contains("highlight")) {
			event.target.classList.remove("highlight");
		}
		else {
			event.target.classList.add("highlight");
		}
		}
		else if (event.target.classList.contains("underline")) {
		document.execCommand("underline");
		if(event.target.classList.contains("highlight")) {
			event.target.classList.remove("highlight");
		}
		else {
			event.target.classList.add("highlight");
		}
		}
		
		else if (event.target.classList.contains("italic")) {document.execCommand("italic");
				if(event.target.classList.contains("highlight")) {
			event.target.classList.remove("highlight");
		}
		else {
			event.target.classList.add("highlight");
		}
		}
		else if (event.target.classList.contains("unlist")) {document.execCommand("insertUnorderedList"); 
				if(event.target.classList.contains("highlight")) {
			event.target.classList.remove("highlight");
		}
		else {
			event.target.classList.add("highlight");
		}
		}
		else if (event.target.classList.contains("orlist")) {document.execCommand("insertOrderedList");
				if(event.target.classList.contains("highlight")) {
			event.target.classList.remove("highlight");
		}
		else {
			event.target.classList.add("highlight");
		}
		}
}




function checkStyles () {

	var selStart = document.getSelection().getRangeAt(0).startContainer;
	var selEnd = document.getSelection().getRangeAt(0).endContainer;
	var currEl = selStart.parentNode;
	var currTextInput = event.currentTarget.nodeValue;
	var counter = 0;
	var currIndex = ""
	do {
		if (textInput[counter] === event.target) {
		currIndex = counter; }
		counter ++;
	} while (currIndex === "");
	var currStyle = [];
	
	if(selStart.isEqualNode(selEnd)) {
		if(textInput[currIndex].isEqualNode(selStart) == false) {
		i =0;
		while(textInput[currIndex].isEqualNode(currEl) == false) {
		currStyle.push(currEl.nodeName);
		currEl = currEl.parentNode;
		
		};
		}
	}
	
	
	if(currStyle.indexOf("B") != -1) {
		document.getElementsByClassName("bold")[currIndex].classList.add("highlight");
	}
	else {
		document.getElementsByClassName("bold")[currIndex].classList.remove("highlight");
	}
	
	if(currStyle.indexOf("I") != -1) {
		document.getElementsByClassName("italic")[currIndex].classList.add("highlight");
	}
	else {
		document.getElementsByClassName("italic")[currIndex].classList.remove("highlight");
	}
	if(currStyle.indexOf("U") != -1) {
		document.getElementsByClassName("underline")[currIndex].classList.add("highlight");
	}
	else {
		document.getElementsByClassName("underline")[currIndex].classList.remove("highlight");
	}
	if(currStyle.indexOf("UL") != -1) {
		document.getElemenstByClassName("unlist")[currIndex].classList.add("highlight");
	}
	else {
		document.getElementsByClassName("unlist")[currIndex].classList.remove("highlight");
	}
	if(currStyle.indexOf("OL") != -1) {
		document.getElementsByClassName("orlist")[currIndex].classList.add("highlight");
	}
	else {
		document.getElementsByClassName("orlist")[currIndex].classList.remove("highlight");
	}
};
	

for (i=0; i < textInput.length; i++) {

textInput[i].addEventListener("click", checkStyles, false);
textInput[i].addEventListener("keyup", checkStyles, false);
}


for (i = 0; i < textEditor.length; i++) {
textEditor[i].addEventListener("click", boldEdit, false);
textEditor[i].addEventListener("mousedown", function () { event.preventDefault();});

}

// Transfer inputs from text editors //

function transferInputs () {
	textInputs = document.getElementsByClassName("text-input");
	hiddenInputs = document.getElementsByClassName("hidden-input");
	
	for(i = 0; i < textInputs.length; i++) {
		for(j =0; j < hiddenInputs.length; j++) {
			if(textInputs[i].id == hiddenInputs[j].name) {
				hiddenInputs[j].textContent = toString(textInputs[i].innerHTML);
			}
		}

	}

	document.getElementById("generatorForm").submit();
}


document.getElementsByClassName("submit-button")[0].addEventListener("click", transferInputs, false);
	
