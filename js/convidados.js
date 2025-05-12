const convidados = [
    { nome: "Maria", grupo: "Família", status: "Confirmado" },
    { nome: "João", grupo: "Amigos", status: "Pendente" },
    { nome: "Ana", grupo: "Trabalho", status: "Confirmado" },
    { nome: "Pedro", grupo: "Trabalho", status: "Pendente" }
];

function carregarConvidados() {
    const lista = document.getElementById("lista-convidados");
    lista.innerHTML = "";

    convidados.forEach((convidado, index) => {
        const linha = document.createElement("tr");

        linha.innerHTML = `
            <td>${convidado.nome}</td>
            <td>${convidado.grupo}</td>
            <td class="${convidado.status === 'Confirmado' ? 'status-confirmado' : 'status-pendente'}">${convidado.status}</td>
            <td>
                <button onclick="removerConvidado(${index})">Excluir</button>
            </td>
        `;

        lista.appendChild(linha);
    });
}

function adicionarConvidado() {
    const nome = prompt("Digite o nome do convidado:");
    const grupo = prompt("Digite o grupo:");
    const status = prompt("Digite o status (Confirmado ou Pendente):");

    if (nome && grupo && status) {
        convidados.push({ nome, grupo, status });
        carregarConvidados();
    } else {
        alert("Preencha todas as informações.");
    }
}

function removerConvidado(index) {
    if (confirm("Deseja realmente excluir este convidado?")) {
        convidados.splice(index, 1);
        carregarConvidados();
    }
}

document.getElementById("pesquisa").addEventListener("input", function () {
    const termo = this.value.toLowerCase();
    const linhas = document.querySelectorAll("#lista-convidados tr");

    linhas.forEach(linha => {
        const nome = linha.children[0].textContent.toLowerCase();
        const grupo = linha.children[1].textContent.toLowerCase();

        if (nome.includes(termo) || grupo.includes(termo)) {
            linha.style.display = "";
        } else {
            linha.style.display = "none";
        }
    });
});

carregarConvidados();
