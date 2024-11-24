import { Producer } from "../entities/Producer ";

export interface IProducersRepository {
    save(producer: Producer): Promise<void>;
    update(producer: Producer): Promise<void>;
    delete(id: string): Promise<void>;
    findById(id: string): Promise<Producer | null>;
    findAll(): Promise<Producer[]>;
    findByTaxIdentifier(taxIdentifier: string): Promise<Producer | null>;
}