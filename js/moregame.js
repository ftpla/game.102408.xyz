function 加载作品(i,id){
	
	var img=$("#moregame_box img:eq("+i+")");
	var name=$("#moregame_box h4:eq("+i+")");
	var author=$("#moregame_box h5:eq("+i+")");
	
	img.attr("src",game[id].img);
	name.text(game[id].name);
	author.text(game[id].author);
	
	img.click(function(){window.open("../games/?gameid="+id)});
	name.click(function(){window.open("../games/?gameid="+id)});
	author.click(function(){});
	
}
for (var i = 0; i < 10; i++) {
	加载作品(i,random(0,game.length-1));
}