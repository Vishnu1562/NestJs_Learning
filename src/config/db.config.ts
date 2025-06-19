import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
import * as path from 'path';

export default():PostgresConnectionOptions =>({
    // url: process.env.url,
    // url: process.env.url,
    url: "postgresql://neondb_owner:npg_cmEeK0Z9RtAL@ep-red-union-a8e5jc57-pooler.eastus2.azure.neon.tech/NestJsLearning?sslmode=require",
    type: 'postgres',
    port: 3306,
    synchronize: true, // Set to false in production
    entities: [path.resolve(__dirname,'..') + '/**/*.entity{.ts,.js}'],
})