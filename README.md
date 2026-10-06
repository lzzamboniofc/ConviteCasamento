# Convite de casamento — Liliane & Igor

Projeto do convite digital, com Node.js para desenvolvimento local e publicação estática pelo GitHub Pages.

## Desenvolvimento

Requer Node.js 20+.

```bash
npm run dev
```

Abra `http://localhost:3000`.

## GitHub Pages

O projeto foi preparado para **Deploy from a branch → main → / (root)**. O Node.js não é executado no Pages; ele serve apenas para desenvolvimento local.

## Verificação

```bash
npm run check
```

## Onde editar

- Dados, textos, data, locais, RSVP e cores: `js/config.js`
- Lista de presentes: `js/gifts-config.js`
- Estilos: `css/styles.css` e `css/presents.css`
- Imagens: `assets/images/`

As imagens atuais são placeholders SVG, para serem substituídas depois pelas fotos finais. A música está desativada enquanto não houver um arquivo definitivo configurado.
