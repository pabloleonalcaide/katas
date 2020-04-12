class InvalidParamsError extends Error {

  constructor(message: string){
    super(message)
    Object.setPrototypeOf(this, InvalidParamsError.prototype)
  }
}
export {InvalidParamsError}