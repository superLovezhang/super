function $(id){
	return typeof id === 'string' ? document.getElementById(id) : null;
}
function constant(obj,target,speed){
       	    clearInterval(obj.timer);
       	    // var final = obj.offsetLeft;
       	    var abs = obj.offsetLeft <= target ? speed : -speed;
            obj.timer = setInterval(function(){
               obj.style.left = obj.offsetLeft + abs + 'px';
       	  	 	 if(Math.abs(obj.offsetLeft) > Math.abs(target)){
       	  	 		obj.style.left = target + 'px';
       	  	 		clearInterval(obj.timer);
       	  	 	}
            },20)
       }