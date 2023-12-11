import { fakerES as faker } from '@faker-js/faker';

export const generateUser = () => {
    return {
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        birth_date: faker.date.birthdate()
    }
}