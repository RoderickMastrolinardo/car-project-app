export class myCarsModel {

    public vehiculo: string;
    public fechaEntrega: string;
    public fechaRecibo: string;
    public nombre: string;
    public uid: string;

  
    constructor(nombre: string, fechaEntrega: string, fechaRecibo: string, vehiculo: string, uid:string) {
        this.nombre = nombre;
        this.fechaEntrega = fechaEntrega;
        this.fechaRecibo = fechaRecibo;
        this.vehiculo = vehiculo;
        this.uid = uid;
    }
  }