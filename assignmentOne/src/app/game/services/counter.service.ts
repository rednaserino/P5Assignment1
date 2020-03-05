import { Injectable } from '@angular/core';
import { observable, BehaviorSubject, timer, NEVER } from 'rxjs';
import { switchMap, map, takeWhile } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  initialValue = 100;
  toggleCounter$ = new BehaviorSubject(false);
  toRemainder = (t: number) => this.initialValue - t;

  remainingSeconds$ = this.toggleCounter$.pipe(
    switchMap((running: boolean) => (running ? timer(0, 1000) : NEVER)),
    map(this.toRemainder),
    takeWhile(t => t >= 0),
  );

  start(){
    this.toggleCounter$.next(true);
  }
  stop(){
    this.toggleCounter$.next(false);
  }
}
