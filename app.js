'use strict';
var pageNum = document.getElementById('num'),
	catv = document.getElementById('v');

function cat(src , name){
	var num = 0 , img , numv , catNV;
	img = document.createElement('img');
	img.setAttribute('src','pic/'+src);
	catv.appendChild(img);

	numv = document.createElement('p');
	numv.textContent = num ;
	pageNum.appendChild(numv);

	catNV = document.createElement('p');
	catNV.textContent = name ;
	pageNum.appendChild(catNV);

	img.addEventListener('click',function(){
		num ++ ;
		numv.textContent = num ;
	});
}


cat('pespes.jpg','Pespes');
cat('nemo.jpg','Nemo');