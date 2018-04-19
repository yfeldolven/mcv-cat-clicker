'use strict';
var catV = document.getElementById('v');

function cat(src , name){
    var num = 0 , img , numv , catNV;
    
    catNV = document.createElement('p');
	catNV.textContent = name ;
	catV.appendChild(catNV);
    
	numv = document.createElement('p');
	numv.textContent = num ;
	catV.appendChild(numv);

	img = document.createElement('img');
    img.setAttribute('src','pic/'+src);
    img.style.width = '300px';
	catV.appendChild(img);

	img.addEventListener('click',function(){
		num ++ ;
		numv.textContent = num ;
	});
}


cat('pespes.jpg','Pespes');
cat('nemo.jpg','Nemo');