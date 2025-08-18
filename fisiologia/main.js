"use strict"
const backup = {
    saveGridInputs() {
        const inputsCelulares = document.querySelectorAll(".ficha__linha-de-inputs input");
        for (let i = 0; i < inputsCelulares.length; i++) {
            inputsCelulares[i].addEventListener("input", () => {
                localStorage.setItem(`${keyPrefix}-input${i}`, inputsCelulares[i].value);
            });
            let inputIsSavedOnStorage = localStorage.getItem(`${keyPrefix}-input${i}`);
            if(inputIsSavedOnStorage) {
                inputsCelulares[i].value = localStorage.getItem(`${keyPrefix}-input${i}`);
            } 
        }
    },
    saveExtraInputs() {
        const inputsNaoCelulares = document.querySelectorAll(".input-nao-celular");
        inputsNaoCelulares.forEach( inputTarget => {
            inputTarget.addEventListener("input", () => localStorage.setItem(`${keyPrefix}-${inputTarget.id}`, inputTarget.value));
            inputTarget.value = localStorage.getItem(`${keyPrefix}-${inputTarget.id}`);
        });
    },
    saveCheckboxOption(checkboxes, key) {
        for(const checkbox of checkboxes) {
            checkbox.addEventListener("change", () => localStorage.setItem(`${key}`, checkbox.id));
            let checkboxSavedOnStorage = localStorage.getItem(`${key}`);
            if(checkboxSavedOnStorage) {
                checkbox.checked = false;
                if(checkbox.id === checkboxSavedOnStorage) {
                    checkbox.checked = true;
                }
            }
        }
    }
}
const balancete = {
    toRadioCheckboxes(checkboxes) {
        checkboxes.forEach (checkbox => {
            checkbox.addEventListener("change", () => {
                for (const c of checkboxes) c.checked = false;
                checkbox.checked = true;
            });
        });
    },
    simularDuplicadoOuTriplicado(checkbox) {
        const ficha = document.querySelector(".ficha");
        let copia = checkbox.dataset.copiadaficha;
        ficha.classList.remove("ficha--duplicado");
        ficha.classList.remove("ficha--triplicado");
        ficha.classList.add(`${copia}`);
    },
    filtrarEtotalizarCelulas(inputTarget) {
        if(inputTarget.dataset.stfp) {
            const classNameDosOperandos = inputTarget.dataset.stfp;
            inputTarget.classList.add(`${classNameDosOperandos}`);
            const classNameDeSomaDasSaidas = classNameDosOperandos.split("-menos-")[1];
            const operandos = document.querySelectorAll(`.${classNameDosOperandos}`);
            const somaDasSaidas = document.querySelector(`.${classNameDeSomaDasSaidas}`);
            const celulaDeSaida = document.querySelector(`.${inputTarget.dataset.stfpoutput}`);
            let soma = 0;
            for (const operando of operandos) {
                soma+= Number(operando.value)
            }
            let stfp = soma - Number(somaDasSaidas.value) * 2;
            celulaDeSaida.value = stfp;
        }
        if(inputTarget.dataset.diferenca) {
            const classNameDosOperandos = inputTarget.dataset.diferenca;
            const classNameDeInventario = classNameDosOperandos.split("-menos-")[0];
            const classNameDeStockTeorico = classNameDosOperandos.split("-menos-")[1];
            const inventario = document.querySelector(`.${classNameDeInventario}`);
            const stockTeorico = document.querySelector(`.${classNameDeStockTeorico}`);
            let celulaDeSaida = document.querySelector(`.${inputTarget.dataset.diferencaoutput}`);
            let diferenca = inventario.value - stockTeorico.value;
            celulaDeSaida.value = diferenca;
        }
        if(inputTarget.dataset.qtdarequisitar) {
            const classNameDosOperandos = inputTarget.dataset.qtdarequisitar;
            const classNameDeSomaDasSaidas = classNameDosOperandos.split("-menos-")[0];
            const classNameDeInventario = classNameDosOperandos.split("-menos-")[1];
            const somaDasSaidas = document.querySelector(`.${classNameDeSomaDasSaidas}`);
            const inventario = document.querySelector(`.${classNameDeInventario}`);
            const celulaDeSaida = document.querySelector(`.${inputTarget.dataset.qtdarequisitaroutput}`);
            let qtdArequisitar = somaDasSaidas.value * 2 - inventario.value;
            if(qtdArequisitar < 0) qtdArequisitar = 0;
            celulaDeSaida.value = qtdArequisitar;
        }
    },
    clonarHeaderDaFichaParaTodasPaginas() {
        const headerOriginal = document.querySelector(".ficha__main__header");
        const firstLinesOfEachPage = document.querySelectorAll(".ficha__linha-de-inputs--1a-da-pagina");
        let headersClones = document.querySelectorAll(".ficha__main__header--clone");
        for (const header of headersClones) {
            header.parentElement.removeChild(header);
        }
        for (let firstLine of firstLinesOfEachPage) {
            let headerClone = headerOriginal.cloneNode(!0);
            headerClone.classList.add("ficha__main__header--clone");
            firstLine.insertAdjacentElement("beforeBegin", headerClone)
        }
    },
    clonarFooterDaFichaParaTodasPaginas() {
        const footerOriginal = document.querySelector(".ficha__rodape");
        const headersClones = document.querySelectorAll(".ficha__main__header--clone");
        let footersClones = document.querySelectorAll(".ficha__rodape--clone");
        for (const footer of footersClones) {
            footer.parentElement.removeChild(footer);    
        }
        for (let header of headersClones) {
            let footerClone = footerOriginal.cloneNode(!0);
            footerClone.classList.add("ficha__rodape--clone");
            header.insertAdjacentElement("beforeBegin", footerClone);
        }
    }
}
function escutarEventos() { 
    // Tipo de Requisição
    const checkboxesTipoDeReq = document.querySelectorAll(".input-tipo-de-requisicao");
    balancete.toRadioCheckboxes(checkboxesTipoDeReq);
    let checkboxStorageKey = "rb-tipo-de-req"
    backup.saveCheckboxOption(checkboxesTipoDeReq, checkboxStorageKey);
    // Cor da Requisição 
    const checkboxesBgcModifiers = document.querySelectorAll(".ficha__tipo-de-copia__checkbox");
    balancete.toRadioCheckboxes(checkboxesBgcModifiers);
    checkboxStorageKey = "rb-copia-de-req"
    backup.saveCheckboxOption(checkboxesBgcModifiers, checkboxStorageKey);
    checkboxesBgcModifiers.forEach( checkbox => {
        checkbox.addEventListener("change", () => {
            balancete.simularDuplicadoOuTriplicado(checkbox);
        });
        checkbox.checked && balancete.simularDuplicadoOuTriplicado(checkbox);
    });
    // Balancete propriamente dito
    const inputsCelulares = document.querySelectorAll(".ficha__linha-de-inputs input");
    inputsCelulares.forEach (inputCelular => {
        inputCelular.addEventListener("input", () => {
            balancete.filtrarEtotalizarCelulas(inputCelular)
        })
        inputCelular.value !== "" && balancete.filtrarEtotalizarCelulas(inputCelular);
    });
}
window.addEventListener("load", () => {
    backup.saveGridInputs();
    backup.saveExtraInputs();
    escutarEventos();    
});




