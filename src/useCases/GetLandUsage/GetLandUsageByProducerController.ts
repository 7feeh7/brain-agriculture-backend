import { Request, Response } from "express";
import { GetLandUsageByProducerUseCase } from "./GetLandUsageByProducerUseCase";

export class GetLandUsageByProducerController {
    constructor(private getLandUsageByProducerUseCase: GetLandUsageByProducerUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { producerId } = request.params;

        try {
            const landUsage = await this.getLandUsageByProducerUseCase.execute(producerId);
            return response.status(200).json(landUsage);
        } catch (err) {
            return response.status(400).json({
                message: (err as Error).message || 'Unexpected error.'
            });
        }
    }
}
