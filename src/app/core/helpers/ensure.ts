export class Ensure {
  static thatObjectNotNull(obj: any, message: string){
    if(!message){
      throw new Error("Error message should be defined")
    }

    if(obj == null || obj == undefined){
      throw new Error(message);
    }
  }

  static thatStringDefined(input: string, message: string){
    if(!message){
      throw new Error("Error message should be defined")
    }

    if(input == null || input == undefined){
      throw new Error(message);
    }

    if(input.length === 0){
      throw new Error(message);
    }
  }
  
}