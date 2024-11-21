import { v4 as uuidv4 } from 'uuid';

export class Producer {
    constructor(
        public name: string,
        public taxIdentifier: string,
        public readonly id?: string,
    ) {
        if (!id) {
            this.id = uuidv4();
        }
    }

}
