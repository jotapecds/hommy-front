let nome = 'João Pedro'
let idade = 19
let viajou = true

console.log(nome, idade, viajou)

/*

    - A variável "nome" é do tipo string
    - A variável "idade" é do tipo number
    - A variável "viajou" é do tipo booleano

*/

let produto1 = {
    nome: 'copo',
    preco: 5,
    estoque: 10
}

let produto2 = {
    nome: 'prato',
    preco: 15,
    estoque: 5
}

let produto3 = {
    nome: 'garfo',
    preco: 2,
    estoque: 15
}

let prateleira = [
    produto1,
    produto2,
    produto3
]

function diminuiEstoque(produto){
    if(produto.estoque > 0){
        produto.estoque--
        console.log(produto)
    }
        
    else  
        console.log("Produto não consta no estoque")

}


