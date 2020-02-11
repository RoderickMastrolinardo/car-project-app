export class CarModel {
    public carModelName: string;
    public imagePath: string;
    public description: string;
  
    constructor(carModelName: string, desc: string, imagePath: string) {
      this.carModelName = carModelName;
      this.description = desc;
      this.imagePath = imagePath;
    }
  }