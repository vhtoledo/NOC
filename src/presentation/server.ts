import { CheckService } from "../domain/use-cases/checks/check-service";
import { FileSystemDataSource } from "../infrastructure/datasources/file-system.datasources";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { CronService } from "./cron/cron-service";

const fileSystemLogRepository = new LogRepositoryImpl(
    new FileSystemDataSource(),
  );

export class Server {

    public static start() {

        console.log("Server started...");

        // Mandar email

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