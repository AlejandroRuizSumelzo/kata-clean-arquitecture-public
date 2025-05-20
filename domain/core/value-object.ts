export abstract class ValueObject<T> {
  protected readonly _props: T;

  constructor(props: T) {
    this._props = props;
  }

  public equals(valueObject?: ValueObject<T>): boolean {
    if (valueObject === null || valueObject === undefined) {
      return false;
    }

    if (valueObject.constructor !== this.constructor) {
      return false;
    }

    return JSON.stringify(this._props) === JSON.stringify(valueObject._props);
  }
}
