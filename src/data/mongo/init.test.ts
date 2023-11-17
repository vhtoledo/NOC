import mongoose from "mongoose";
import { MongoDataBase } from "./init"


describe('init MongoDB', () => {

    //Cerrar conexion de moongose
    afterAll(() => {
        mongoose.connection.close();
    })

    test('should connect to MongoDB', async() => {

        const connected = await MongoDataBase.connect({
            dbName: process.env.MONGO_DB_NAME!,
            mongoUrl: process.env.MONGO_URL!,
        })

        expect(connected).toBe(true);
    });

    test('should throw an error', async() => {

        try {

            const connected = await MongoDataBase.connect({
                dbName: process.env.MONGO_DB_NAME!,
                mongoUrl: 'mongodb://victor:123456@localhostasdf:27017,'
            });
            expect(true).toBe(false);
            
        } catch (error) {
            
        }
    })
})