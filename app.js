'use strict';

var model = [
	{
		name : 'foody',
		clicks : 0,
		url : 'pic/foody.jpg'
	},
	{
		name : 'mshmsh',
		clicks : 0,
		url : 'pic/mshmsh.jpg'
	},
	{
		name : 'nemo',
		clicks : 0,
		url : 'pic/nemo.jpg'
	},
	{
		name : 'nyny',
		clicks : 0,
		url : 'pic/nyny.jpg'
	},
	{
		name : 'pespes',
		clicks : 0,
		url : 'pic/pespes.jpg'
	}
];
















var octups = {
	add : function(cat , num , src){
		model.push({
			name : cat,
			clicks : num,
			url : 'pic/' + src
		});
	},


	addListContent : function(){
		let i= model.length-1;
		view.addListContent(model[i].name , i);
	},

	catList : function(){
		for(let i=0 ; i<model.length ; i++){
			view.addListContent(model[i].name,i);
		}
	},


	catView : function(i){
		view.catView(
			model[i].name ,
			model[i].clicks ,
			model[i].url ,
			i
		);
	},


	click : function(i){
		model[i].clicks ++ ;
		this.catView(i);
	},

	render : function(){
		view.htmlStructure();
		view.add();
		this.catList();
	}

};














var view = {
	htmlStructure: function(){
		let addCat = document.createElement('div'),
			catList = document.createElement('div'),
			catView = document.createElement('div');

		addCat.setAttribute('id','add-cat');
		catList.setAttribute('id','cat-list');
		catView.setAttribute('id','cat-view');

		document.body.prepend(catView);
		document.body.prepend(catList);
		document.body.prepend(addCat);

	},





	add : function(){
		let input = document.createElement('input'),
			upload = document.createElement('input'),
			submit = document.createElement('input'),
			div = document.getElementById('add-cat');


		input.setAttribute('type','text');
		input.setAttribute('placeHolder','Name Your Cat');
		upload.setAttribute('type','file');
		submit.setAttribute('type','button');
		submit.setAttribute('value','submit');
		div.appendChild(input);
		div.appendChild(upload);
		div.appendChild(submit);

		submit.onclick= function(){
			octups.add(input.value,0,upload.files[0].name);
			input.value='';
			upload.value='';
			octups.addListContent();
		};
		
	},




	addListContent : function(cat, i){
		let span = document.createElement('span'),
			list = document.getElementById('cat-list');
		
		span.textContent = cat ;
		span.setAttribute('class','cat-list');
		list.appendChild(span);

		span.onclick = function(){
			octups.catView(i);
		} ;
	},




	catView : function(name , num , src , i){
		let catName = document.createElement('p'),
			catNUM = document.createElement('p'),
			catImg = document.createElement('img'),
			catview = document.getElementById('cat-view');

		catview.innerHTML='';


		catName.textContent = name ;
		catNUM.textContent = num ;
		catImg.setAttribute('src',src);
		catImg.style.width = '300px' ;

		catview.appendChild(catName);
		catview.appendChild(catNUM);
		catview.appendChild(catImg);

		catImg.onclick = function(){
			octups.click(i);
		};
	},



	render : function(){
		octups.render();
	}
};

octups.render();