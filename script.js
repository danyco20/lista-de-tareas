function agregarTarea() {
    let tarea = document.getElementById("nuevaTarea").value;

    if (tarea.trim() !== "") {
        let lista = document.getElementById("listaTareas");

        // Crear un nuevo elemento <li>
        let li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center";
        li.innerHTML = `
            <span>${tarea}</span>
            <button class="btn btn-danger btn-sm" onclick="eliminarTarea(this)">Eliminar</button>
        `;

        // Agregar la tarea a la lista
        lista.appendChild(li);

        // Limpiar el input
        document.getElementById("nuevaTarea").value = "";
    }
}

function eliminarTarea(boton) {
    boton.parentElement.remove();
}