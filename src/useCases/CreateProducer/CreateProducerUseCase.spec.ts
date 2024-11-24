import { ProducersRepositoryMock } from "../../__mocks__/ProducersRepositoryMock";
import { CreateProducerUseCase } from "./CreateProducerUseCase";

describe("CreateProducerUseCase", () => {
    let producersRepositoryMock: ProducersRepositoryMock;
    let createProducerUseCase: CreateProducerUseCase;

    beforeEach(() => {
        producersRepositoryMock = new ProducersRepositoryMock();
        createProducerUseCase = new CreateProducerUseCase(producersRepositoryMock);
    });

    it("deve criar um produtor com CPF válido", async () => {
        const producerData = {
            name: "Produtor Teste",
            taxIdentifier: "12345678909",
        };

        await createProducerUseCase.execute(producerData);

        const producers = await producersRepositoryMock.findAll();
        expect(producers).toHaveLength(1);
        expect(producers[0]).toMatchObject(producerData);
    });

    it("deve criar um produtor com CNPJ válido", async () => {
        const producerData = {
            name: "Produtor Teste",
            taxIdentifier: "12345678000195",
        };

        await createProducerUseCase.execute(producerData);

        const producers = await producersRepositoryMock.findAll();
        expect(producers).toHaveLength(1);
        expect(producers[0]).toMatchObject(producerData);
    });

    it("deve lançar erro ao usar CPF inválido", async () => {
        const producerData = {
            name: "Produtor Teste",
            taxIdentifier: "12345678900",
        };

        await expect(createProducerUseCase.execute(producerData)).rejects.toThrow(
            "CPF ou CNPJ inválido."
        );
    });

    it("deve lançar erro ao usar CNPJ inválido", async () => {
        const producerData = {
            name: "Produtor Teste",
            taxIdentifier: "12345678000100",
        };

        await expect(createProducerUseCase.execute(producerData)).rejects.toThrow(
            "CPF ou CNPJ inválido."
        );
    });

    it("deve lançar erro ao tentar cadastrar um CPF/CNPJ já existente", async () => {
        const producerData = {
            name: "Produtor Teste",
            taxIdentifier: "12345678909",
        };

        await createProducerUseCase.execute(producerData);

        await expect(createProducerUseCase.execute(producerData)).rejects.toThrow(
            "Já existe um produtor cadastrado com este CPF/CNPJ."
        );
    });
});