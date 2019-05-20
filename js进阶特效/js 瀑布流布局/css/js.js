function $(id){
    return typeof id === 'string' ? document.getElementById(id) : null;
}


//节流  通过定时器对一些高频率事件进行限制触发次数；
//  如监听滚条事件，监听窗口事件 都是高频率事件；
//  setTimeout(function(){},200)


window.onload = function(){
     var box = $('box')
     wateFull();

     window.onresize = function(){
      wateFull();
     }

     window.onscroll = function(){
        if(isBottom()){
            var newArr = [
               {"src": "images/img1.jpg"},
               {"src": "images/img2.jpg"},
               {"src": "images/img3.jpg"},
               {"src": "images/img4.jpg"},
               {"src": "images/img5.jpg"},
               {"src": "images/img6.jpg"},
               {"src": "images/img7.jpg"},
            ]
            for(var i=0; i<newArr.length; i++){
               var newPic = document.createElement('div');
               newPic.className = 'pic';
               $('box').appendChild(newPic);
               var newImglist = document.createElement('div');
               newImglist.className = 'img';
               newPic.appendChild(newImglist);
               var newImg = document.createElement('img');
               newImg.src = newArr[i].src;
               newImglist.appendChild(newImg);
               wateFull()

               //  意义： 并不是在新出来的图片进行瀑布操作，而是在图片出来之后再一次进行全局瀑布流操作！
            }
        }
     }


 

     

    function wateFull(){
        var picWidth = document.getElementsByClassName('pic')[0].offsetWidth;
        var screenX = document.body.clientWidth;
        var sows = parseInt(screenX / picWidth);
        box.style.width = sows * picWidth + 'px';
        box.style.margin = '0 auto';
        var pics = document.getElementsByClassName('pic');
        var arr = [], minHeight = 0, minIndex = 0,picHeight = 0;
        for(var i=0; i<pics.length; i++){
           picHeight = pics[i].offsetHeight;
           if(i < sows){
            arr.push(picHeight);
            pics[i].style.position = '';
           }else {
            minHeight = Math.min.apply(this, arr);
            minIndex = getIndex(arr, minHeight);
            pics[i].style.position = 'absolute';
            pics[i].style.left = minIndex * picWidth + 'px';
            pics[i].style.top = minHeight + 'px';
            arr[minIndex] += picHeight;
       }
    }
  }



    function getIndex(arr, minHeight){
        var arr = arr;
        for(var i=0; i<arr.length; i++){
            if(arr[i] == minHeight){
                return i;
            }
        }
    }

    function isBottom(){
        var pics = document.getElementsByClassName('pic');
        lastPic = pics[pics.length -1];
        lastTop = lastPic.offsetTop + lastPic.offsetHeight * 0.5;
        var scrollTop = document.body.clientHeight + document.documentElement.scrollTop;
        console.log(scrollTop);
        return lastTop <= scrollTop;
    }

}