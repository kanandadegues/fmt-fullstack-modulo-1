const modeloVeiculos = JSON.parse(localStorage.getItem("modeloVeiculos"));
const veiculos = JSON.parse(localStorage.getItem("veiculos")) || [];

function cadastrarVeiculo(){
    const modelo = document.getElementById("modelo").value = "";
    const imagem = document.getElementById("imagem").value = "";
    const cor = document.getElementById("cor").value = "";
    const km = document.getElementById("km").value = "";
    const valor = document.getElementById("valor").value = "";

    veiculos.push({
        modelo,
        imagem,
        cor,
        km,
        valor,
    });
    localStorage.setItem("veiculos", JSON.stringify("veiculos"))
    console.log("Veículo cadastrado com sucesso!");
}