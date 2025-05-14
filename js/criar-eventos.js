document.getElementById("form-evento").addEventListener("submit", function(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const data = document.getElementById("data").value;
  const local = document.getElementById("local").value;

  if (nome && data && local) {
    alert(`Evento "${nome}" cadastrado com sucesso para o dia ${data} no local "${local}".`);
    this.reset();
  } else {
    alert("Preencha todos os campos obrigatórios.");
  }
});

document.querySelector(".btn-cancelar").addEventListener("click", function() {
  if (confirm("Tem certeza que deseja cancelar o preenchimento?")) {
    document.getElementById("form-evento").reset();
  }
});
