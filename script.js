// ---------- ANIMAÇÃO DE ENTRADA ----------
document.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = 0;
  setTimeout(() => {
    document.body.style.opacity = 1;
  }, 150);
});


// ---------- TOAST BOAS VINDAS ----------
window.addEventListener("load", () => {
  const toast = document.getElementById("toast");
  if (!toast) return;

  setTimeout(() => toast.classList.add("show"), 600);
  setTimeout(() => toast.classList.remove("show"), 4000);
});

// ---------- SALVAR ÚLTIMA PÁGINA ----------
document.querySelectorAll(".sidebar a").forEach(link => {
  link.addEventListener("click", () => {
    localStorage.setItem("ultimaPagina", link.href);
  });
});

// ---------- CLIQUE DOS CARDS ----------
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("mousedown", () => {
    card.style.transform = "scale(.96)";
  });
  card.addEventListener("mouseup", () => {
    card.style.transform = "";
  });
});
