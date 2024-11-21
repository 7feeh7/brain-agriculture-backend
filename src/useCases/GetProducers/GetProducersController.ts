import { Request, Response } from "express";
import { GetProducersUseCase } from "./GetProducersUseCase";

export class GetProducersController {
    constructor(
        private getProducerUseCase: GetProducersUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const producers = await this.getProducerUseCase.execute();
            return response.status(200).json(producers);
        } catch (err) {
            return response.status(400).json({
                message: (err as Error).message || 'Unexpected error.'
            });
        }
    }
}