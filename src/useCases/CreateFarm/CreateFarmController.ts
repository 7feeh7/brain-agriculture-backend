import { Request, Response } from "express";
import { CreateFarmUseCase } from "./CreateFarmUseCase";

export class CreateFarmController {
    constructor(private createFarmUseCase: CreateFarmUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const {
            name,
            city,
            state,
            totalArea,
            agriculturalArea,
            vegetationArea,
            crops,
            producerId,
        } = request.body;

        try {
            const createdFarm = await this.createFarmUseCase.execute({
                name,
                city,
                state,
                totalArea,
                agriculturalArea,
                vegetationArea,
                crops,
                producerId,
            });

            return response.status(201).json(createdFarm);
        } catch (err) {
            return response.status(400).json({
                message: (err as Error).message || 'Unexpected error.'
            });
        }
    }
}
