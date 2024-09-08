//盒子
var game_box=document.getElementById("game_box");
var game_box_left=document.getElementById("game_box_left");
var game_box_middle=document.getElementById("game_box_middle");
//游玩窗口
var game_window=document.getElementById("game_window");
//作品信息
var game_name=document.getElementById("game_name");
var game_author_name=document.getElementById("game_author_name");
var game_pro=document.getElementById("game_pro");
var game_explain=document.getElementById("game_explain");
//按钮
var bt_zoom_large=document.getElementById("zoom_large");
var bt_zoom_small=document.getElementById("zoom_small");
var bt_reload=document.getElementById("reload");

//获取url传参
const searchParams = new URLSearchParams(window.location.search);
gameid=searchParams.get('gameid')*1

//设值
game_name.innerText=game[gameid].name;
game_author_name.innerText=game[gameid].author;
game_pro.innerHTML=game[gameid].pro;
game_explain.innerHTML=game[gameid].explain;

//游戏窗口设定
game_window.src=game[gameid].url;
game_window.width=game[gameid].res[0];
game_window.height=game[gameid].res[1];
game_box_left.style.width=(game_window.width*1+20)+"px";
game_box.style.width=game_box.offsetWidth+game_box_left.offsetWidth-500+"px";

//介绍栏高度设定
game_box_middle.style.height=30+game_window.offsetHeight+"px";

function random(n,m){
	return Math.floor(Math.random()*(m-n+1))+n;
}


function 放大(){
	game_box.style.width=game_box.offsetWidth+game_window.width*0.25+"px";
	game_box_left.style.width=game_box_left.offsetWidth+game_window.width*0.25+"px";
	game_window.width=game_window.width*1.25;
	game_window.height=game_window.height*1.25;
	game_box_middle.style.height=30+game_window.offsetHeight+"px";
}
function 缩小(){
	game_box.style.width=game_box.offsetWidth-game_window.width*0.2+"px";
	game_box_left.style.width=game_box_left.offsetWidth-game_window.width*0.2+"px";
	game_window.width=game_window.width*0.8;
	game_window.height=game_window.height*0.8;
	game_box_middle.style.height=30+game_window.offsetHeight+"px";
}
function 刷新(){
	game_window.src=game_window.src;
}
function 跳转(){
	location.href="../games/?gameid="+this.number;
}

bt_zoom_large.onclick=放大
bt_zoom_small.onclick=缩小
bt_reload.onclick=刷新

//右侧推荐栏
show_img=document.getElementsByClassName("game_show_img");
show_text=document.getElementById("game_box_right").getElementsByTagName("h4");
for (var i = 0; i < show_img.length; i++) {
	var cache=random(0,game.length-1);
	show_img[i].src=game[cache].img;
	show_text[i].innerText=game[cache].name;
	//给跳转函数传入参数
	show_img[i].number=cache;show_img[i].onclick=跳转;
	show_text[i].number=cache;show_text[i].onclick=跳转;
}