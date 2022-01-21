var prompt = require('prompt-sync')();


console.log();
console.log('olá jogadores, hoje iremos entrar em uma jornada comandada por você, desde o nome do personagem até as decisões para o destino final!!!');
console.log();

let personagem = prompt('Qual vai ser o nome do seu Ninja: ');
console.log();

console.log(` Órfão, ${personagem} foi aceito por um grande mestre ninja e dele recebeu treinamento. Somente um outro pupilo dava a impressão de ser páreo para ${personagem} o filho do mestre, Shen. Parecia que ${personagem} nunca viria a ser o favorito de seu mestre, pois cada batalha entre os rivais acabava em empate. Cheio de frustração e inveja, buscou uma vantagem. O jovem ninja se aventurou em uma parte protegida do templo do clã, encontrando lá uma caixa ornamentada e pressagiosa.`);
console.log();
//Perguntas e condicionais para as perguntas!!
let pergunta1 = prompt(`${personagem} deseja abrir a caixa das sombras? `);
console.log();
if(pergunta1 == 'sim'){
    console.log(` ${personagem} abriu a caixa e ganhou os poderes das sombras!!`)
}else{
    console.log(`${personagem} ignorou os caminhos das sombras.`)
}
console.log();

let pergunta2 = prompt(`Agora com os poderes novos, ${personagem} poderá ganhar do seu maior rival. Deseja desafiar o shen? `);
console.log();
if(pergunta2 == 'sim'){
    console.log(` ${personagem} derrotou o seu maior rival, porém o mestre descobriu o uso dos poderes das sombras `);
}else{
    console.log(`${personagem} prefiriu não revelar seus novos poderes. `);
}
console.log();

let pergunta3 = prompt(` Depois dos fatos passados, ${personagem} deveria abandonar o clã? `);
console.log();
if(pergunta3 == 'sim'){
    console.log(` ${personagem} abandonou o clã e juntou seus proprios seguidores das sombras`)
}else{
    console.log(`${personagem} prefere esperar um melhor momento.`)
}
console.log();

let pergunta4 = prompt(`${personagem} tem a oportunidade de matar o mestre e ficar com a caixa para si. Deseja matar o mestre? `);
console.log();
if(pergunta4 == 'sim'){
    console.log(` ${personagem} deu cor ao piso branco do templo com o sangue do mestre, assim recuperou a caixa!!`)
}else{
    console.log(`${personagem} não matou o mestre, mas conseguiu impedir a destruição da caixa. `)
}
console.log();

let pergunta5 = prompt(`aceitar completamente os poderes das sombras? `);
console.log();

if(pergunta5 == 'sim'){
    console.log(` ${personagem} acaba de aceitar os poderes das sombras, mas isso não é o suficiente para se um tornar mestre!!`)
}else{
    console.log(`${personagem} ainda não tem certeza sobre as sombras.`)
}
console.log();

//estrutura para contabilizar a quantidade de 'sim'.
let contabilizador = 0;
if (pergunta1 == 'sim')
{
    contabilizador = contabilizador+1
}if(pergunta2 == 'sim'){
    contabilizador = contabilizador+1
}
if(pergunta3 == 'sim'){
    contabilizador = contabilizador+1
}
if(pergunta4 == 'sim'){
    contabilizador = contabilizador+1
}
if(pergunta5 == 'sim'){
    contabilizador = contabilizador+1
}

let resultadoFinal = contabilizador;

if(resultadoFinal == 5){
 console.log(`Depois de pisar em todos seus inimigos, ${personagem} se tornou o mais poderoso mestre de ionia!! `);
}
if(resultadoFinal == 4){
 console.log(`Apesar das circunstâncias não serem perfeitas, ${personagem} se tornou o mestre das sombras!!`);
}
if(resultadoFinal == 3){
 console.log(` ${personagem} tentou se negar as sombras, porém já era tarde demais. Com isso acabou sendo um eterno escravo das sombras. `);
}
if(resultadoFinal == 2 || resultadoFinal == 1){
 console.log(`${personagem} praticamente se negou as sombras, se tornou o maior dos covardes e acabou preso!!`);
}
if(resultadoFinal == 0){
    console.log(`${personagem} acabou sendo capturado, perdeu todos os poderes e titulos e por isso ele falhou miseravelmente.`)
}





