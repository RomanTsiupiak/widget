import { useEffect } from 'react';

import './styles.css';
const App = () => {
  useEffect(() => {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    const bounds = canvas.getBoundingClientRect();
    const ctx = canvas.getContext('2d');

    canvas.width = 700;
    canvas.height = 400;

    let isDrawing = false;
    let isCurving = false;
    let mode: 'draw' | 'curve' = 'draw';
    let startX = 0;
    let startY = 0;
    let mouseX = 0;
    let mouseY = 0;
    let endX = 0;
    let endY = 0;

    if (!ctx) return;

    const draw = () => {
      ctx.clearRect(0, 0, 700, 400);
      if (isDrawing) {
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(mouseX, mouseY);
        ctx.stroke();
      }
    };
    const curve = () => {
      ctx.clearRect(0, 0, 600, 500);
      if (isCurving) {
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.quadraticCurveTo(mouseX, mouseY, endX, endY);
        ctx.stroke();
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      if (ctx.isPointInStroke(e.clientX - bounds.left, e.clientY - bounds.top)) {
        curve();
        mode = 'curve';
        isCurving = true;
      }

      if (!isDrawing && mode === 'draw') {
        startX = e.clientX - bounds.left;
        startY = e.clientY - bounds.top;

        isDrawing = true;
        draw();
      }

      if (mode === 'draw') {
        draw();
      } else {
        curve();
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX - bounds.left;
      mouseY = e.clientY - bounds.top;

      if (isDrawing) {
        draw();
      } else if (isCurving) {
        curve();
      }
    };
    const handleMouseUp = () => {
      if (isDrawing) {
        endX = mouseX;
        endY = mouseY;
        isDrawing = false;
      } else if (isCurving) {
        isCurving = false;
        mode = 'draw';
      }
    };

    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="container">
      <div className="image-container">
        <canvas id="canvas">Hello canvas</canvas>
      </div>
    </div>
  );
};

export default App;
