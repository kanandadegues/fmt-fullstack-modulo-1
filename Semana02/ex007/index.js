let salary = parseFloat(window.prompt('Insira seu salário atual:'));
let goal = parseFloat(window.prompt('Insira qual sua meta salarial:'));

let months = 0;
let newSalary = salary;

do{
    months++;
    if (months % 6 === 0) {
        newSalary += newSalary * 0.1
    }

} while (newSalary < goal)
window.alert(`O seu salário será R$ ${goal} em ${months} meses.`)