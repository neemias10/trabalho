//let cachorros = ["Bulldog", "Podle", "Pastor alemão", "Beagle", "Chihuahua"]
//let Numeros = Number (prompt(" Digite um número de 0 á 4"))
//console.log(cachorros[Numeros])
//let numeros = [1, 2, 3, 4, 5, 6]
//console.log(numeros.length)
//.log(numeros)
//.push(7)
//console.log(numeros)
//numeros.splice(3,2)
//console.log(numeros)
//console.log(numeros.length)
//let nome = prompt("Digite seu nome")
//let emailDoUsuario = prompt(" Digite seu email")
//console.log("O email" + emailDoUsuario + " foi cadastrado com sucesso.seja bem vindo(a),"+ nome)
//let comida = ["x frango", "macarrao", "Feijoada", "Pastel de queijo", "carreteiro"]
//console.log(comida)
//console.log("essas são as minhas comidas preferidas:")
//console.log(comida[0])
//console.log(comida[1])
//console.log(comida[2])
//console.log(comida[3])
//console.log(comida [4])
//let amigo = prompt("Digite sua comida preferida")
//comida[1] = amigo
//console.log(comida)
//let listaDeTarefas = []
//let tarefa1 = prompt("digite sua primeira tarefa")
//let tarefa2 = prompt("digite sua segunda tarefa")
//let tarefa3 = prompt("digite sua terceira tarefa")
//listaDeTarefas [0] = tarefa1
//listaDeTarefas [1] = tarefa2
//listaDeTarefas[2] = tarefa3
//console.log(listaDeTarefas)
//let tarefarealizada = prompt("qual tarefa voê ja realizou?")
//listaDeTarefas.splice("tarefa que o usuario digitou")

//let filme = {
//    nome: "Meu Malvado Favorito" ,
//    anoLancamento: "2010" , 
//    Diretor: "PierriCoffin" ,
//    elenco: [
//        "Miranda" ,
//        "Gad Elmaleh" ,
//        "Jan Delay" ,
//    ],
//    visto: false
//};
//console.log(filme.nome)
//console.log(filme.anoLancamento)
//console.log(filme.Diretor)
//console.log(filme.elenco)
//console.log(filme.visto)

//let pessoa = {
//    nome: "Neemias" ,
//    idade: "15" ,
//    Genero: "Masculino" ,
//    generoMusical: "funk" ,
//}
//console.log(`o nome da pessoa é ${pessoa.nome} , ele tem ${pessoa.idade} anos e gosta muito de ${pessoa.generoMusical}`)

//let filme = {
//   nome: "Meu Malvado Favorito" ,
//    anoLancamento: "2010" , 
//    Diretor: "PierriCoffin" ,
//    elenco: [
//        "Steve Carell" ,
//        "Elsie Fisher" ,
//        "Jason Segel" ,
//    ]
//    }
//    console.log(filme.nome)
 //   console.log(filme.anoLancamento)
 //   console.log(filme.Diretor)
//    console.log(filme.elenco)
//    console.log(filme.visto)
//    
//filme.personagens = [
//            "gru" ,
//            "agnes" ,
//            "vector" ,
//       ],
//console.log(`${filme.elenco[0]} fez o ${filme.personagens[0]}, a ${filme.elenco[1]} fez ${filme.personagens[1]}, já o ${filme.elenco[2]} fez ${filme.personagens[2]}`)

//filme.elenco[0] = `xuxa`
//console.log(`O nome do filme é: ${filme.nome}, foi lançado em ${filme.anoLancamento}, O diretor do filme foi ${filme.Diretor}, elenco do filme: ${filme.elenco} os personagens são: ${filme.personagens}`)

//let blacKout = numbers= Number(prompt("insira um número de 0 a0 100"))

//while (numbers !== 0){

//    console.log(numbers !==)
//    numbers = numbers[0]
//}


//function sonic (){
//    let soma = 0
//    whilw(true) {
//let numero = Number (prompt (" digite um numero ou 0 para sair"))
//if(numero == 0){
//    break
//}
//}

//console.log(soma)


//}

//sonic ()
//let numeroLista = (11,15,18,14,12,13)
//resumo = fuction (numeroLista){

//    if(numeroLista > = 18) 

//}
//

let menu = 0
let listaDeAbrigos = [] // armazem dos arquivos

while (menu != 4) {

  menu = prompt(
    "===ABRIGOS TEMPORÁRIOS=== \n 1.cadastrar abrigo \n 2.listar abrigos \n 3.procurar abrigos \n 4.sair\n Escolha uma opção "
 )
 switch (menu) {
 case '1':
        cadastrandoAbrigos()
        break;
 case '2':
        listarAbrigos()
        break;
 case '3':
    if (listaDeAbrigos.length <=0){
        alert('nao há abrigos cadastrados')
        break;
    }else{
        proucurarAbrigo(listaDeAbrigos)
    }
     
     break;
     case '4' :
        alert ('saindo do programa.Até mais')
        break;
     default:
        alert('Opção invalida.por favor escolha uma opção valida')
        break;    
    }
}

function cadastrandoAbrigos(){
    let cadastroAbrigo = {
        nome: prompt('insira o nome do abrigo'),
        endereco: prompt('coloque o endereço do abrigo'),
        telefone: prompt('insira o número de telefone do abrigo'),
        capacidadeDelotacao: prompt('qual é a capacidade de lotação do abrigo '),
        cidade: prompt('em qual cidade é o abrigo ?'),
    };

    listaDeAbrigos.push(cadastroAbrigo)
    alert('seu abrigo foi cadastrado')
}
//cadastro 
//listagem
function listar(listaDeAbrigos){
    if (listaDeAbrigos.lenght === 0){
        alert('nenhum abrigo foi cadastrado.')
        return;
    }else {
       for(let i = 0;i < listaDeAbrigos.lenght;i++){
        let j = listaDeAbrigos[i];
        alert(`==== Lista de Abrigo ==== \n nome: ${j.nome} \n endereço:${j.endereco} \ncapacidade:${j.capacidadeDelotacao}\ncidade:${j.cidade}`)
       }
    }

}
//listagem
//procurar
function procurarAbrigo(){
    let cidadeBusca = prompt(' escreva qual cidade deseja procurar?')
    if(cidadeBusca.length === 0){
        alert('você foi um incompetente e não colocou nada!!!')
    }else{
        for(let i =0; i < ListaDeabrigos.length; i++){
     if(listaDeabrigos[i].cidade === cidadeBusca)
      alert(' ====Lista de Abrigos ===\nnome do abrigo; ${listaDeAbrigos [i].nome}\nendereço:${ListaDeAbrigos[i].endereço} \n capacidade$listaDeabrigos[i].capacidade} \ncidade:${listaDeAbrigos[i].cidade')       
        }
    }
}