import { interval, fromEvent } from 'rxjs';
import { take, map, filter, tap, takeLast, scan, switchMap } from 'rxjs/operators'

fromEvent(document, 'click')
  .pipe(
    switchMap(event => {
      return stream$
    })
  ).subscribe(res => console.log('NEXT: ', res))

const stream$ = interval(1000)
  .pipe(
    take(5),
    tap(val => console.log('TAP:', val)),
    // filter(val => val % 2 === 0),
    // map(val => (val.toString() + ' map map iteration')),
    // // takeLast(5)
    // scan((res, el) => res + el, 0)
  )

// stream$.subscribe({
//   next: v => console.log('NEXT: ', v),
//   complete: () => console.log('COMPLETE'),
// })
