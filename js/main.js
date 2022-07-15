import UI from "./views/UI.js";

const DIOSES_URL = "http://localhost:5555/Dioses";
const SANTOS_URL = "http://localhost:5555/Santos";


//sessionStorage
let crud = "fetch"; //"fetch" - "axios" - "ajax"
let ui = new UI();


const getAll = () => {
    ui.printPage;
    ui.printTable(crud);
}

document.addEventListener("DOMContentLoaded", getAll);


//Form
document.addEventListener("submit", async e => {
    if(e.target === document.querySelector(".crud-form")){
        e.preventDefault();
        if(!e.target.id.value){
            //POST
            ui.post(crud, e);
            ui.printTable(crud);
        } else {
            //Update PUT
            ui.put(crud, e);
            ui.printTable(crud);//agregar el nuevo con un appendchild en vivo
        }
    }
});

//Buttons
document.addEventListener("click", async e => {
    if(e.target.matches(".edit")){
        //EDIT
        ui.editButton(e);
        ui.editResetButton;
    }
    if(e.target.matches(".delete")){
        //DELETE
        let isDelete = confirm(`Estás seguro de eliminar el id ${e.target.dataset.id}`);
        if (isDelete) {
            ui.deleteButton(crud, e);
        }
    }
    if(e.target.matches(".formCancelar")){
        //Reset Edition
        const $form = document.querySelector(".crud-form"),
        $title = document.querySelector(".crud-title");
        $title.innerHTML = "Agregar Santos";
        $form.id.value="";
        $form.id.removeAttribute("value");
        $form.dataOneForm.value = "";
        $form.dataTwoForm.value = "";
        $form.querySelector(".formCancelar").remove();
    }
});
