function veiculosCadastrados() {
    return JSON.parse(localStorage.getItem("veiculos")) || [];
}

function mostrarVeiculosCadastrados() {
    const veiculos = veiculosCadastrados();

    for (const veiculo of veiculos) {
        document.querySelector('.container').appendChild(cartao(veiculo));
    }
}

function cartao(veiculo) {
    const cartao = document.createElement("div");
    cartao.innerHTML = `
    <img src="${veiculo.imagem}"\>
    <p class="modelo"> ${veiculo.modelo.nome}</p>
    <p class="marca"> ${veiculo.modelo.marca}</p>
    <p class="color"> ${veiculo.cor}</p>
    <p class="km"> ${veiculo.km} Km</p>
    <p class"preço" R$ ${veiculo.valor}</p>`;
    return cartao;
}

mostrarVeiculosCadastrados();