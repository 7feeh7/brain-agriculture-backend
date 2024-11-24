import { FarmsRepositoryMock } from "../../__mocks__/FarmsRepositoryMock";
import { GetTotalAreaByProducerUseCase } from "./GetTotalAreaByProducerUseCase";

describe("GetTotalAreaByProducerUseCase", () => {
    let farmsRepositoryMock: FarmsRepositoryMock;
    let getTotalAreaByProducerUseCase: GetTotalAreaByProducerUseCase;

    beforeEach(() => {
        farmsRepositoryMock = new FarmsRepositoryMock();
        getTotalAreaByProducerUseCase = new GetTotalAreaByProducerUseCase(farmsRepositoryMock);
    });

    it("deve retornar a área total para um produtor válido", async () => {
        const producerId = "2fcdca95-3751-5410-96de-464a4e1f2b2a";

        const result = await getTotalAreaByProducerUseCase.execute(producerId);

        expect(result).toBe(150);
    });

    it("deve retornar 0 para um produtor inválido", async () => {
        const producerId = "d24e292e-71a6-5fbc-8dfb-973eb5557ceb";

        const result = await getTotalAreaByProducerUseCase.execute(producerId);

        expect(result).toBe(0);
    });
});