//获取系统主题
window.onload=function(){
	const mediaQueryListDark = window.matchMedia('(prefers-color-scheme: dark)');
	if (mediaQueryListDark.matches) {
	  // 系统当前是暗色(dark)主题
	}
	
	const mediaQueryListLight = window.matchMedia('(prefers-color-scheme: light)');
	if (mediaQueryListLight.matches) {
	  // 系统当前是亮色(light)主题
	}
}

window.onload=function(){
	
	if (window.localStorage.getItem("theme")==null) {
		window.localStorage.setItem("theme",0);
	}
	
	document.getElementsByTagName("body").style.backgroundColor=window.localStorage.getItem("color");
}

window.addEventListener("storage", function (e) {
	if(e.key == "color" && e.newValue) {
		document.getElementById("h-top").style.backgroundColor=window.localStorage.getItem("color");
	}
});