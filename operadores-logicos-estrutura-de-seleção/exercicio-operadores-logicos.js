
const   readLine = require('readline').createInterface({
    input : process.stdin,
    output : process.stdout
});

console .log('Este programa vai checar se você é maior de 18 anos e tem habilitação para saber se pode entrar no Kart');
console .log('Além da suas verificações, precisamos verificar se você está na lista do horario');

readLine.question('Qual o ano do seu nascimento?', ano => {
    if(ano > 2004){
        console .log('Você não tem 18 anos');
    }else{  
        readLine.question("Você tem habilitação? (Sim/Não) ", temHabilitação =>{
            if(!(temHabilitação.toUpperCase() === "SIM")){
            console .log('Você não tem habilitação para entrar no Kart');
            }else{
                readLine.question("Qual o seu nome?", nome =>{
                    switch(nome){
                        case 'Douglas':
                            console .log('Bem vindo ao Kart Douglas');
                            break;
                        case 'Carlos Eduardo':
                            console .log('Bem vindo ao Kart Carlos Eduardo');
                            break;
                            default:
                                console .log('Seu nome não foi identificado na lista de presença');
                                
                    }
                });
            }
        })
    }
})