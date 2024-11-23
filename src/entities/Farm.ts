import { v4 as uuidv4 } from 'uuid';

export class Farm {
    public readonly id: string;
    public name: string;
    public city: string;
    public state: string;
    public totalArea: number;
    public agriculturalArea: number;
    public vegetationArea: number;
    public crops: string[];
    public producerId: string;

    constructor(
        name: string,
        city: string,
        state: string,
        totalArea: number,
        agriculturalArea: number,
        vegetationArea: number,
        crops: string[],
        producerId: string,
        id?: string
    ) {
        if (!id) {
            this.id = uuidv4();
        } else {
            this.id = id;
        }

        this.name = name;
        this.city = city;
        this.state = state;
        this.totalArea = totalArea;
        this.agriculturalArea = agriculturalArea;
        this.vegetationArea = vegetationArea;
        this.crops = crops;
        this.producerId = producerId;
    }
}
