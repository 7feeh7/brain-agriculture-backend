import { FarmsRepositoryMock } from "../../__mocks__/FarmsRepositoryMock";
import { GetLandUsageByProducerUseCase } from "./GetLandUsageByProducerUseCase";

describe("GetLandUsageByProducerUseCase", () => {
    let farmsRepositoryMock: FarmsRepositoryMock;
    let getLandUsageByProducerUseCase: GetLandUsageByProducerUseCase;

    beforeEach(() => {
        farmsRepositoryMock = new FarmsRepositoryMock();
        getLandUsageByProducerUseCase = new GetLandUsageByProducerUseCase(farmsRepositoryMock);
    });

    it("deve retornar a utilização da terra para um produtor válido", async () => {
        const producerId = "2fcdca95-3751-5410-96de-464a4e1f2b2a";

        const result = await getLandUsageByProducerUseCase.execute(producerId);

        expect(result).toEqual({
            agricultural: 150,
            vegetation: 50,
        });
    });

    it("deve retornar valores zero para um produtor inválido", async () => {
        const producerId = "35f56f64-5f75-51dd-8e2b-8520e1df8742";

        const result = await getLandUsageByProducerUseCase.execute(producerId);

        expect(result).toEqual({
            agricultural: 0,
            vegetation: 0,
        });
    });
});