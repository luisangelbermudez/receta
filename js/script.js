function modoOscuro() {
    document.body.classList.toggle("dark");
}

function toggleNav() {
    const lista = document.querySelector(".nav-lista");
    const btn = document.querySelector(".btn-hamburguesa");
    lista.classList.toggle("cerrado");
    btn.textContent = lista.classList.contains("cerrado") ? "☰" : "✕";
}