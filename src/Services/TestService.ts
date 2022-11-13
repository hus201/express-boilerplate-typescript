import { faker } from '@faker-js/faker';
import { Test } from '../Models/Test.model';
export class TestService {
    private context?: any;
    constructor(_context?: any) {
        this.context = _context;
    }
    GenerateFiveRandomTestObjects() {
        const array: Test[] = [];
        for (let index = 0; index < 5; index++) {
            const test: Test = {
                Name: faker.name.fullName(),
                Email: faker.internet.email(),
                ID: faker.datatype.uuid()
            }
            array.push(test);

        }
        return array;
    }
}
