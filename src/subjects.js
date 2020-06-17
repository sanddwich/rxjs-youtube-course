import {Sunject, Subject, BehaviorSubject, ReplaySubject} from 'rxjs';
import {} from 'rxjs/operators';

const sub$ = new Subject();
sub$.next('First action');
sub$.next('Two action');
sub$.subscribe(val => console.log(val));
sub$.next('Three action');


const subB$ = new BehaviorSubject();
subB$.next('First action');
subB$.next('Two action');
subB$.subscribe(val => console.log(val));
subB$.next('Three action');


const subR$ = new ReplaySubject();
subR$.next('First action');
subR$.next('Two action');
subR$.subscribe(val => console.log(val));
subR$.next('Three action');