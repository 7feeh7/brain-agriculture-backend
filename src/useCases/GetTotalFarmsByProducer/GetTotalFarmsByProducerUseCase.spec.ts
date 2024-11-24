import { FarmsRepositoryMock } from "../../__mocks__/FarmsRepositoryMock";
import { GetTotalFarmsByProducerUseCase } from "./GetTotalFarmsByProducerUseCase";

describe("GetTotalFarmsByProducerUseCase", () => {
    let farmsRepositoryMock: FarmsRepositoryMock;
    let getTotalFarmsByProducerUseCase: GetTotalFarmsByProducerUseCase;

    beforeEach(() => {
        farmsRepositoryMock = new FarmsRepositoryMock();
        getTotalFarmsByProducerUseCase = new GetTotalFarmsByProducerUseCase(farmsRepositoryMock);
    });

    it("deve retornar o total de fazendas para um produtor válido", async () => {
        const producerId = "2fcdca95-3751-5410-96de-464a4e1f2b2a";

        const result = await getTotalFarmsByProducerUseCase.execute(producerId);

        expect(result).toBe(3);
    });

    it("deve retornar 0 para um produtor inválido", async () => {
        const producerId = "bc69b0e6-2d61-57e8-a0cb-6e4cbe5043c3";

        const result = await getTotalFarmsByProducerUseCase.execute(producerId);

        expect(result).toBe(0);
    });
});