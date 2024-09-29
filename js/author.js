author=[];
author[0]={name:"小小小猴子",sex:"男",img:"../img/members/xxxhz1024.jpg",pro:"一名初中生，站长",bg:"../img/background/author_bg/Winter.svg",tag:["站长"],url:{bilibili:"https://space.bilibili.com/53083150",微信:"xxxhz1024"}};
author[1]={name:"土豆江山",sex:"男",img:"../img/members/potato.jpg"};


function 寻找作者的作品id(作者id){
	var arr=[];
	for (var i = 0; i < game.length; i++) {
		if (game[i].author==作者id) {
			arr[arr.length]=i;
		}
	}
	return arr;
}