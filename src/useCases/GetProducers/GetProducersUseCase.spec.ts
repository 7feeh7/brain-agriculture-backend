import { ProducersRepositoryMock } from "../../__mocks__/ProducersRepositoryMock";
import { Producer } from "../../entities/Producer ";
import { GetProducersUseCase } from "./GetProducersUseCase";

describe("GetProducersUseCase", () => {
    let producersRepositoryMock: ProducersRepositoryMock;
    let getProducersUseCase: GetProducersUseCase;

    beforeEach(() => {
        producersRepositoryMock = new ProducersRepositoryMock();
        getProducersUseCase = new GetProducersUseCase(producersRepositoryMock);

        producersRepositoryMock.save(new Producer("Produtor Teste 1", "12345678909", "2fcdca95-3751-5410-96de-464a4e1f2b2a"));
        producersRepositoryMock.save(new Producer("Produtor Teste 2", "98765432100", "4880f3ff-b91e-5283-881f-1ebdb0e7f400"));
    });

    it("deve retornar todos os produtores existentes", async () => {
        const result = await getProducersUseCase.execute();

        expect(result).toEqual([
            { id: "2fcdca95-3751-5410-96de-464a4e1f2b2a", name: "Produtor Teste 1", taxIdentifier: "12345678909" },
            { id: "4880f3ff-b91e-5283-881f-1ebdb0e7f400", name: "Produtor Teste 2", taxIdentifier: "98765432100" },
        ]);
    });

    it("deve retornar uma lista vazia se não houver produtores", async () => {
        producersRepositoryMock["producers"] = [];

        const result = await getProducersUseCase.execute();

        expect(result).toEqual([]);
    });
});