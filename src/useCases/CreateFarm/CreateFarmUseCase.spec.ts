import { FarmsRepositoryMock } from "../../__mocks__/FarmsRepositoryMock";
import { CreateFarmUseCase } from "./CreateFarmUseCase";

describe("CreateFarmUseCase", () => {
    let farmsRepositoryMock: FarmsRepositoryMock;
    let createFarmUseCase: CreateFarmUseCase;

    beforeEach(() => {
        farmsRepositoryMock = new FarmsRepositoryMock();
        createFarmUseCase = new CreateFarmUseCase(farmsRepositoryMock);
    });

    it("deve criar uma fazenda com sucesso e retornar a fazenda criada.", async () => {
        const farmData = {
            name: "Fazenda Teste",
            city: "Cidade Teste",
            state: "MT",
            totalArea: 100,
            agriculturalArea: 60,
            vegetationArea: 40,
            crops: ["Soja", "Milho"],
            producerId: "83a126ea-ee70-53d7-9a24-aeedd2bc1ae2",
        };

        const createdFarm = await createFarmUseCase.execute(farmData);

        expect(createdFarm).toMatchObject(farmData);

        const farms = await farmsRepositoryMock.findByProducerId("83a126ea-ee70-53d7-9a24-aeedd2bc1ae2");
        expect(farms).toHaveLength(1);
        expect(farms[0]).toMatchObject(farmData);
    });

    it("deve lançar um erro se a soma das áreas agrícolas e de vegetação ultrapassar a área total.", async () => {
        const farmData = {
            name: "Fazenda Inválida",
            city: "Cidade Teste",
            state: "ST",
            totalArea: 100,
            agriculturalArea: 70,
            vegetationArea: 40,
            crops: ["Soja", "Milho"],
            producerId: "83a126ea-ee70-53d7-9a24-aeedd2bc1ae2",
        };

        await expect(createFarmUseCase.execute(farmData)).rejects.toThrow(
            "A soma das áreas agrícolas e de vegetação não pode ultrapassar a área total."
        );

        const farms = await farmsRepositoryMock.findByProducerId("83a126ea-ee70-53d7-9a24-aeedd2bc1ae2");
        expect(farms).toHaveLength(0);
    });
});
