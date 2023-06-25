// var ctx = canvas.getContext('2d');
// requestAnimationFrame(update);
//
// mouse = { x: 0, y: 0, button: 0, lx: 0, ly: 0, update: true };
// function mouseEvents(e) {
//   const bounds = canvas.getBoundingClientRect();
//   mouse.x = e.pageX - bounds.left - scrollX;
//   mouse.y = e.pageY - bounds.top - scrollY;
//   mouse.button = e.type === 'mousedown' ? true : e.type === 'mouseup' ? false : mouse.button;
//   mouse.update = true;
// }
// ['mousedown', 'mouseup', 'mousemove'].forEach((name) => document.addEventListener(name, mouseEvents));
//
// ctx.lineWidth = 2;
// ctx.strokeStyle = 'blue';
// const point = (x, y) => ({ x, y });
// const poly = () => ({
//   points: [],
//   addPoint(p) {
//     this.points.push(point(p.x, p.y));
//   },
//   draw() {
//     ctx.lineWidth = 2;
//     ctx.strokeStyle = 'blue';
//     ctx.beginPath();
//     for (const p of this.points) {
//       ctx.lineTo(p.x, p.y);
//     }
//     ctx.closePath();
//     for (const p of this.points) {
//       ctx.moveTo(p.x + 4, p.y);
//       ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
//     }
//     ctx.stroke();
//   },
//   closest(pos, dist = 8) {
//     var i = 0,
//       index = -1;
//     dist *= dist;
//     for (const p of this.points) {
//       var x = pos.x - p.x;
//       var y = pos.y - p.y;
//       var d2 = x * x + y * y;
//       if (d2 < dist) {
//         dist = d2;
//         index = i;
//       }
//       i++;
//     }
//     if (index > -1) {
//       return this.points[index];
//     }
//   },
// });
// function drawCircle(pos, color = 'red', size = 8) {
//   ctx.strokeStyle = color;
//   ctx.beginPath();
//   ctx.arc(pos.x, pos.y, size, 0, Math.PI * 2);
//   ctx.stroke();
// }
// const polygon = poly();
// var activePoint, cursor;
// var dragging = false;
// function update() {
//   if (mouse.update) {
//     cursor = 'crosshair';
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     if (!dragging) {
//       activePoint = polygon.closest(mouse);
//     }
//     if (activePoint === undefined && mouse.button) {
//       polygon.addPoint(mouse);
//       mouse.button = false;
//     } else if (activePoint) {
//       if (mouse.button) {
//         if (dragging) {
//           activePoint.x += mouse.x - mouse.lx;
//           activePoint.y += mouse.y - mouse.ly;
//         } else {
//           dragging = true;
//         }
//       } else {
//         dragging = false;
//       }
//     }
//     polygon.draw();
//     if (activePoint) {
//       drawCircle(activePoint);
//       cursor = 'move';
//     }
//
//     mouse.lx = mouse.x;
//     mouse.ly = mouse.y;
//     canvas.style.cursor = cursor;
//     mouse.update = false;
//   }
//   requestAnimationFrame(update);
// }
