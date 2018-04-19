var pageNum = document.getElementById('num'),
    catv = document.getElementById('v'),
    num = 0 ,
    img , numv;


img = document.createElement('img');
img.setAttribute('src','pic/pespes.jpg');
catv.appendChild(img);

numv = document.createElement('p');
numv.textContent = num ;
pageNum.appendChild(numv);


img.addEventListener('click',function(){
    num ++ ;
    numv.textContent = num ;
});


