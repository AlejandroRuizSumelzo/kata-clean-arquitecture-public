export abstract class Entity<T> {
  private readonly _id: string;
  protected readonly _props: T;

  constructor(props: T, id: string) {
    this._id = id;
    this._props = props;
  }

  public equals(entity?: Entity<T>): boolean {
    if (entity === null || entity === undefined) {
      return false;
    }

    if (entity.constructor !== this.constructor) {
      return false;
    }

    return this._id === entity._id;
  }
}
