class CompletedGameException extends Error{

  constructor(message: string){
    super(message)
    Object.setPrototypeOf(this, CompletedGameException.prototype)
  }
}
export {CompletedGameException}