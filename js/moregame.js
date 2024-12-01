function 加载作品(i,id){
	
	var img=$(".game_show_box img:eq("+i+")");
	var name=$(".game_show_box h4:eq("+i+")");
	var authorname=$(".game_show_box h5:eq("+i+")");
	
	img.attr("src",game[id].img);
	name.text(game[id].name);
	authorname.text(author[game[id].author].name);
	
	img.click(function(){window.location.href="../games/?gameid="+id});
	name.click(function(){window.location.href="../games/?gameid="+id});
	authorname.click(function(){window.open("../other/author.html?id="+game[id].author)});
	
}