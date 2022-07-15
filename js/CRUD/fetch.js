const getFetchAll = async (table, template, fragment) => {
  const $table = table,
    $template = template,
    $fragment = fragment;

  //Petición por GET
  try {
    let res = await fetch("http://localhost:5555/Santos"),
      json = await res.json();

    //console.log(json);
    if (!res.ok) throw { status: res.status, statusText: res.statusText };

    json.forEach((el) => {
      $template.querySelector(".dataOneTemplate").textContent = el.nombre;
      $template.querySelector(".dateTwoTemplate").textContent = el.contelacion;
      $template.querySelector(".edit").dataset.id = el.id;
      $template.querySelector(".edit").dataset.nombre = el.nombre;
      $template.querySelector(".edit").dataset.de = el.contelacion;
      $template.querySelector(".delete").dataset.id = el.id;

      let $clone = document.importNode($template, true);
      $fragment.appendChild($clone);
    });
    $table.querySelector("tbody").textContent = ""; //limpiamos la tabla
    $table.querySelector("tbody").appendChild($fragment);
  } catch (err) {
    let message = err.statusText || "Ocurrió un error";
    $table.insertAdjacentHTML(
      "afterend",
      `<p><b>Error ${err.status}: ${message}</b></p>`
    );
  }
};

const postFetch = async (santo, form) => {
  let $form = form;
  //Create - POST
  try {
    //En el fetch el utf-8 va en mayúsculas --> charset=UTF-8
    let options = {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
          nombre: santo.nombre,
          contelacion: santo.contelacion,
        }),
      },
      res = await fetch("http://localhost:5555/Santos", options),
      json = await res.json();

    if (!res.ok) throw { status: res.status, statusText: res.statusText };

    //En una api normal esto tenemos que hacerlo nosotros el actualizar los datos
    //lo hacemos desde el main
    //location.reload();
  } catch (err) {
    let message = err.statusText || "Ocurrió un error";
    $form.insertAdjacentHTML(
      "afterend",
      `<p><b>Error ${err.status}: ${message}</b></p>`
    );
  }
};

const putFetch = async (santo, id, form) => {
  const $form = form;
  //Update - PUT
  try {
    //En el fetch el utf-8 va en mayúsculas --> charset=UTF-8
    let options = {
        method: "PUT",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
          nombre: santo.nombre,
          contelacion: santo.contelacion,
        }),
      },
      res = await fetch(`http://localhost:5555/Santos/${id}`, options),
      json = await res.json();

    if (!res.ok) throw { status: res.status, statusText: res.statusText };
  } catch (err) {
    let message = err.statusText || "Ocurrió un error";
    $form.insertAdjacentHTML(
      "afterend",
      `<p><b>Error ${err.status}: ${message}</b></p>`
    );
  }
};

const deleteFetch = async (id) => {
  console.log("Deleteado por fetch id:", id);
  try {
    //en el fetch el utf-8 va en mayúsculas --> charset=UTF-8
    let options = {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      },
      res = await fetch(`http://localhost:5555/Santos/${id}`, options),
      json = await res.json();

    if (!res.ok) throw { status: res.status, statusText: res.statusText };
  } catch (err) {
    let message = err.statusText || "Ocurrió un error";
    alert(`Error ${err.status}: ${message}`);
  }
};

export { getFetchAll, postFetch, putFetch, deleteFetch };
