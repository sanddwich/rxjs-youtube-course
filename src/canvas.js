import { fromEvent } from 'rxjs';
import { map, pairwise, switchMap, takeUntil } from 'rxjs/operators';

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const rect = canvas.getBoundingClientRect();
const scale = window.devicePixelRatio;

canvas.width = rect.width * scale;
canvas.height = rect.height * scale;
ctx.scale(scale, scale);
  
const mouseUp$ = fromEvent(canvas, 'mouseup');

const mouseMove$ = fromEvent(canvas, 'mousemove')
  .pipe(
    map((s) => {
      return {
        x: s.offsetX,
        y: s.offsetY,
      };
    }),
    pairwise(),
    takeUntil(mouseUp$)
  );


const mouseDown$ = fromEvent(canvas, 'mousedown')
  .pipe(
    switchMap(() => mouseMove$),
  );

mouseDown$.subscribe(([from, to]) => {
  ctx.beginPath();
  ctx.moveTo(from.x, from.y);
  ctx.lineTo(to.x, to.y);
  ctx.stroke();
});
