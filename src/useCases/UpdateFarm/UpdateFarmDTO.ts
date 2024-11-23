export interface IUpdateFarmDTO {
    id: string;
    name?: string;
    city?: string;
    state?: string;
    totalArea?: number;
    agriculturalArea?: number;
    vegetationArea?: number;
    crops?: string[];
}