import { Request, Response } from "express";
import { DeleteProducerUseCase } from "./DeleteProducerUseCase";

export class DeleteProducerController {
    constructor(private deleteProducerUseCase: DeleteProducerUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        try {
            const producer = await this.deleteProducerUseCase.execute(id);
            return response.status(200).json(producer);
        } catch (err) {
            return response.status(400).json({
                message: (err as Error).message || 'Unexpected error.'
            });
        }
    }
}