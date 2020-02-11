export class UserModel {
    public nombre: string;
    public apellido: string;
    public correo: string;
    public password: string;
  
    constructor(nombre: string, apellido: string, correo: string, password: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.password = password;
    }
}