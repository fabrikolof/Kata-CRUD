import { getFetchAll, postFetch, putFetch, deleteFetch } from "../CRUD/fetch.js";
import Santo from "../models/Santo.js";

export default class UI {
    constructor() {}

    get printBasicPage(){
        const HTMLcontent = `
        <h1>CRUD FETCH</h1>
        <section class="crud">
            <article>
                <h2 class="crud-title">Agregar Santos</h2>
                <form class="crud-form">
                    <input type="text" name="dataOneForm" placeholder="nombre" required>
                    <br>
                    <input type="text" name="dataTwoForm" placeholder="constelación" required>
                    <br>
                    <input type="submit" value="Enviar">
                    <input type="hidden" name="id">
                </form>
            </article>
            <article>
                <h2>Ver Santos</h2>
                <table class="crud-table">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Constelación</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!--
                        <tr>
                            <td>Seiya</td>
                            <td>Pegaso</td>
                            <td>
                                <button>Editar</button>
                                <button>Eliminar</button>
                            </td>
                        </tr>
                        -->
                    </tbody>
                </table>
            </article>
        </section>
    
        <!--TEMPLATE-->
        <template id="crud-template">
            <tr>
                <td class="dataOneTemplate"></td>
                <td class="dateTwoTemplate"></td>
                <td>
                    <button class="edit">Editar</button>
                    <button class="delete">Eliminar</button>
                </td>
            </tr>
        </template>
        `;
        document.body.innerHTML = HTMLcontent;
    }

    printTable(crud) {
        const d = document,
        $table = d.querySelector(".crud-table"),
        $form = d.querySelector(".crud-form"),
        $title = d.querySelector(".crud-title"),
        $template = d.getElementById("crud-template").content,
        $fragment = d.createDocumentFragment();
        if(crud === "fetch"){
            getFetchAll($table, $form, $title, $template, $fragment);
            console.log("Se utilizó fetch para hacer el crud.")
        } else if(crud === "ajax"){
            console.log("Esta funcionalidad se encuentra en desarrollo")
            console.log("Se utilizó ajax para hacer el crud.")
        } else if(crud === "axios"){
            console.log("Esta funcionalidad se encuentra en desarrollo")
            console.log("Se utilizó axios para hacer el crud.")
        }
    }

    editButton(event){        
        const d = document,
        $form = d.querySelector(".crud-form"),
        $title = d.querySelector(".crud-title");
        $title.innerHTML = `Editar Santo ${event.target.dataset.nombre}`
        $form.dataOneForm.value = event.target.dataset.nombre;
        $form.dataTwoForm.value = event.target.dataset.de;
        $form.id.value = event.target.dataset.id;
    }

    post(crud, event) {
        const $table = document.querySelector(".crud-table"),
        nombre = event.target.dataOneForm.value,
        constelacion = event.target.dataTwoForm.value;
        const santo = new Santo(nombre, constelacion);
        if(crud === "fetch") {
            postFetch(santo, $table);
        }
    }

    put(crud, event) {
        const nombre = event.target.dataOneForm.value,
        constelacion = event.target.dataTwoForm.value,
        $form = document.querySelector(".crud-form"),
        id = event.target.id.value;
        const santo = new Santo(nombre, constelacion);
        if(crud === "fetch") {
            putFetch(santo, id, $form);
            //this.printTable(crud);//intento de actualización de tabla sin necesidad de recargar la web
        }
    }

    deleteButton(crud, event) {
        if(crud === "fetch"){
            deleteFetch(event.target.dataset.id);
        }
    }

    get printPage(){
        this.printBasicPage;
        //this.printTable;
    }

}