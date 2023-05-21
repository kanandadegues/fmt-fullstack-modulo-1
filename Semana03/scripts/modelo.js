const modeloVeiculos = JSON.parse(localStorage.getItem("modeloVeiculos")) || [];
const marcaVeiculos = JSON.parse(localStorage.getItem("marcaVeiculos"));

function cadastrarModelo(){
    const marca = document.getElementById("marca").value = "";
    const modelo = document.getElementById("modelo").value = "";
    modeloVeiculos.push({nome: modelo, marca});
    localStorage.setItem("modeloVeiclos", JSON.stringify("modeloVeiculos"));
    console.log("Modelo cadastrado com sucesso!");
}

function selecionarMarcas(){
    const selecaoMarcas = document.getElementById("marca").value;
    const marcas = JSON.parse(localStorage.getItem("marcaVeiculos"));
    
}
