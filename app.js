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
		return ++ model[i].clicks ;
	},


	adminForm : function(i){
		view.adminForm(
			i,
			model[i].name ,
			model[i].clicks ,
			model[i].url 
		);
	},


	save : function(i, name , clicks , url){
		model[i].name = name ;
		model[i].clicks = clicks ;
		model[i].url = url ;
		this.catView(i);
		view.listUpdate(i,name,clicks);
	},

	render : function(){
		view.htmlStructure();
		view.add();
		this.catList();
		this.catView(4);
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
		submit.setAttribute('value','add cat');
		div.appendChild(input);
		div.appendChild(upload);
		div.appendChild(submit);

		submit.onclick= function(){
			octups.add(input.value , 0 , upload.files[0].name);
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
			catNUM.textContent = octups.click(i) ;
			// update the admin clicks value
			let adminLiveClicks = document.getElementById('admin-clicks');
			if (adminLiveClicks){
				adminLiveClicks.value =  catNUM.textContent ;
			} 
		};

		this.admin(i);
	},




	admin : function(i){
		let adminBtn = document.createElement('input'),
			catview = document.getElementById('cat-view');

		
		adminBtn.setAttribute('type','button');
		adminBtn.setAttribute('value','Admin');
		catview.appendChild(adminBtn);


		adminBtn.onclick = function(){
			if (this.nextElementSibling){
				this.nextElementSibling.remove();
			}else {
				octups.adminForm(i);
			}
		};
	},


	adminForm : function(i ,name , clicks , url ){
		let catName = document.createElement('input'),
			catUrl = document.createElement('input'),
			catClicks = document.createElement('input'),
			save = document.createElement('input') ,
			cancel = document.createElement('input'),
			div = document.createElement('div'),
			catview = document.getElementById('cat-view');

		
		catName.setAttribute('type','text');
		catUrl.setAttribute('type','text');
		catClicks.setAttribute('type','text');
		catClicks.setAttribute('id','admin-clicks');
		save.setAttribute('type','button');
		cancel.setAttribute('type','button');

		save.setAttribute('value','Save');
		cancel.setAttribute('value','Cancel');


		catName.setAttribute('value', name);
		catUrl.setAttribute('value', url);
		catClicks.setAttribute('value', clicks);


		div.appendChild(catName);
		div.appendChild(catClicks);
		div.appendChild(catUrl);
		div.appendChild(save);
		div.appendChild(cancel);
		catview.appendChild(div);

		save.onclick = function(){
			octups.save(
				i,
				catName.value ,
				catClicks.value ,
				catUrl.value
			);
		};

		cancel.onclick = function(){
			this.parentElement.remove();
		};
		
	},



	listUpdate : function(i,name){
		// updade the list
		document.getElementsByTagName('span')[i].textContent = name ;
	},



	render : function(){
		octups.render();
	}
};

octups.render();