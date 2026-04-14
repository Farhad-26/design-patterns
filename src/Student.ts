import Logger from "./Singleton/Logger";

const logger  = Logger.getInstance();

logger.log("From Student");

class Student{
    constructor(public name: string, public age: number) {}


    
}

export default Student;