import { Request, Response } from "express";
import { UpdateFarmUseCase } from "./UpdateFarmUseCase";

export class UpdateFarmController {
    constructor(private updateFarmUseCase: UpdateFarmUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const {
            name,
            city,
            state,
            totalArea,
            agriculturalArea,
            vegetationArea,
            crops
        } = request.body;

        try {
            await this.updateFarmUseCase.execute({
                id,
                name,
                city,
                state,
                totalArea,
                agriculturalArea,
                vegetationArea,
                crops,
            });
            return response.status(201).send();
        } catch (err) {
            return response.status(400).json({
                message: (err as Error).message || 'Unexpected error.'
            });
        }
    }
}
