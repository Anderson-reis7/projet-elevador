<h2>Projeto Elevador Interativo<h2/><br/>
Este é um projeto de simulação de um elevador interativo desenvolvido com HTML, CSS e JavaScript. O elevador se move entre diferentes andares, exibindo o status de "Subindo" ou "Descendo" no mostrador, e para automaticamente no andar desejado.

<h2/>Funcionalidades<h2/>
Movimentação do Elevador: O elevador se move de acordo com o andar selecionado pelo usuário, exibindo animações de subida e descida.
Mostrador de Status: Um mostrador indica se o elevador está subindo, descendo, ou em qual andar ele parou.
Design Responsivo: A interface foi criada para ser simples e funcional, com uma representação visual do edifício e dos andares.

<h2>Como Funciona<h2/>
O código JavaScript centraliza a lógica de movimentação do elevador, utilizando funções para calcular a posição atual, determinar a altura do elevador e mover o mesmo até o andar desejado.

<h2>Estrutura do Projeto<h2/>
HTML: Estrutura básica da página, contendo o edifício, botões de controle dos andares e o mostrador.
CSS: Estilização do edifício, do elevador e do mostrador.
JavaScript: Contém a lógica que controla a criação do elevador, movimentação entre os andares e atualização do mostrador.

<h2>Funções Principais<h2/>
obterTamanhoElevador(): Calcula a altura do elevador com base no tamanho do andar térreo.
criarElevador(): Cria o elevador dentro do poço do edifício e inicializa suas propriedades.
obterPosicaoAtual(): Retorna a posição atual do elevador (em pixels) em relação ao fundo do poço.
moverElevadorPara(andar): Move o elevador para o andar especificado, atualizando o mostrador de status.

<h2>Melhorias Futuras<h2/>
Adição de Som: Adicionar efeitos sonoros para tornar a simulação mais realista.
Interface de Controle: Criar uma interface de botões para controle de andares, como em um painel de elevador real.
Animações Suaves: Melhorar as animações de subida e descida para torná-las mais suaves.

<h2>Contribuição<h2/>
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests com melhorias e correções.
