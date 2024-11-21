import { Request, Response } from "express";
import { GetProducerByIdUseCase } from "./GetProducerByIdUseCase";

export class GetProducerByIdController {
    constructor(
        private getProducerUseCase: GetProducerByIdUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        try {
            const producer = await this.getProducerUseCase.execute(id);
            return response.status(200).json(producer);
        } catch (err) {
            return response.status(400).json({
                message: (err as Error).message || 'Unexpected error.'
            });
        }
    }
}