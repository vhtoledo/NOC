import { CheckService } from "../domain/use-cases/checks/check-service";
import { FileSystemDataSource } from "../infrastructure/datasources/file-system.datasources";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { CronService } from "./cron/cron-service";
import { EmailService } from './email/email.service';

const fileSystemLogRepository = new LogRepositoryImpl(
    new FileSystemDataSource(),
  );

export class Server {

    public static start() {

        console.log("Server started...");

        // Mandar email
        //console.log( envs.MAILER_EMAIL, envs.MAILER_SECRET_KEY );
        const emailService = new EmailService();
        emailService.sendEmailWithFileSystemLogs(
            ['victorcinema87@gmail.com', 'victor.toledo23@gmail.com']
        );

        //CronService.createJob(
        //    '*/5 * * * * *',
        //    () => {
        //        const url = 'https://google.com';
        //        new CheckService(
        //            fileSystemLogRepository,
        //            () => console.log(`${url} is ok`),
        //            (error) => console.log(error)
        //        ).execute(url)
        //        // new CheckService().execute( 'http://localhost:3000' );
        //    }
        //);

    }
}