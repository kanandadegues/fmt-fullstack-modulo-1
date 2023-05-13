//Escopo global
let escopo = 'Estou no escopo global';
console.log(escopo);

//Escopo função 
function exemplificarEscopo() {
    console.log('Estou no escopo da função');
}

//Escopo em bloco
if(true){
    console.log('Estou no escopo de bloco');
} 