import { writable } from 'svelte/store';

export class Counter {
  private _count = writable(0); 

  
  increment() {
    this._count.update(n => n + 1);
  }

  reset() {
    this._count.set(0);
  }

  // Exposition de subscribe, permettant aux composants de s'abonner à ce store
  subscribe(run: (value: number) => void) {
    return this._count.subscribe(run);
  }
}
