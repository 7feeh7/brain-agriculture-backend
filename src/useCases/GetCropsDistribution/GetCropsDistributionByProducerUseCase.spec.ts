import { FarmsRepositoryMock } from "../../__mocks__/FarmsRepositoryMock";
import { GetCropsDistributionByProducerUseCase } from "./GetCropsDistributionByProducerUseCase";

describe("GetCropsDistributionByProducerUseCase", () => {
    let farmsRepositoryMock: FarmsRepositoryMock;
    let getCropsDistributionByProducerUseCase: GetCropsDistributionByProducerUseCase;

    beforeEach(() => {
        farmsRepositoryMock = new FarmsRepositoryMock();
        getCropsDistributionByProducerUseCase = new GetCropsDistributionByProducerUseCase(farmsRepositoryMock);
    });

    it("deve retornar a distribuição de culturas para um produtor válido", async () => {
        const producerId = "2fcdca95-3751-5410-96de-464a4e1f2b2a";

        const result = await getCropsDistributionByProducerUseCase.execute(producerId);

        expect(result).toEqual([
            { crop: "Soja", total: 3 },
            { crop: "Milho", total: 2 },
            { crop: "Cana-de-açúcar", total: 1 },
        ]);
    });

    it("deve retornar uma lista vazia para um produtor inválido", async () => {
        const producerId = "43126d78-46d3-5e8b-891b-10522a90b518";

        const result = await getCropsDistributionByProducerUseCase.execute(producerId);

        expect(result).toEqual([]);
    });
});