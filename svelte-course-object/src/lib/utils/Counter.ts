export class Counter {
  #count = 0;

  get value() {
    return this.#count;
  }

  set value(val: number) {
    this.#count = val;
  }

  increment() {
    this.#count++;
  }

  reset() {
    this.#count = 0;
  }
}
