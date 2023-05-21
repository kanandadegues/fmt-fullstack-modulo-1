const marcaVeiculos = JSON.parse(localStorage.getItem("marcaVeiculos")) || [];

function cadastrarMarca() {
    const marca = document.getElementById("marca").value = "";
    marcaVeiculos.push(marca);
    localStorage.setItem("marcaVeiclos", JSON.stringify("marcaVeiculos"));
    console.log("Marca cadastrada com sucesso!"); 
}

cadastrarMarca()