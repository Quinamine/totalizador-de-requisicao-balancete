"use strict"
const referencia = {
    retornarIndicadorEcoluna(inputTarget) {
        const colunas = ["FNM", "Designação", "Stock no Início do Período", "Soma das Entradas", "Soma das Saídas", "Stock Teórico Fim do Período", "Total dos Pedidos", "Inventário do Stock", "Diferença", "Quantidade a Requisitar", "Quantidade Pedida", "Qtd Autorizada pelo Responsável Clínico"];
        const indicadorOutput = document.querySelector(".reference__output--indicador");
        const colunaOutput = document.querySelector(".reference__output--coluna");
        const inputTargetAndSiblings = inputTarget.parentElement.children;
        let inputTargetIndex = 0;
        for (let i = 0; i < inputTargetAndSiblings.length; i++) {
            if(inputTargetAndSiblings[i] === inputTarget) {
                inputTargetIndex = i;
            }
        }
        let indicador = inputTargetAndSiblings[1].value;
        let coluna = colunas[inputTargetIndex];
        indicadorOutput.value = indicador;
        colunaOutput.value = coluna;
    },
    retornarVazio() {
        const outputs = document.querySelectorAll(".reference__output");
        for (const o of outputs) o.value = "";
    }
}
function events() {
    const inputsCelulares = document.querySelectorAll(".ficha__linha-de-inputs input");
    inputsCelulares.forEach( inputCelular => {
        inputCelular.addEventListener("focus", () => {;
            !inputCelular.matches("[readonly]") && referencia.retornarIndicadorEcoluna(inputCelular);
        });
    });
    inputsCelulares.forEach( inputCelular => inputCelular.addEventListener("focusout", referencia.retornarVazio));
}
window.onload = events;
