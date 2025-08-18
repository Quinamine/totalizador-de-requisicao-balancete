"use strict"
const menu = {
    realcarTotaisSe(condicao) {
        const totais = document.querySelectorAll("[readonly]");
        for (const t of totais) {
            if(condicao) {
                t.classList.add("input--realcar-totais");
                localStorage.setItem(`${keyPrefix}-realcarTotais`, true);
            } else {
                t.classList.remove("input--realcar-totais");
                localStorage.removeItem(`${keyPrefix}-realcarTotais`);
            }
        }
    },
    filtrarFarmaco() {
        return {
            dialogBox: document.querySelector(".dialog-box-ir-para"),
            inputNumLinha: document.querySelector(".dialog-box-ir-para__input-linha"),
            numerosDeLinha: document.querySelectorAll(".ficha__num-de-linha"),
            body: document.querySelector("body"),
            abrirDialogBox() { 
                menu.filtrarFarmaco().dialogBox.classList.add("--open");
                menu.filtrarFarmaco().inputNumLinha.value = "";
                menu.filtrarFarmaco().inputNumLinha.focus();
            },
            fecharDialogBox() {
                menu.filtrarFarmaco().dialogBox.classList.remove("--open");
                menu.filtrarFarmaco().filtrar("")
            },
            filtrar(query) {
                let queryFormatada = formatarString(query);
                if(queryFormatada.includes("coartem")) queryFormatada = "artemeter";
                const farmacos = document.querySelectorAll(".ficha__linha-de-inputs input:nth-child(2)");
                for (let farmaco of farmacos) {
                    formatarString(farmaco.value).includes(queryFormatada) ? farmaco.parentElement.classList.remove("--hide") 
                    : farmaco.parentElement.classList.add("--hide");
                }
                let resultadosEncontrados = 0;
                const linhasDeFarmaco = document.querySelectorAll(".ficha__linha-de-inputs");
                for (const linha of linhasDeFarmaco) {
                    if(!linha.matches(".--hide")) {
                        resultadosEncontrados++;
                    } 
                }
                resultadosEncontrados === 0 ? 
                this.showNothingFoundMsg() : 
                this.hideNothingFoundMsg();
            },
            showNothingFoundMsg() {
                const msgNothingFound = document.querySelector(".msg-nothing-found-to-filtrar-medicamentos");
                msgNothingFound.textContent = "Nenhum medicamento/artigo médico corresponde à pesquisa."
                msgNothingFound.classList.remove("--display-none");
                this.body.scrollIntoView();
                this.body.classList.add("--overflow-h");
            },
            hideNothingFoundMsg() {
                const msgNothingFound = document.querySelector(".msg-nothing-found-to-filtrar-medicamentos");
                msgNothingFound.classList.add("--display-none");
                this.body.classList.remove("--overflow-h");
            }
        }
    },
    esvaziarFicha() {
        return {  
            dialogBox: document.querySelector(".dialog-box-esvaziar-ficha"),
            abrirDialogBox() { 
                const inputsDaFicha = document.querySelectorAll(".ficha__main__body input, .input-nao-celular");
                let inputFilled = 0;
                for(const input of inputsDaFicha) {
                    input.value.length > 0 && inputFilled++;
                }
                if(inputFilled === 0) {
                    const noInputFilledMsg = "Neste momento, a ficha encontra-se vazia."
                    alertarSobre(noInputFilledMsg);
                    return false;
                } 
                menu.esvaziarFicha().dialogBox.classList.add("--open");
                desfoqueDoFundo("desfocar");
            },
            fecharDialogBox() {
                menu.esvaziarFicha().dialogBox.classList.remove("--open");
                desfoqueDoFundo("focar");
            },
            confirmar() {
                let inputsCelulares  = document.querySelectorAll(".ficha__linha-de-inputs input");
                const checkboxesParaInputsNaoCelulares = document.querySelectorAll("[data-for]");
                let excluirMedicamentos = false;
                for (const cb of checkboxesParaInputsNaoCelulares) {                    
                    if(cb.checked) {
                        let idDeInputNaoCelular = cb.dataset.for
                        if(idDeInputNaoCelular === "lista-de-med") excluirMedicamentos = true;
                        else {
                            let inputNaoCelular = document.getElementById(`${idDeInputNaoCelular}`);
                            inputNaoCelular.value = "";
                            localStorage.removeItem(`${keyPrefix}-${inputNaoCelular.id}`);
                        }
                    }
                }
                if(!excluirMedicamentos) {
                    inputsCelulares = document.querySelectorAll(".ficha__linha-de-inputs input:nth-child(n+3)");
                }
                for (let i = 0; i < inputsCelulares.length; i++) {
                    inputsCelulares[i].value = "";
                    localStorage.removeItem(`${keyPrefix}-input${i}`);
                }
                menu.esvaziarFicha().fecharDialogBox();
                removerDestaqueDeRedCells();
            }
        }
    },
    imprimirFicha() {
        balancete.clonarHeaderDaFichaParaTodasPaginas();
        balancete.clonarFooterDaFichaParaTodasPaginas();
        let inputsCelulares = document.querySelectorAll(".ficha__linha-de-inputs input[type=number]");
        let icPreenchidas = 0;
        let totalizadoPor;
        for(const ic of inputsCelulares) {
            ic.value.length > 0 && icPreenchidas++;
        }
        if(icPreenchidas > 0) {totalizadoPor = "Totalizado por computador. "} 
        else {totalizadoPor = "";}
        const urlOutput = document.querySelector(".ficha__url-pub");
        let url = location.href;
        if(window.location.protocol == "file:") {
            url = `https://quinamine.github.io/requisicao-balancete/index.html`;
        }
        const title = document.title;
        urlOutput.innerHTML = `${totalizadoPor}${title} disponível em: <span class="ficha__url-pub__link">${url}</span>`;
        window.print()
    },
    abrirArtigo(artigo) {
        const artigoSobre = document.querySelector(".artigo--sobre");
        const artigoAjuda = document.querySelector(".artigo--ajuda");
        const body = document.querySelector("body");
        artigo === "sobre" ? artigoSobre.classList.add("--open") 
        : artigoAjuda.classList.add("--open");
        body.classList.add("--overflow-h");
        desfoqueDoFundo("desfocar");
    },
    fecharArtigo(artigo) {
        const artigoSobre = document.querySelector(".artigo--sobre");
        const artigoAjuda = document.querySelector(".artigo--ajuda");
        const body = document.querySelector("body");
        artigo === "sobre" && artigoSobre.classList.remove("--open");
        if(artigo === "ajuda") {
            const details = document.getElementsByTagName("details");
            for (const d of details) {
                d.removeAttribute("open");
            }
            artigoAjuda.classList.remove("--open");
        }
        body.classList.remove("--overflow-h");
        desfoqueDoFundo("focar");
    }
}
function eventos() {
    // REALCAR TOTAIS
    const checkboxRealcarTotais = document.getElementById("checkbox-realcar-totais");
    const cRt = checkboxRealcarTotais;
    cRt.addEventListener("change", () => cRt.checked ? menu.realcarTotaisSe(1) : menu.realcarTotaisSe(0));
    // Realcar totais no load do windows 
    if(localStorage.getItem(`${keyPrefix}-realcarTotais`)) {
        checkboxRealcarTotais.setAttribute("checked", "checked");
        menu.realcarTotaisSe(1);
    }
    // IR PARA LINHA
    const btnAbrirIrPara = document.querySelector(".header__menu__btn--ir-para");
    btnAbrirIrPara.addEventListener("click", menu.filtrarFarmaco().abrirDialogBox);
    const btnFecharIrPara = document.querySelector(".dialog-box-ir-para__btn--fechar");
    btnFecharIrPara.addEventListener("click", menu.filtrarFarmaco().fecharDialogBox);
    const inputNumLinha = document.querySelector(".dialog-box-ir-para__input-linha");
    inputNumLinha.addEventListener("input", () => {
        menu.filtrarFarmaco().filtrar(inputNumLinha.value)
    });
    // Fechar dialog-boxes-default
    const btnsFecharDialogBox = document.querySelectorAll(".dialog-box-default__btn");
    btnsFecharDialogBox.forEach( btn => {
        btn.addEventListener("click", () => {
            let btnParent = btn.parentElement;
            btnParent.parentElement.classList.remove("--open");
            clearInterval(btnAutoCloseLoop);
        });
    });
    // ESVAZIAR FICHA 
    const btnEsvaziarFicha = document.querySelector(".header__menu__btn--esvaziar-ficha");
    btnEsvaziarFicha.addEventListener("click", menu.esvaziarFicha().abrirDialogBox);
    const btnCancelar = document.querySelector(".dialog-box-esvaziar-ficha__btn--cancelar");
    btnCancelar.addEventListener("click", menu.esvaziarFicha().fecharDialogBox);
    const btnConfirmar = document.querySelector(".dialog-box-esvaziar-ficha__btn--confirmar");
    btnConfirmar.addEventListener("click", menu.esvaziarFicha().confirmar);
    // IMPRIMIR 
    const btnImprimir = document.querySelector(".header__menu__btn--imprimir");
    btnImprimir.addEventListener("click", menu.imprimirFicha);
    // Artigos
    const btnAbrirSobre = document.querySelector(".header__menu__btn--sobre");
    btnAbrirSobre.addEventListener("click", () => menu.abrirArtigo("sobre"));
    const btnFecharSobre = document.querySelector(".artigo__btn-x--fechar-sobre")
    btnFecharSobre.addEventListener("click", () => menu.fecharArtigo("sobre"));
    window.addEventListener("resize", () => {
        const artigoSobre = document.querySelector(".artigo--sobre");
        const itsMobile = window.innerWidth < 1024;
        const articleIsOpen = artigoSobre.matches(".--open");
        const body = document.querySelector("body");
        if(itsMobile && articleIsOpen) {
            desfoqueDoFundo("focar");
            location.href = `index.html#${artigoSobre.id}`;
            body.classList.remove("--overflow-h");
            
        } else if(!itsMobile && articleIsOpen) {
            desfoqueDoFundo("desfocar");
            body.classList.add("--overflow-h");
        }       
    });
    const btnAbrirAjuda = document.querySelector(".header__menu__btn--ajuda");
    btnAbrirAjuda.addEventListener("click", () => menu.abrirArtigo("ajuda"));
    const btnFecharAjuda = document.querySelector(".artigo__btn-x--fechar-ajuda")
    btnFecharAjuda.addEventListener("click", () => {
        menu.fecharArtigo("ajuda");
        removerBordaDoMovitoDeRedCells();
    });
    // PARTILHAR 
    const data = {
        title: "Totalizador de Requisição/Balancete",
        text: "Calcula automaticamente o Stock Teórico Fim do Período, Diferença entre stock teórico e stock físico e Quantidade a Requisitar com base nos dados de controlo da ficha de stock e inventário preenchidos pelo usuário. Foi desenvolvido de acordo com o modelo da ficha de requisição/balancete actualmente vigente no Serviço Nacional de Saúde em Moçambique.",
        url: "https://quinamine.github.io/requisicao-balancete/index.html"
    }
    const btnPartilhar = document.querySelector(".main__btn-fixed--share");
    btnPartilhar.addEventListener("click", () => {
        try {
            navigator.share(data).then(()=>console.log("Totalizador de Requisição/Balancete partilhado com sucesso."))
            .catch(e=> console.log(`Não foi possivel partilhar o serviço devido ao erro: ${e}.`))
        } catch (e) {
            console.log("O seu navegador não tem suporte ao método 'navigator.share()'.")
        }
    });
}
window.addEventListener("load", eventos);
window.addEventListener("keydown", event => {
    // CONTROL = 17 && p = 80
    if(event.ctrlKey && event.keyCode === 80) {
        event.preventDefault();
        menu.imprimirFicha();
    }
});
