(function () {
  //! -------------------- Pavimentos

  function criarTerreo() {
    const janela = document.createElement("div");
    janela.classList.add("janela");

    const terreo = document.createElement("div");
    terreo.classList.add("terreo");
    terreo.setAttribute("andar", "t");
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

  function iniciaMovimentacao() {
    const elevador = document.querySelector(".elevador");
    elevador.setAttribute("em-movimentacao", "");
  }

  function finalizarMovimetacao() {
    const elevador = document.querySelector(".elevador");
    elevador.removeAttribute("em-movimentacao");
  }

  function emMovimento() {
    const elevador = document.querySelector(".elevador");
    return elevador.hasAttribute("em-movimentacao");
  }

  function obterTamanhoElevador() {
    const terreo = document.querySelector('[andar="t"]');
    return terreo.offsetHeight + "px";
  }

  function criarElevador() {
    const poco = document.querySelector(".poco");

    const elevador = document.createElement("div");
    elevador.classList.add("elevador");
    elevador.style.height = obterTamanhoElevador();
    // elevador.style.bottom = "0px";

    poco.appendChild(elevador);
  }

  function obterPosicaoAtual() {
    const elevador = document.querySelector(".elevador");
    return +elevador.style.bottom.replace("px", "") || 0;
  }

  function atualizarMostrador(texto) {
    const mostrador = document.querySelector(".mostrador");
    mostrador.innerHTML = texto;
  }
  
  function iniciarComando(comando) {
    const botao = document.querySelector(`[comando="${comando}"]`);
    botao.classList.add('destaque')
  }

  function finalizarComando(comando) {
    const botao = document.querySelector(`[comando="${comando}"]`)
    botao.classList.remove('destaque')
}

  function moverElevadorPara(andar) {
    if (emMovimento()){
      return
    }
    
   iniciaMovimentacao()
    iniciarComando(andar)
    const numero = andar === "t" ? 0 : parseInt(andar);

    const elevador = document.querySelector(".elevador");
    const alturaAndar = parseInt(obterTamanhoElevador().replace("px", ""));
    const posicaoInicial = obterPosicaoAtual();
    const posicaoFinal = numero * alturaAndar;
    const subindo = posicaoFinal > posicaoInicial;

    atualizarMostrador(subindo ? "Subindo" : "Descendo");

    let temporizador = setInterval(() => {
      const novaPosicao = obterPosicaoAtual() + (subindo ? 10 : -10);
      const terminou = subindo
        ? novaPosicao >= posicaoFinal
        : novaPosicao <= posicaoFinal;

      elevador.style.bottom = terminou
        ? posicaoFinal + "px"
        : novaPosicao + "px";

      if (terminou) {
        clearInterval(temporizador);
        atualizarMostrador(andar === "t" ? "Térreo" : `${andar} Andar`);
        finalizarMovimetacao()
        finalizarComando(andar)
      }
    }, 30);
  }

  function aplicarControlesDoelevador() {
    const botoes = document.querySelectorAll("[comando]");

    botoes.forEach((botao) => {
      const comando = botao.getAttribute("comando");
      botao.onclick = function () {
        moverElevadorPara(comando);
      };
    });
  }

  criarElevador();
  aplicarControlesDoelevador();
})();
