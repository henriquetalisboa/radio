document.addEventListener("DOMContentLoaded", function () {
  // Selecione todos os elementos com a classe "hidden"
  const hiddenElements = document.querySelectorAll(".hidden");

  // Adicione uma classe "fade-in" para aplicar o efeito de fade-in
  hiddenElements.forEach((element) => {
    element.classList.add("fade-in");
  });

  // Remova a classe "hidden" após um atraso (opcional, para controlar o momento do fade-in)
  setTimeout(() => {
    hiddenElements.forEach((element) => {
      element.classList.remove("hidden");
    });
  }, 1000); // Ajuste o valor do atraso conforme necessário
});

// ANIMAÇÔES DO TEXTO (TITULO E SUBTITULO)

document.addEventListener("DOMContentLoaded", function () {
  // Selecione os elementos com a classe "animated-text"
  const animatedTextElements = document.querySelectorAll(".animated-text");

  // Adicione a classe "fade-in" para aplicar a animação
  animatedTextElements.forEach((element) => {
    element.classList.add("fade-in");
  });

  // Remova a classe "animated-text" após um atraso (opcional, para controlar o momento da animação)
  setTimeout(() => {
    animatedTextElements.forEach((element) => {
      element.classList.remove("animated-text");
    });
  }, 1000); // Ajuste o valor do atraso conforme necessário
});
