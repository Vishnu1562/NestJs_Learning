import { User } from "src/entities/user.entity";
import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";

export class MainSeeder implements Seeder{
    public async run(dataSource: DataSource, factoryManager: SeederFactoryManager): Promise<void> {

        const typrRepo = dataSource.getRepository("PropertyType");
        const propertyTypes = await typrRepo.save([
            {value: 'Condo'},
            {value: 'Apartment'},
        ])


        const userFactory = factoryManager.get(User);
        const users = await userFactory.saveMany(10);
    }
}