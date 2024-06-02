function listaClientes() {
    let lista = document.querySelector("#lista");
    lista.innerHTML = "";
   
    fetch(urlServer)
        .then(response => response.json())
        .then(data => {
            data.forEach(cliente => {
                let div = document.createElement("div");
                let editButton = document.createElement("a");
                let deleteButton = document.createElement("a");

                editButton.innerHTML = "Editar"
                deleteButton.innerHTML = "Excluir"

                editButton.classList.add("me-2");

                editButton.classList.add("btn");
                deleteButton.classList.add("btn");

                editButton.classList.add("btn-warning");
                deleteButton.classList.add("btn-danger");

                div.classList.add("col-3")


                deleteButton.onclick = () => {
                    fetch(`${urlServer}${cliente.id}`, {
                        method: "DELETE"
                    })
                    .then(() => listaClientes());
                }  


                div.innerHTML = 
                `
                <div class="m-3 card" style="width: 18rem;">
                    <ul  class="list-group list-group-flush">
                        <div class="card-header">
                            ${cliente.id}
                        </div>
                            <li class="list-group-item">${cliente.name1}</li>
                            <li class="list-group-item">${cliente.email}</li>
                            <li class="list-group-item">${cliente.age}</li>
                        <div class="card-body">
                        </div>
                    </ul>
                </div>`

                editButton.href = `cadastrar/cadastrar.html?id=${cliente.id}`;

                div.querySelector(".card-body").appendChild(editButton);
                div.querySelector(".card-body").appendChild(deleteButton);
                
                lista.appendChild(div);
            })
        })
}


listaClientes();