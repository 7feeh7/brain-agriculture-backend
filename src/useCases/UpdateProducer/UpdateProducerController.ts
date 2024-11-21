import { Request, Response } from "express";
import { UpdateProducerUseCase } from "./UpdateProducerUseCase";

export class UpdateProducerController {
    constructor(
        private updateProducerUseCase: UpdateProducerUseCase
    ) { }

    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const { name, taxIdentifier } = request.body;
        try {
            await this.updateProducerUseCase.execute({ name, taxIdentifier, id });
            return response.status(201).send();
        } catch (err) {
            return response.status(400).json({
                message: (err as Error).message || 'Unexpected error.'
            });
        }
    }
}