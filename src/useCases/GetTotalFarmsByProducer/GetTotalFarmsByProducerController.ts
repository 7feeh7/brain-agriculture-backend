import { Request, Response } from "express";
import { GetTotalFarmsByProducerUseCase } from "./GetTotalFarmsByProducerUseCase";

export class GetTotalFarmsByProducerController {
    constructor(private getTotalFarmsByProducerIdUseCase: GetTotalFarmsByProducerUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { producerId } = request.params;

        try {
            const total = await this.getTotalFarmsByProducerIdUseCase.execute(producerId);
            return response.status(200).json({ total });
        } catch (err) {
            return response.status(400).json({
                message: (err as Error).message || 'Unexpected error.'
            });
        }
    }
}
