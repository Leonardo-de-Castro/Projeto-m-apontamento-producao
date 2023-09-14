document.addEventListener("DOMContentLoaded", function() {
    const saldoInput = document.getElementById("saldo");
    const producaoInput = document.getElementById("producao");
    const iniciarTurnoButton = document.getElementById("iniciarTurno");
    const finalizarTurnoButton = document.getElementById("finalizarTurno");
    const tempoTrabalhadoSpan = document.getElementById("tempoTrabalhado");
    const pecasProduzidasSpan = document.getElementById("pecasProduzidas");

    let saldo = parseFloat(saldoInput.value);
    let tempoInicio = 0;
    let tempoFim = 0;
    let pecasProduzidas = 0;

    iniciarTurnoButton.addEventListener("click", function() {
        tempoInicio = Date.now();
        // Habilita o campo de produção e desabilita o botão de iniciar turno
        producaoInput.removeAttribute("disabled");
        iniciarTurnoButton.setAttribute("disabled", true);
        finalizarTurnoButton.removeAttribute("disabled");
    });

    finalizarTurnoButton.addEventListener("click", function() {
        tempoFim = Date.now();
        const producao = parseFloat(producaoInput.value);
        if (!isNaN(producao) && producao >= 0) {
            saldo -= producao;
            saldoInput.value = saldo;
            pecasProduzidas += producao;
            producaoInput.value = ""; // Limpa o campo de produção
            
            producaoInput.setAttribute("disabled", true); // Desabilita o campo de produção
            iniciarTurnoButton.removeAttribute("disabled"); // Habilita o botão de iniciar turno
            finalizarTurnoButton.setAttribute("disabled", true);
            const tempoTrabalhado = (tempoFim - tempoInicio) / 1000; // Tempo em segundos
            tempoTrabalhadoSpan.textContent = tempoTrabalhado.toFixed(2) + " segundos";
            pecasProduzidasSpan.textContent = pecasProduzidas;
        } else {
            alert("Digite um valor válido para a produção.");
        }
    });
});