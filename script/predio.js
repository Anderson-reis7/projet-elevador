(function () {
  //! -------------------- Pavimentos

  function criarTerreo() {
    const janela = document.createElement("div");
    janela.classList.add("janela");

    const terreo = document.createElement("div");
    terreo.classList.add("terreo");
    terreo.setAttribute("andar", "T");
    terreo.appendChild(janela);

    return terreo;
  }

  function criarAndar(numeroAndar) {
    const porta = document.createElement("div");
    porta.classList.add("porta");

    const andar = document.createElement("div");
    andar.classList.add("andar");
    andar.setAttribute("andar", numeroAndar);
    andar.appendChild(porta);

    return andar;
  }

  function criarAndares() {
    const elementosComAndares = document.querySelectorAll("[andares]");
    elementosComAndares.forEach((colunas) => {
      const qtd = +colunas.getAttribute("andares");
      for (let i = qtd; i > 0; i--) {
        colunas.appendChild(criarAndar(i));
      }
      colunas.appendChild(criarTerreo());
    });
  }

  criarAndares();

  //! -------------------- Elevador
})();
