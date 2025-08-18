"use strict"
var keyPrefix = "rb";
function desfoqueDoFundo(accao) {
    const desfoque = document.querySelector(".desfoque");
    accao === "desfocar" ? 
    desfoque.classList.add("--on") :
    desfoque.classList.remove("--on");
}
function alertarSobre(msg) {
    const dialogBoxDefault = document.querySelector(".dialog-box-default--small");
    const dialogBoxDefault__console = dialogBoxDefault.querySelector(".dialog-box-default__p--js-console");
    dialogBoxDefault__console.textContent = msg;
    clearInterval(btnAutoCloseLoop);
    let time = 10;
    const btn__outputTime = document.querySelector(".dialog-box-default__output-autoclose-loop");
    btn__outputTime.textContent = `(${time--}s)`;
    btnAutoCloseLoop = setInterval(() => {
        btn__outputTime.textContent = `(${time--}s)`;
        if(time < 0) {
            dialogBoxDefault.classList.remove("--open");
            clearInterval(btnAutoCloseLoop);
        }
    }, 1000);
    dialogBoxDefault.classList.add("--open");
}
function destacarCelulasComConteudoOmisso() {
    const celulas = document.querySelectorAll(".ficha__linha-de-inputs input:nth-child(n+3)");
    let celulasSaturadas = 0;
    for(const c of celulas) {
        c.classList.remove("input--bg-color-danger");
        if(c.clientWidth < 80 && c.value.length > 11) {
            c.classList.add("input--bg-color-danger");
            celulasSaturadas++;
        } else if (c.clientWidth < 90 && c.value.length > 12) {
            c.classList.add("input--bg-color-danger")
            celulasSaturadas++;
        } else if (c.clientWidth < 104 && c.value.length > 14) {
            c.classList.add("input--bg-color-danger")
            celulasSaturadas++;
        } else if (c.clientWidth < 115 && c.value.length > 16) {
            c.classList.add("input--bg-color-danger")
            celulasSaturadas++;
        }
    }
    if(celulasSaturadas > 0) {
        setTimeout(() => {
            const motivoDeSaturacao = document.querySelector(".artigo__details--motivo-de-celulas-vermelhas");
            menu.abrirArtigo("ajuda");
            motivoDeSaturacao.setAttribute("open", "");
            motivoDeSaturacao.classList.add("--borda-de-destaque");
            motivoDeSaturacao.scrollIntoView();
        }, 2500);
    }  
}
function removerDestaqueDeRedCells() {
    const celulas = document.querySelectorAll(".ficha__linha-de-inputs input:nth-child(n+3)");
    for (const c of celulas) c.classList.remove("input--bg-color-danger");
}
function removerBordaDoMovitoDeRedCells() {
    const motivoDeRedCells =  document.querySelector(".artigo__details--motivo-de-celulas-vermelhas");
    motivoDeRedCells.classList.remove("--borda-de-destaque");
}
const aqd = {
    mostrarAviso() {
        if(!sessionStorage.getItem(`${keyPrefix}-aviso-aqd`)) {
            const avisoDeAQD = document.querySelector(".dialog-box-default--sobre-aqd");
            setTimeout(() => avisoDeAQD.classList.add("--open"), 3000);
        }
    },
    salvarCiencia() {
        sessionStorage.setItem(`${keyPrefix}-aviso-aqd`, `user:aware`);
    }
}
function actualizarAnoDeCopyright() {
    const tempo = new Date();
    let anoActual = tempo.getFullYear();
    if(anoActual < 2024) anoActual = 2024;
    const currentYearOutput = document.querySelector(".footer__current-year");
    currentYearOutput.textContent = anoActual;
}
function animarCaixaDeDialogo(event) {
    const dialogBox = document.querySelector(".dialog-box-esvaziar-ficha");
    if(dialogBox.matches(".--open")) {
        event === "mousedown" ? dialogBox.classList.add("--mexer") 
        : dialogBox.classList.remove("--mexer");
    }
}
function fechartopoInfo(topoInfo) {
    const body = document.querySelector("#body");
    topoInfo.classList.add("topo-info--off");
    if(!topoInfo.matches(".topo-info--festas-felizes")) {
        body.classList.remove("body-com-topo-info");
    }
}
function omitirLinkDesteServicoNoRodape(){
    const servicosAfins = document.querySelectorAll(".footer__nav__link");
    let urlDestaPagina = location.href;
    for (const servico of servicosAfins) {
        if(servico.href === urlDestaPagina) {
            servico.parentElement.hidden = true;
        }
    }
}
const Tooltip = {
    mostrar(tooltip) {
        tooltip.classList.add("--show");
    },
    omitir(tooltip) {
        tooltip.classList.remove("--show");
    }
}
let btnAutoCloseLoop;
window.addEventListener("load", () => {
    const readonlyInputs = document.querySelectorAll("[readonly]");
    readonlyInputs.forEach ( inputTarget => inputTarget.addEventListener("click", () => {
        const readonlyInputsMsg = "Os totais (Stock Teórico Fim do Período, Diferença e Quantidade a Requisitar) estão inacessíveis para assegurar que não sejam modificados.";
        alertarSobre(readonlyInputsMsg);
    }));
    const inputsCelulares = document.querySelectorAll(".ficha__linha-de-inputs input:nth-child(n+3)");
    inputsCelulares.forEach (inputCelular => inputCelular.addEventListener("input", destacarCelulasComConteudoOmisso));
    destacarCelulasComConteudoOmisso();
    aqd.mostrarAviso();
    const dialogBoxAQD__btn = document.querySelector(".dialog-box-default__btn--aqd");
    dialogBoxAQD__btn.addEventListener("click", aqd.salvarCiencia);
    actualizarAnoDeCopyright();
    // Animar Caixa de diálogo "Esvaziar ficha"
    const desfoque = document.querySelector(".desfoque");
    desfoque.addEventListener("mousedown", event => animarCaixaDeDialogo(event.type));
    desfoque.addEventListener("mouseup", event => animarCaixaDeDialogo(event.type));
    // Fecha Topo Info
    const btnXDetopoInfo = document.querySelectorAll(".topo-info__btn");
    btnXDetopoInfo.forEach(btn => {
        btn.addEventListener("click", () => fechartopoInfo(btn.parentElement.parentElement));
    });
    omitirLinkDesteServicoNoRodape();
    // Tooltips
    const tooltipMenuAjuda = document.querySelector(".tooltip--menu-ajuda");
    const menuOptionsContainer = document.querySelector(".header__menu__ul");
    dialogBoxAQD__btn.addEventListener("click", () => {
        setTimeout(() => {
            Tooltip.mostrar(tooltipMenuAjuda);
            document.body.scrollIntoView();
            if(window.innerWidth < 510) {
                const btnMenuAjuda = document.querySelector(".header__menu__btn--ajuda").parentElement;
                let cssValueForPropertyRight = btnMenuAjuda.clientWidth / 2 - 14;
                tooltipMenuAjuda.style.cssText = `right: calc(0px + ${cssValueForPropertyRight}px);`;
                menuOptionsContainer.scrollBy({left: 509, behavior: 'smooth'});
                menuOptionsContainer.classList.add("--overflow-h");
            }
        }, 1500);
        setTimeout(() => {
            Tooltip.omitir(tooltipMenuAjuda);
            menuOptionsContainer.classList.remove("--overflow-h");
        }, 8500);
    });
});
