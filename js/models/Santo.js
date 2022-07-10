import Personaje from "./Personaje.js";

export default class Santo extends Personaje {
    constructor(nombre, contelacion) {
        super(nombre);
        this.contelacion = contelacion;
    }
}