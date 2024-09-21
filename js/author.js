author=[];
author[0]={name:"小小小猴子",sex:"男",img:"../img/members/xxxhz1024.jpg",pro:"一名初中生，站长",bg:"../img/background/author_bg/Winter.svg"};
author[1]={name:"土豆江山",sex:"男",img:"../img/members/potato.jpg"};

function 寻找作者id(作者名){
	for (var i = 0; i < author.length; i++) {
		if (author[i].name==作者名) {
			return i;
		}
	}
	return 0;
}