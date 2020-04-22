class CompletedGameException extends Error{

  constructor(message: string){
    super(message)
  }
}
export {CompletedGameException}