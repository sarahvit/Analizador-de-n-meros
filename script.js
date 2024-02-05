let numero = document.getElementById('numero')
let lista = document.getElementById('seletor')
let res = document.getElementById('res')
let valores = []


function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }

}

function inLista(n, l) { // o l passa como parametro, ele será substituido pelo array valores[]
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }

}

function adicionar() {
    //n     exclamação quer dizer nao           n, l
    if (isNumero(numero.value) && !inLista(numero.value, valores)) {
        valores.push(Number(numero.value))
        let item = document.createElement('option')
        item.text = `Valor ${numero.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista')
    }

    numero.value = ''
    numero.focus()

}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Digite um número para finalizar!!!')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0


        for (let pos in valores) {
            soma += valores[pos]


            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]


        }
        media = soma / total
        res.innerHTML = `<p>Ao todo, temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor é ${maior}.</p>`
        res.innerHTML += `<p>O menor valor é ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média é ${media}.</p>`
    }


}