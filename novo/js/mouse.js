//indeetificar bolinha

var mouse = document.querySelector('.cursor');

//capturar posição do mouse na tela

document.addEventListener('mousemove', function(m){
//atribuir a posição do X e Y como posição da bolinha
var posix = m.pageX -15;
var posiy = m.pageY -15;
console.log(m)

mouse.style.left = posix + 'px';
mouse.style.top = posiy + 'px';

});

