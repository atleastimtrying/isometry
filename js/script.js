var up = false;
var down = false;
var left = false;
var right = false;
var container = {
  w: 240,
  h: 320,
  x: 10,
  y: 10
};
var boxes = [
  { x: 5, y: 5, w:10, h:10, c: '#333333'},
  { x: 20, y: 5, w:10, h:10, c: '#cccccc'},
  { x: 35, y: 5, w:10, h:10, c: '#cccccc'},
  { x: 5, y: 50, w:30, h:20, c: '#cccccc'},
  { x: 5, y: 150, w:100, h:100, c: '#cccccc'}
];
var draw = function(c, c2, w, h){
  draw_2d(c,w,h);
  draw_iso(c2,w,h);
  requestAnimationFrame(function(){
    draw(c, c2, w, h);
  });
};
var draw_2d = function(c, c2, w, h){
  // draw 2d container
  c.fillStyle = '#eee';
  c.fillRect(container.x, container.y,container.w, container.h);

  // draw 2d tiles
  boxes.forEach(function(element, index){
    c.fillStyle = element.c;
    c.fillRect(element.x + container.x, element.y + container.y,element.w, element.h);
  });
};
var draw_iso = function(c, w, h){
  //clear
  c.save();
  c.scale(1,0.5);
  c.translate(270, 200);
  c.rotate(45 * Math.PI / 180);
  if(right){
    boxes[0].x += 1 
  }
  if(left){
    boxes[0].x -= 1 
  }
  if(up){
    boxes[0].y -= 1 
  }
  if(down){
    boxes[0].y += 1 
  }
  //draw iso container
  c.fillStyle = '#eee';
  c.fillRect(container.x, container.y,container.w, container.h);
  //draw iso tiles
  boxes.forEach(function(element, index){
    c.fillStyle = element.c;
    c.fillRect(element.x + container.x, element.y + container.y, element.w, element.h, element.w /2, (element.h /2) * -1,element.w, element.h);
  });
  c.restore();
};
var keyup = function(event){
  if(event.keyCode === 38 ){ up = false; }
  if(event.keyCode === 40 ){ down = false; }
  if(event.keyCode === 37 ){ left = false; }
  if(event.keyCode === 39 ){ right = false; }
};
var keydown = function(event){
  if(event.keyCode === 38 ){ up = true; }
  if(event.keyCode === 40 ){ down = true; }
  if(event.keyCode === 37 ){ left = true; }
  if(event.keyCode === 39 ){ right = true; }
};
window.onload = function(){
  var iso = document.getElementById('iso');
  var c2d = document.getElementById('c2d');
  c2d.width = iso.width = iso.clientWidth;
  c2d.height = iso.height = iso.clientHeight;
  var ictx = iso.getContext('2d');
  var c2ctx = c2d.getContext('2d');
  draw(c2ctx, ictx, c2d.width, c2d.height);
  window.addEventListener('keyup', keyup, false);
  window.addEventListener('keydown', keydown, false);
};