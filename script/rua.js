(function () {
  function criarFaixas() {
    const elementosComFaixas = document.querySelectorAll("[faixas]");
    elementosComFaixas.forEach((element) => {
      const qtde = +element.getAttribute("faixas");
      for (let i = 0; i < qtde; i++) {
        const faixa = document.createElement("div");
        faixa.classList.add("faixa");
        element.appendChild(faixa);
      }
    });
  }

  criarFaixas();
})();
