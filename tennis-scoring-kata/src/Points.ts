class Points {
  private _value: number;

  constructor(){
    this._value = 0;
  }

  get value():number {
    return this._value;
  }

  public score():void {
    switch (this.value) {
      case 0: this._value = 15;break;
      case 15: this._value = 30;break;
      default: this._value = 40;break;
    }
  }
}
export { Points }