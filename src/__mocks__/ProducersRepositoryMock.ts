import { Producer } from "../entities/Producer ";
import { IProducersRepository } from "../repositories/IProducersRepository";

export class ProducersRepositoryMock implements IProducersRepository {
    private producers: Producer[] = [];

    async save(producer: Producer): Promise<void> {
        this.producers.push(producer);
    }

    async update(producer: Producer): Promise<void> {
        const index = this.producers.findIndex((p) => p.id === producer.id);
        if (index !== -1) {
            this.producers[index] = producer;
        }
    }

    async delete(id: string): Promise<void> {
        this.producers = this.producers.filter((producer) => producer.id !== id);
    }

    async findById(id: string): Promise<Producer | null> {
        return this.producers.find((producer) => producer.id === id) || null;
    }

    async findAll(): Promise<Producer[]> {
        return this.producers;
    }

    async findByTaxIdentifier(taxIdentifier: string): Promise<Producer | null> {
        return this.producers.find((producer) => producer.taxIdentifier === taxIdentifier) || null;
    }
}