import { LogEntity, LogSeverityLevel } from "../entities/log.entity";


// creacion de una clase abtracta, tiene por objetivo que nadie pueda crear instancias 
export abstract class LogDatasource {
    abstract saveLog( log: LogEntity ): Promise<void>;
    abstract getLogs( severityLevel: LogSeverityLevel): Promise<LogEntity[]>;
}