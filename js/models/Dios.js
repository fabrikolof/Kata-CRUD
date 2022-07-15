import Personaje from "./Personaje.js";

export default class Dios extends Personaje {
    constructor(nombre, de) {
        super(nombre);
        this.de = de;
    }
}