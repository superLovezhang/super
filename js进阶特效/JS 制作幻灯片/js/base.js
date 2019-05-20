function $(id) {
    return typeof id === 'string' ? document.getElementById(id) : id;
}

window.onload = function () {
    var index = 0;
    var that;
    var image = $('image').getElementsByTagName('ul')[0];
    var arrowsl = $('arrows-l');
    var arrowsr = $('arrows-r');
    var dot = $('dot').getElementsByTagName('li');
    var left = image.offsetLeft;
    var timer
    function auto() {
        timer = setInterval(function () {
           
            // console.log(image.style.left)
            // if (index == 5) {
            //     index = 0;
            // }
            // var newleft = left - 820 * index;
            // image.style.left = newleft + 'px';
            // index++;
            setR();           
        }, 1500)
    }
    auto();

    for (let i = 0; i < dot.length; i++) {
        dot[i].onclick = function () {
            that = this;
            autoChange();
        };
    }

    function autoChange() {
        for (var j = 0; j < dot.length; j++) {
            dot[j].className = '';
        }
        that.className = 'dotact';
    }

    arrowsl.onclick = function () {
        // clearInterval(timer);
        setL();
    }
    arrowsr.onclick = function () {
        setR();
    }

    function setL() {
        var left = image.offsetLeft;
        if (left == 0) {
            left = -4100;
        }       
        image.style.left = left + 820 + 'px';
    }

    function setR() {
        var left = image.offsetLeft;
        if (left == -3280) {
            left = 820;
        }
        index++;
        if(index>4){
            index = 0;
        }
        autoChange();
        image.style.left = left - 820 + 'px';
    }

    image.onmouseover = function () {
        clearInterval(timer);
    }
    image.onmouseleave = function () {
        auto();
    }
}