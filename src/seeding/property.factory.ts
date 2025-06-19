
import { setSeederFactory } from "typeorm-extension";
import { Faker } from '@faker-js/faker';
import { Property } from "src/entities/property.entity";


// export const PropertyFactory = setSeederFactory(Property, (faker: Faker) => {
//     const property = new Property();
//     property.name = faker.location.street();
//     property.description = faker.lorem.sentence();
//     property.price = faker.number.int({ min: 10000, max: 1000000 });
//     return property;
// });