window.onload=function(){
	
	if (window.localStorage.getItem("color")==null) {
		window.localStorage.setItem("color","hsla(144,54%,30%,100%)");
	}
	
	document.getElementById("h-top").style.backgroundColor=window.localStorage.getItem("color");
}

window.addEventListener("storage", function (e) {
	if(e.key == "color" && e.newValue) {
		document.getElementById("h-top").style.backgroundColor=window.localStorage.getItem("color");
	}
});