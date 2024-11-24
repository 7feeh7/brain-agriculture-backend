import { ProducersRepositoryMock } from "../../__mocks__/ProducersRepositoryMock";
import { Producer } from "../../entities/Producer ";
import { DeleteProducerUseCase } from "../../useCases/DeleteProducer/DeleteProducerUseCase";

describe("DeleteProducerUseCase", () => {
    let producersRepositoryMock: ProducersRepositoryMock;
    let deleteProducerUseCase: DeleteProducerUseCase;

    beforeEach(() => {
        producersRepositoryMock = new ProducersRepositoryMock();
        deleteProducerUseCase = new DeleteProducerUseCase(producersRepositoryMock);
    });

    it("deve remover um produtor existente", async () => {
        const producer = new Producer("Produtor Teste", "12345678909");
        await producersRepositoryMock.save(producer);

        const producersBeforeDelete = await producersRepositoryMock.findAll();
        expect(producersBeforeDelete).toHaveLength(1);

        await deleteProducerUseCase.execute(producer.id!);

        const producersAfterDelete = await producersRepositoryMock.findAll();
        expect(producersAfterDelete).toHaveLength(0);
    });

    it("não deve lançar erro ao tentar remover um produtor inexistente", async () => {
        await expect(deleteProducerUseCase.execute("e088d0fd-4871-5431-858d-87735b44f518"))
            .resolves.not.toThrow();

        const producers = await producersRepositoryMock.findAll();
        expect(producers).toHaveLength(0);
    });
});
