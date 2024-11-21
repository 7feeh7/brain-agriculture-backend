import { Request, Response } from "express";
import { CreateProducerUseCase } from "./CreateProducerUseCase";

export class CreateProducerController {
    constructor(
        private createProducerUseCase: CreateProducerUseCase
    ) { }

    async handle(request: Request, response: Response) {
        const { name, taxIdentifier } = request.body;
        try {
            await this.createProducerUseCase.execute({ name, taxIdentifier });
            return response.status(201).send();
        } catch (err) {
            return response.status(400).json({
                message: (err as Error).message || 'Unexpected error.'
            });
        }
    }
}