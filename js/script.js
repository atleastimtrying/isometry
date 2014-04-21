var container = {
  w: 240,
  h: 320,
  x: 10,
  y: 10
};
var boxes = [
  { x: 05, y: 5, w:10, h:10},
  { x: 20, y: 5, w:10, h:10},
  { x: 35, y: 5, w:10, h:10},
  { x: 05, y: 50, w:30, h:20},
  { x: 05, y: 150, w:100, h:100}
];
var draw_2d = function(c, w, h){
  //clear
  c.fillStyle = '#333333';
  c.fillRect(0,0,w,h);
  // draw 2d container
  c.fillStyle = '#eee';
  c.fillRect(container.x, container.y,container.w, container.h);

  // draw 2d tiles
  c.fillStyle = '#cccccc';
  boxes.forEach(function(element, index){
    c.fillRect(element.x + container.x, element.y + container.y,element.w, element.h);
  });
  c.save();
  requestAnimationFrame(function(){
    draw_2d(c, w, h);
  });
};
var draw_iso = function(c, w, h){
  //clear
  c.fillStyle = '#666666';
  c.fillRect(0,0,w,h);

  c.save();
  c.scale(1,0.5);
  c.translate(270, 200);
  c.rotate(45 * Math.PI / 180);


  //draw iso container
  c.fillStyle = '#eee';
  c.fillRect(container.x, container.y,container.w, container.h);

  //draw iso tiles
  c.fillStyle = '#cccccc';
  boxes.forEach(function(element, index){
    c.fillRect(element.x + container.x, element.y + container.y, element.w, element.h, element.w /2, (element.h /2) * -1,element.w, element.h);
  });

  c.restore();
  requestAnimationFrame(function(){
    draw_iso(c, w, h);
  });
};
var keyup = function(event){
  console.log(event.keyCode);
};
var keydown = function(event){
  console.log(event.keyCode);
  
};
window.onload = function(){
  var iso = document.getElementById('iso');
  iso.width = iso.clientWidth;
  iso.height = iso.clientHeight;
  var ictx = iso.getContext('2d');
  draw_iso(ictx, iso.width, iso.height);

  var iso = document.getElementById('c2d');
  c2d.width = c2d.clientWidth;
  c2d.height = c2d.clientHeight;
  var c2ctx = c2d.getContext('2d');
  draw_2d(c2ctx, c2d.width, c2d.height);
  window.addEventListener('keyup', keyup, false);
  window.addEventListener('keydown', keyup, false);
};