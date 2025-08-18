// Variaveis
const divExcSmall = document.querySelector(".div-exc--small");
const inputCodigo = document.querySelector("#div-exc__input-codigo");
const btnConfirmarCodigo = document.querySelector(".div-exc__btn-conf--codigo");
const alertaCodigoInv = document.querySelector(".div-exc__p-alerta--codigo-inv");
const desfoque = document.querySelector(".desfoque");
const allCells = document.querySelectorAll(".ficha input");
const divExcBig = document.querySelector(".div-exc--big");
// Funcoes
if(localStorage.getItem("trb-log")) {
    liberarAcesso();
} else {
    trancarCelulas();
}
if(localStorage.getItem("trb-bloqueado")) {
    bloquearInput(inputCodigo);
    trancarCelulas();
}
function trancarCelulas() {
    for(const c of allCells) {
        if(!c.hasAttribute("readonly")) {
            c.setAttribute("readonly", "");
            c.classList.add("cell-off")
        }
    }
}
function destrancarCelulas() {
    for(const c of allCells) {
        if(c.matches(".cell-off")) {
            c.removeAttribute("readonly");
        }
    }
}
function liberarAcesso() {
    divExcSmall.classList.remove("--on");
    divExcBig.classList.remove("--on");
    desfoque.classList.remove("--on","z-index-1000");
    destrancarCelulas();
}
function removerEspacosEmBranco(str) {
    return str.replaceAll(' ', '').replaceAll('"', '').replaceAll('.', '');
}
function destrancarBtnSeInputForPreenchidoComXcaracteres(btn, input, numCaracteres) {
    if(input.value.length >= numCaracteres) {
        btn.classList.add("--on");
    } else {
        btn.classList.remove("--on");
    }
}
function bloquearInput(input) {
    input.setAttribute("readonly", "");
    input.placeholder = "Campo indisponível";
    alertaCodigoInv.classList.add("--on");
    alertaCodigoInv.textContent = `Bloqueado. Contacte o desenvolvedor.`;
}
function mostrarDivExcBig() {
    divExcBig.classList.add("--on");
    desfoque.classList.add("--on");
}
// Invocacao;
inputCodigo.focus();
inputCodigo.addEventListener("input", () => {
    let numCaracteres = 0;
    destrancarBtnSeInputForPreenchidoComXcaracteres(btnConfirmarCodigo, inputCodigo, numCaracteres);
});
let tentativas = localStorage.getItem("trb-tentativas") ? localStorage.getItem("trb-tentativas") : 3;
btnConfirmarCodigo.addEventListener("click", () => {
    if(btnConfirmarCodigo.matches(".--on") && tentativas > 0) {
        alertaCodigoInv.textContent = ""
        if(inputCodigo.value === "A-deri-to") {
            if(localStorage.getItem("rb-user") == "dphrmp" || localStorage.getItem("rbuser") == "saide") {
                divExcSmall.classList.remove("--on");
                mostrarDivExcBig();
                const msg = document.querySelector(".div-exc--big .div-exc__msg");
                const inputMsg = document.querySelector(".div-exc--big #div-exc__input-msg");
                const btnConfirmar = document.querySelector(".div-exc--big .div-exc__btn-conf");
                inputMsg.addEventListener("keyup", (event) => {
                    let numCaracteres = removerEspacosEmBranco(msg.textContent).length;
                    destrancarBtnSeInputForPreenchidoComXcaracteres(btnConfirmar, inputMsg, numCaracteres);
                    let acertos = 0;
                    const outputAcertos = document.querySelector(".div-exc__p__acertos-output");
                    const outputTenteOutraVez = document.querySelector(".div-exc--big .div-exc__p-alerta");
                    btnConfirmar.addEventListener("click", () => {
                        if(btnConfirmar.matches(".--on")) {
                            if(removerEspacosEmBranco(inputMsg.value) === removerEspacosEmBranco(msg.textContent)) {
                                acertos++;
                                outputAcertos.value = acertos;
                                outputTenteOutraVez.textContent = "";
                                outputTenteOutraVez.classList.remove("--on");
                                if(acertos >= 30) {
                                    localStorage.setItem("trb-log", true);
                                    liberarAcesso();
                                }
                            } else {
                                outputTenteOutraVez.textContent = "As mensagens são divergentes. Por favor, tente outra vez!";
                                outputTenteOutraVez.classList.add("--on");
                            }
                            inputMsg.value = "";
                            btnConfirmar.classList.remove("--on");
                        }
                    });
                });
            } else {
                localStorage.setItem("trb-log", true);
                liberarAcesso();
            }
        } else {
            tentativas--;
            localStorage.setItem("trb-tentativas", tentativas);
            alertaCodigoInv.textContent = `Código inválido! Dispõe de mais ${tentativas} tentativa(s).`;
            alertaCodigoInv.classList.add("--on");
            if(tentativas === 0) {
                bloquearInput(inputCodigo);
                localStorage.setItem("trb-bloqueado", true);
            }
        }
        inputCodigo.value = "";
        btnConfirmarCodigo.classList.remove("--on");
    }
});