"use strict"
const autoTxt = "Votos de Festas Felizes e um Próspero Ano Novo!";
let txtIndex = 0;
let txtLength = autoTxt.length;
const output = document.querySelector(".topo-info__paragrafo");
function desejarFestasFelizes() {
    if(txtIndex < txtLength) {
        output.textContent += autoTxt[txtIndex];
        txtIndex++;
        setTimeout(desejarFestasFelizes, 150);
    }
}
const tempo = new Date();
let mesIndex = tempo.getMonth();
if(mesIndex === 11) {
    desejarFestasFelizes();
    document.querySelector(".topo-info--festas-felizes").classList.remove("topo-info--off");
} 