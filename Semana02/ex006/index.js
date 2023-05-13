let name = window.prompt('Seja Bem vindo(a)! Qual seu nome?');
let age = Number(window.prompt(`Olá ${name}, insira sua idade.`));
let student = window.prompt("Você é estudante do LAB 365? Digite sim ou não.");
let gender = window.prompt("Qual seu gênero? Digite mulher ou homem.");


    if (student == "sim" && age >= 60){
        window.alert("Você tem entrada gratuita!");
    }else if (age >= 60){
        window.alert("Você tem entrada gratuita!");
    }else if (gender == "mulher" && age >=18){
        window.alert("Mulheres pagam 50,00 reais na entrada.");
    }else if (gender =! "mulher" && age >=18){
        window.alert("Homens pagam 80,00 reais na entrada.");
    }else {
        window.alert("Você não tem permissão para entrar.");
    }