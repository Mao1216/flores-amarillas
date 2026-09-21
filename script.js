const letters = [
  {
    number: "Carta I",
    title: "Alegría que florece",
    message:
      "Eres ese rayito de sol que llega sin pedir permiso y cambia todo el cuarto. Ojalá hoy recuerdes lo mucho que iluminas, incluso cuando no te das cuenta.",
  },
  {
    number: "Carta II",
    title: "Calma bonita",
    message:
      "Que este tulipán te recuerde que mereces días suaves, abrazos tranquilos y personas que sepan cuidar la luz tan linda que llevas dentro.",
  },
  {
    number: "Carta III",
    title: "Esperanza",
    message:
      "Hay caminos que se vuelven más claros cuando sonríes. Sigue creyendo en lo bueno: también está buscándote a ti.",
  },
  {
    number: "Carta IV",
    title: "Ternura",
    message:
      "Tienes una forma especial de hacer que lo sencillo se sienta importante. Eso no se aprende, eso nace del corazón.",
  },
  {
    number: "Carta V",
    title: "Luz de mañana",
    message:
      "Aunque el día empiece nublado, siempre hay algo en ti que parece abrir ventanas. Gracias por existir con tanta luz.",
  },
  {
    number: "Carta VI",
    title: "Cariño sincero",
    message:
      "Este ramo guarda un deseo chiquito y enorme a la vez: que nunca te falten motivos para sonreír y sentirte querida.",
  },
];

const tulips = document.querySelectorAll(".tulip");
const number = document.querySelector("#letter-number");
const title = document.querySelector("#letter-title");
const message = document.querySelector("#letter-message");
const signature = document.querySelector(".signature");

function selectFlower(index) {
  const letter = letters[index];

  tulips.forEach((tulip) => {
    const isActive = tulip.dataset.flower === String(index);
    tulip.classList.toggle("is-active", isActive);
    tulip.setAttribute("aria-pressed", String(isActive));
  });

  number.textContent = letter.number;
  title.textContent = letter.title;
  message.textContent = letter.message;
  signature.innerHTML = "Con Cariño,<br />Manuel Olin";
}

tulips.forEach((tulip) => {
  tulip.addEventListener("click", () => {
    selectFlower(Number(tulip.dataset.flower));
  });
});
