class Logger {
    private static instance: Logger;

    constructor(){
        console.log("Logger Instance Created");
    }

    static getInstance(): Logger{
        if(!Logger.instance){
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }

    log(message: string){
        console.log(`[LOG]: ${message}`);
    }
}

export default Logger;