export class Calculator {
  private readonly base: number;
  private readonly incrementOffset: number;

  constructor(base: number, incrementOffset: number) {
    this.base = base;
    this.incrementOffset = incrementOffset;
  }

  private sum(n: number) {
    return n * (n + 1) / 2;
  }

  private getIncrement(level: number) {
    return Math.ceil(level / this.base) + this.incrementOffset;
  }

  private getMultiplier(level: number) {
    return (level - 1) % this.base;
  }

  private getOffset(level: number) {
    return (this.sum(this.getIncrement(level) - 1) - this.sum(this.incrementOffset)) * this.base;
  }

  getPoints(level: number) {
    return this.getIncrement(level) * this.getMultiplier(level) + this.getOffset(level);
  }
}