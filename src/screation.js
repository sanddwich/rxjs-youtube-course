import { of, Observable, fromEvent, interval, timer, range } from 'rxjs';
import { map } from 'rxjs/operators';

// const stream$ = of(1, 2, 3, 4, 5, 6);

// stream$.subscribe(res => {
//   console.log('Value: ', res);
// })

// const stream$ = new Observable(observer => {
//   observer.next('First value');
//   setTimeout(() => {
//     observer.next(new Date());
//   }, 1000)

//   setTimeout(() => {
//     observer.complete('Error:', new Date());
//   }, 1500)

//   setTimeout(() => {
//     observer.error('End of stream');
//   }, 2000)

//   setTimeout(() => {
//     observer.next(new Date());
//   }, 3000)
// });

// stream$.subscribe(res => {
//   console.log(res);
// }, err => {
//   console.log(err);
// }, () => {
//   console.log('End of stream')
// });

// stream$.subscribe({
//   next(res) {
//     console.log(res);
//   },
//   error(err) {
//     console.log(err);
//   },
//   complete() {
//     console.log('Complete');
//   }
// })

// const stream$ = fromEvent(document.querySelector('canvas'), 'mousemove')
//   .pipe(
//     map(s => ({
//       x: s.offsetX, 
//       y: s.offsetY, 
//       ctx: s.target.getContext('2d')
//     }))
//   );

// stream$.subscribe(res => {
//   res.ctx.fillRect(res.x, res.y, 4, 4)
// })

// const btnClear = fromEvent(document.getElementById('clear'), 'click');

// btnClear.subscribe(res => {
//   const canvas = document.querySelector('canvas');
//   canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
// })

// const inerval$ = interval(500).subscribe(res => {
//   console.log(res);
// })

// setTimeout(() => {
//   inerval$.unsubscribe();
// }, 4000)

// timer(3000).subscribe((res) => {console.log('Timer: ', res)});

range(45, 20).subscribe(val => {
  console.log(val);
})