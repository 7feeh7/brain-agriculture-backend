import { FarmsRepositoryMock } from "../../__mocks__/FarmsRepositoryMock";
import { Farm } from "../../entities/Farm";
import { UpdateFarmUseCase } from "./UpdateFarmUseCase";

describe("UpdateFarmUseCase", () => {
    let farmsRepositoryMock: FarmsRepositoryMock;
    let updateFarmUseCase: UpdateFarmUseCase;

    beforeEach(async () => {
        farmsRepositoryMock = new FarmsRepositoryMock();
        updateFarmUseCase = new UpdateFarmUseCase(farmsRepositoryMock);

        await farmsRepositoryMock.save(new Farm(
            "Fazenda Teste",
            "Cidade Teste",
            "Estado Teste",
            100,
            60,
            30,
            ["Soja"],
            "56182513-472a-5b26-abe6-f04764a62c16",
            "2fcdca95-3751-5410-96de-464a4e1f2b2a"
        ));
    });

    it("deve atualizar os dados de uma fazenda existente", async () => {
        const updateData = {
            id: "2fcdca95-3751-5410-96de-464a4e1f2b2a",
            totalArea: 120,
            agriculturalArea: 70,
            vegetationArea: 40,
        };

        await updateFarmUseCase.execute(updateData);

        const updatedFarm = await farmsRepositoryMock.findById("2fcdca95-3751-5410-96de-464a4e1f2b2a");
        expect(updatedFarm).toMatchObject(updateData);
    });

    it("deve lançar um erro se a fazenda não for encontrada", async () => {
        const updateData = {
            id: "44e0e7a5-5f12-51e5-830d-a0653890cef6",
            totalArea: 120,
            agriculturalArea: 70,
            vegetationArea: 40,
        };

        await expect(updateFarmUseCase.execute(updateData)).rejects.toThrowError("Fazenda não encontrada.");
    });

    it("deve lançar um erro se a soma das áreas agrícolas e de vegetação for maior que a área total", async () => {
        const updateData = {
            id: "2fcdca95-3751-5410-96de-464a4e1f2b2a",
            totalArea: 100,
            agriculturalArea: 70,
            vegetationArea: 50,
        };

        await expect(updateFarmUseCase.execute(updateData)).rejects.toThrowError(
            "A soma das áreas agrícolas e de vegetação não pode ultrapassar a área total."
        );
    });

    it("deve permitir atualizar parcialmente os dados da fazenda", async () => {
        const updateData = {
            id: "2fcdca95-3751-5410-96de-464a4e1f2b2a",
            agriculturalArea: 80,
        };

        await updateFarmUseCase.execute(updateData);

        const updatedFarm = await farmsRepositoryMock.findById("2fcdca95-3751-5410-96de-464a4e1f2b2a");
        expect(updatedFarm).toMatchObject({
            totalArea: 100,
            agriculturalArea: 80,
            vegetationArea: 30,
        });
    });
});