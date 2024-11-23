import { Request, Response } from "express";
import { GetTotalAreaByProducerUseCase } from "./GetTotalAreaByProducerUseCase";

export class GetTotalAreaByProducerController {
    constructor(private getTotalAreaByProducerIdUseCase: GetTotalAreaByProducerUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { producerId } = request.params;

        try {
            const total = await this.getTotalAreaByProducerIdUseCase.execute(producerId);
            return response.status(200).json({ total });
        } catch (err) {
            return response.status(400).json({
                message: (err as Error).message || 'Unexpected error.'
            });
        }
    }
}
