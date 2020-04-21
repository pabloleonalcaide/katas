class InvalidPlayerException extends RangeError {
  constructor(message: string){
    super(message)
    Object.setPrototypeOf(this, InvalidPlayerException.prototype)
  }
}

export {InvalidPlayerException}