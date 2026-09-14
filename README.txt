CONVITE DE CASAMENTO — LILIANE & IGOR

Estrutura do projeto:

index.html              -> conteúdo e estrutura da página
css/styles.css          -> todas as cores, estilos, responsividade e animações
js/main.js              -> efeitos de rolagem, navegação e comportamentos
assets/images/          -> imagens fictícias para substituição

COMO TROCAR AS CORES
Abra css/styles.css e altere somente as variáveis no bloco :root, no topo do arquivo.

COMO TROCAR AS IMAGENS
Substitua os arquivos dentro de assets/images/ mantendo os mesmos nomes, ou altere os caminhos no HTML/CSS.

MOBILE FIRST
O CSS foi escrito primeiro para celulares. As melhorias para telas maiores entram somente em:
@media (min-width: 640px)
@media (min-width: 820px)
@media (min-width: 1024px)

Detalhes pensados para celular:
- navegação horizontal com rolagem por toque
- botões com altura mínima confortável
- campos do formulário com fonte 16px para evitar zoom automático no iPhone
- galeria em uma coluna no celular
- espaçamentos reduzidos e tipografia fluida
- imagens com loading="lazy"
- parallax desativado no celular
- suporte a prefers-reduced-motion

SEÇÕES EM TELA CHEIA
- As seções principais usam min-height: 100svh / 100dvh no CSS.
- Se o conteúdo ultrapassar a tela (ex.: galeria ou RSVP), a seção cresce normalmente.
- Para voltar ao comportamento por conteúdo, remova o min-height do seletor section em css/styles.css.
