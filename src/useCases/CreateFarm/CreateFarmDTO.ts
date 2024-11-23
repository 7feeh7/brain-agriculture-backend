export interface ICreateFarmDTO {
    name: string;
    city: string;
    state: string;
    totalArea: number;
    agriculturalArea: number;
    vegetationArea: number;
    crops: string[];
    producerId: string;
}