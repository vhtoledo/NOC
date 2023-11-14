import { LogSeverityLevel } from "../domain/entities/log.entity";
import { CheckService } from "../domain/use-cases/checks/check-service";
import { SendEmailLogs } from "../domain/use-cases/email/send-email-logs";
import { FileSystemDataSource } from "../infrastructure/datasources/file-system.datasources";
import { MongoLogDatasource } from "../infrastructure/datasources/mongo-log.datasource";
import { PostgresLogDatasource } from "../infrastructure/datasources/postgres-log.datasources";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { CronService } from "./cron/cron-service";
import { EmailService } from './email/email.service';

const logRepository = new LogRepositoryImpl(
    //new FileSystemDataSource(),
    //new MongoLogDatasource(),
    new PostgresLogDatasource()
  );
  const emailService = new EmailService();

export class Server {

    public static async start() {

        console.log("Server started...");

        // Mandar email
        //console.log( envs.MAILER_EMAIL, envs.MAILER_SECRET_KEY );
        //new SendEmailLogs(
        //    emailService,
        //    fileSystemLogRepository
        //).execute(
        //    ['victorcinema87@gmail.com', 'victor.toledo23@gmail.com']
        //)

        //emailService.sendEmailWithFileSystemLogs(
        //    ['victorcinema87@gmail.com', 'victor.toledo23@gmail.com']
        //);

        //const logs = await logRepository.getLogs(LogSeverityLevel.medium);
        //console.log(logs);

        CronService.createJob(
            '*/5 * * * * *',
            () => {
                const url = 'https://google.com';
                new CheckService(
                    logRepository,
                    () => console.log(`${url} is ok`),
                    (error) => console.log(error)
                ).execute(url)
                // new CheckService().execute( 'http://localhost:3000' );
            }
        );

    }
}