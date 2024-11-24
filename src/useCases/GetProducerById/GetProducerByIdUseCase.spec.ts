import { ProducersRepositoryMock } from "../../__mocks__/ProducersRepositoryMock";
import { Producer } from "../../entities/Producer ";
import { GetProducerByIdUseCase } from "./GetProducerByIdUseCase";

describe("GetProducerByIdUseCase", () => {
    let producersRepositoryMock: ProducersRepositoryMock;
    let getProducerByIdUseCase: GetProducerByIdUseCase;

    beforeEach(() => {
        producersRepositoryMock = new ProducersRepositoryMock();
        getProducerByIdUseCase = new GetProducerByIdUseCase(producersRepositoryMock);

        producersRepositoryMock.save(new Producer("Produtor Teste 1", "12345678909", "2fcdca95-3751-5410-96de-464a4e1f2b2a"));
    });

    it("deve retornar um produtor existente pelo ID", async () => {
        const id = "2fcdca95-3751-5410-96de-464a4e1f2b2a";

        const result = await getProducerByIdUseCase.execute(id);

        expect(result).toEqual({
            id: "2fcdca95-3751-5410-96de-464a4e1f2b2a",
            name: "Produtor Teste 1",
            taxIdentifier: "12345678909",
        });
    });

    it("deve retornar null para um ID inexistente", async () => {
        const id = "7d2a560e-97d0-5e68-9da0-f22699991088";

        const result = await getProducerByIdUseCase.execute(id);

        expect(result).toBeNull();
    });
});
