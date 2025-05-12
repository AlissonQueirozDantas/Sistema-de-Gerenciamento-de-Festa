document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Simulação simples de login
    const email = document.querySelector('input[type="email"]').value;
    const senha = document.querySelector('input[type="password"]').value;

    if (email && senha) {
        // Simular login válido e redirecionar
        window.location.href = "dashboard.html";
    } else {
        alert("Preencha todos os campos!");
    }
});
