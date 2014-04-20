var boxes = [
  { x: 505, y: 5, w:10, h:10},
  { x: 520, y: 5, w:10, h:10},
  { x: 535, y: 5, w:10, h:10},
  { x: 505, y: 50, w:30, h:20},
  { x: 505, y: 150, w:100, h:100}
];
var draw = function(c, w, h){
  c.fillStyle = '#ffffff';
  c.fillRect(0,0,w,h);
  c.fillStyle = '#cccccc';
  boxes.forEach(function(element, index){
    c.fillRect(element.x,element.y,element.w, element.h);
  });
  boxes.forEach(function(element, index){
    c.save();
    c.scale(1,0.5);
    c.rotate(45 * Math.PI / 180);
    c.fillRect(element.x,element.y, element.w, element.h, element.w /2, (element.h /2) * -1,element.w, element.h);
    c.restore();
  });
  requestAnimationFrame(function(){
    draw(c, w, h);
  });
};
window.onload = function(){
  var canvas = document.getElementById('game');
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;
  var c = canvas.getContext('2d');
  draw(c, canvas.width, canvas.height);
};