import { Request, Response } from "express";
import { GetCropsDistributionByProducerUseCase } from "./GetCropsDistributionByProducerUseCase";

export class GetCropsDistributionByProducerController {
    constructor(private getCropsDistributionByProducerUseCase: GetCropsDistributionByProducerUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { producerId } = request.params;

        try {
            const cropsDistribution = await this.getCropsDistributionByProducerUseCase.execute(producerId);
            return response.status(200).json(cropsDistribution);
        } catch (err) {
            return response.status(400).json({
                message: (err as Error).message || 'Unexpected error.'
            });
        }
    }
}
