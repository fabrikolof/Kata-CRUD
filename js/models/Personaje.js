export default class Personaje {
    constructor(nombre) {
        this.nombre = nombre;
    }
    get saludar(){
        console.log("Hola me llamo",this.nombre);
    }
}