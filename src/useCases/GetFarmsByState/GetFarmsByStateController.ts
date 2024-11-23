import { Request, Response } from "express";
import { GetFarmsByStateByProducerUseCase } from "./GetFarmsByStateUseCase";

export class GetFarmsByStateByProducerController {
    constructor(private getFarmsByStateByProducerUseCase: GetFarmsByStateByProducerUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { producerId } = request.params;

        try {
            const farmsByState = await this.getFarmsByStateByProducerUseCase.execute(producerId);
            return response.status(200).json(farmsByState);
        } catch (err) {
            return response.status(400).json({ message: (err as Error).message });
        }
    }
}
