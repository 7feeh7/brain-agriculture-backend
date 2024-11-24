import { ProducersRepositoryMock } from "../../__mocks__/ProducersRepositoryMock";
import { Producer } from "../../entities/Producer ";
import { UpdateProducerUseCase } from "./UpdateProducerUseCase";

describe("UpdateProducerUseCase", () => {
    let producersRepositoryMock: ProducersRepositoryMock;
    let updateProducerUseCase: UpdateProducerUseCase;

    beforeEach(() => {
        producersRepositoryMock = new ProducersRepositoryMock();
        updateProducerUseCase = new UpdateProducerUseCase(producersRepositoryMock);

        producersRepositoryMock.save(new Producer("Produtor Original", "12345678909", "2fcdca95-3751-5410-96de-464a4e1f2b2a"))
    });

    it("deve atualizar o nome de um produtor existente", async () => {
        const updateData = {
            id: "2fcdca95-3751-5410-96de-464a4e1f2b2a",
            name: "Novo Nome Produtor",
        };

        await updateProducerUseCase.execute(updateData);

        const updatedProducer = await producersRepositoryMock.findById("2fcdca95-3751-5410-96de-464a4e1f2b2a");
        expect(updatedProducer).toMatchObject({
            id: "2fcdca95-3751-5410-96de-464a4e1f2b2a",
            name: "Novo Nome Produtor",
            taxIdentifier: "12345678909",
        });
    });

    it("deve lançar um erro se o produtor não for encontrado", async () => {
        const updateData = {
            id: "in2fcdca95-3751-5410-96de-464a4e1f2b2a",
            name: "Novo Nome",
        };

        await expect(updateProducerUseCase.execute(updateData)).rejects.toThrowError("Produtor não encontrado.");
    });

    it("deve manter o nome original se o nome não for fornecido", async () => {
        const updateData = {
            id: "2fcdca95-3751-5410-96de-464a4e1f2b2a",
        };

        await updateProducerUseCase.execute(updateData);

        const updatedProducer = await producersRepositoryMock.findById("2fcdca95-3751-5410-96de-464a4e1f2b2a");
        expect(updatedProducer).toMatchObject({
            id: "2fcdca95-3751-5410-96de-464a4e1f2b2a",
            name: "Produtor Original",
            taxIdentifier: "12345678909",
        });
    });
});