const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let wins = 0;
let loses = 0;
let winningBalance = 0;
let level = 0;
rl.question('Qual a quantidade de vitórias do jogador? ', (answer) => {
    wins = +answer;
    rl.question('Qual a quantidade de derrotas do jogador? ', (answer) => {
        loses = +answer;
        winningBalance = wins - loses;

        if (winningBalance > 10 && winningBalance < 20) {
            level = 'Bronze';
        } else if (winningBalance >= 20 && winningBalance < 50) {
            level = 'Prata';
        } else if (winningBalance >= 50 && winningBalance < 80) {
            level = 'Ouro';
        } else if (winningBalance >= 80 && winningBalance < 90) {
            level = 'Diamante';
        } else if (winningBalance >= 90 && winningBalance < 100) {
            level = 'Lendário';
        } else if (winningBalance >= 100) {
            level = 'Imortal';
        } else {
            level = 'Ferro';
        }
        console.log(`O herói tem um saldo de ${winningBalance} está no nível ${level}.`);
        rl.close();
    })
})