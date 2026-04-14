import Logger from './Singleton/Logger';
import Student from './Student';

const logger = Logger.getInstance();
const student = new Student("Alice", 20);


logger.log("Log message form index.ts");
