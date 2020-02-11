export class CarModel {
    public carModelName: string;
    public available: number;
    public imagePath: string;
    public description: string;
  
    constructor(carModelName: string, desc: string, imagePath: string, available: number) {
      this.carModelName = carModelName;
      this.available = available;
      this.description = desc;
      this.imagePath = imagePath;
    }
  }