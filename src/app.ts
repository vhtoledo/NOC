
//import { envs } from "./config/plugins/envs.plugin";
import { envs } from "./config/plugins/envs.plugin";
import { MongoDataBase } from "./data/mongo";
import { Server } from "./presentation/server";

(async()=>{
    await main();
})();

async function main() {

    await MongoDataBase.connect({
         mongoUrl: envs.MONGO_URL,
         dbName: envs.MONGO_DB_NAME,
    });

    Server.start();
    //console.log(envs.PORT)
}