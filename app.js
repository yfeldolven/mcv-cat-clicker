'use strict';
var catV = document.getElementById('v'),
	cats = ['foody','mshmsh','nemo','nyny','pespes','smarty','utut'],
	catNum = [];

for(var i=0 ; i<cats.length ; i++){

	var catList = document.createElement('span');
	catList.textContent = cats[i] ;
	catList.setAttribute('class','list');
	catV.appendChild(catList);



	catList.addEventListener('click', (function(i){

		return function(){
			var img , numv , catNV , div;
			
			div = document.createElement('div');
        
			catNV = document.createElement('p');
			catNV.textContent = cats[i] ;
			div.appendChild(catNV);

			numv = document.createElement('p');
			if(catNum[i]==null){catNum[i]=0;}
			numv.textContent = catNum[i] ; 
			div.appendChild(numv);

			img = document.createElement('img');
			img.setAttribute('src','pic/'+ cats[i] +'.jpg');
			img.style.width = '300px';
			div.appendChild(img);


			if(catV.childElementCount>cats.length){
				catV.replaceChild(div,catV.childNodes[cats.length]);
			}else{
				catV.appendChild(div);
			}
			
			
			img.addEventListener('click',function(){
				catNum[i] ++ ;
				numv.textContent = catNum[i] ;
				
			});
		};
	} (i) )
	);
}