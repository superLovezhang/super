function $(id) {
    return typeof id === 'string' ? document.getElementById(id) : id;
}
window.onload = function () {
    var nav = $("nav").getElementsByTagName('li');
    var con = $('container').getElementsByTagName('div')
    for (var i = 0; i < nav.length; i++) {
        nav[i].index = i;
        nav[i].onmouseover = function () {
            for (var j = 0; j < nav.length; j++) {
                nav[j].className = '';
                con[j].style.display = 'none';
            }
            this.className = 'active';
            con[this.index].style.display = 'block';
        }
    }
}