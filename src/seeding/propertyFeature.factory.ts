import { setSeederFactory } from "typeorm-extension";
import { Faker } from '@faker-js/faker';
import { PropertyFeature } from "src/entities/propertyFeature.entity";


// export const PropertyFeatureFactory = setSeederFactory(PropertyFeature, (faker: Faker) => {
//     const feature = new PropertyFeature();
//     feature.bedrooms = faker.number.int({ min: 1, max: 10 });
//     feature.bathrooms = faker.number.int({ min: 1, max: 10 });
//     feature.area = faker.number.int({ min: 50, max: 5000 });
//     feature.parkingSpots = faker.number.int({ min: 1, max: 10 });
//     feature.hasBalcony = faker.datatype.boolean();
//     feature.hasGarden = faker.datatype.boolean();
//     feature.hasSwimmingPool = faker.datatype.boolean();
//     return feature;
// });