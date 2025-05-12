document.getElementById("form-evento").addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const data = document.getElementById("data").value;
    const local = document.getElementById("local").value;
    const tipo = document.getElementById("tipo").value;

    if (nome && data && local && tipo) {
        alert(`Evento "${nome}" cadastrado com sucesso para o dia ${data} no local "${local}".`);
        this.reset();
    } else {
        alert("Preencha todos os campos.");
    }
});
