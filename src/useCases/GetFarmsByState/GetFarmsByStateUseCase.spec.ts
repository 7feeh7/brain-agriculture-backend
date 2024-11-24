import { FarmsRepositoryMock } from "../../__mocks__/FarmsRepositoryMock";
import { GetFarmsByStateByProducerUseCase } from "./GetFarmsByStateUseCase";

describe("GetFarmsByStateByProducerUseCase", () => {
    let farmsRepositoryMock: FarmsRepositoryMock;
    let getFarmsByStateByProducerUseCase: GetFarmsByStateByProducerUseCase;

    beforeEach(() => {
        farmsRepositoryMock = new FarmsRepositoryMock();
        getFarmsByStateByProducerUseCase = new GetFarmsByStateByProducerUseCase(farmsRepositoryMock);
    });

    it("deve retornar a quantidade de fazendas por estado para um produtor válido", async () => {
        const producerId = "2fcdca95-3751-5410-96de-464a4e1f2b2a";

        const result = await getFarmsByStateByProducerUseCase.execute(producerId);

        expect(result).toEqual([
            { state: "SP", total: 3 },
            { state: "MG", total: 2 },
            { state: "PR", total: 1 },
        ]);
    });

    it("deve retornar uma lista vazia para um produtor inválido", async () => {
        const producerId = "a83da8e0-bcfc-50ef-9f48-c1526512cef7";

        const result = await getFarmsByStateByProducerUseCase.execute(producerId);

        expect(result).toEqual([]);
    });
});