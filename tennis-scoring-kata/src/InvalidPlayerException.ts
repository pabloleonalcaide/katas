class InvalidPlayerException extends RangeError {
  constructor(message: string){
    super(message)
  }
}

export {InvalidPlayerException}