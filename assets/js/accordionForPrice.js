  if(jQuery('cta-block').length) {

document.addEventListener('DOMContentLoaded', function(){

    var doc = document,
        accItems = doc.querySelectorAll('.acc h2'),
        divs = doc.querySelectorAll('.acc > div'),
        dop = doc.getElementsByClassName('cta-block');
    
    var dopHeight = parseInt(window.getComputedStyle(dop[0]).height);
    var dopMargin = parseInt(window.getComputedStyle(dop[0]).margin) * 2;
    
    for (var s = 0; s < divs.length; s++){
      divs[s].style.height = '0px';
    }    
    
    
    for (i = 0; i < accItems.length; i++){
        accItems[i].onclick = function(){ 
          let el = this.nextElementSibling;
          let t = el.children[0];
          let height = window.getComputedStyle(t).height;
          if (el.style.height == '0px') {
            for (var s = 0; s < divs.length; s++){
              divs[s].style.height = '0px';
            }
            // if (el.getElementByClassName)
            el.style.height = parseInt(height) + dopHeight + dopMargin + 'px'; 
          } else{
              for (var s = 0; s < divs.length; s++){
                divs[s].style.height = '0px';
              }    
          }
         
      }
    }
  
    })
  }

  
    
          // if(el.getElementsByClassName('cta-block').length !== 0){
              
          // } else{}