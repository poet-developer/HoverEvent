(function(){
    const hoverElem = document.querySelector('.index-container');
    const outputElem = document.querySelector('.index-replace-item');

    let targetIdName;

    hoverElem.addEventListener('mouseover',function(e){
        console.log(e.target);
        targetIdName = e.target.id;
        if(targetIdName){
             outputElem.innerHTML = targetIdName;
             outputElem.classList.add('fadein');
            //  setTimeout(function(){
            //     outputElem.classList.remove('fadein');
            //  },2000);
            //  if(currentOutputElem){
            //     currentOutputElem.classList.remove('fade');
            //  }
        }else{
            outputElem.innerHTML ='';
            outputElem.classList.remove('fadein');
            // outputElem.classList.add('fadeout');
            // if(e.target.className == 'index-container'){
            //     outputElem.classList.add('fadeout');
            // }
        }

    });          


}());