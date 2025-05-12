const confirmacoes = [
    { nome: "Maria", status: "Pendente" },
    { nome: "João", status: "Confirmado" },
    { nome: "Pedro", status: "Recusado" }
];

function carregarConfirmacoes() {
    const lista = document.getElementById("lista-confirmacoes");
    lista.innerHTML = "";

    confirmacoes.forEach((item, index) => {
        const linha = document.createElement("tr");

        linha.innerHTML = `
            <td>${item.nome}</td>
            <td class="status ${definirClasseStatus(item.status)}">${item.status}</td>
            <td>
                <button class="confirmado" onclick="atualizarStatus(${index}, 'Confirmado')">Confirmar</button>
                <button class="cancelado" onclick="atualizarStatus(${index}, 'Cancelado')">Cancelar</button>
            </td>
        `;

        lista.appendChild(linha);
    });
}

function atualizarStatus(index, novoStatus) {
    confirmacoes[index].status = novoStatus;
    carregarConfirmacoes();
}

function definirClasseStatus(status) {
    if (status === "Confirmado") return "status-confirmado";
    if (status === "Cancelado") return "status-cancelado";
    if (status === "Recusado") return "status-recusado";
    return "status-pendente";
}

carregarConfirmacoes();
