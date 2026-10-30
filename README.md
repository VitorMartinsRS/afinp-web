# Afinp Finance — Site editável de apresentação

Site responsivo, em **HTML + CSS + JavaScript**, inspirado na proposta estratégica de produto do Afinp Finance discutida em outubro de 2026.

## Como abrir

1. Extraia o arquivo ZIP.
2. Abra o arquivo `index.html` no navegador (Chrome, Firefox, Edge ou Safari).
3. O site funciona **sem internet**, sem instalar pacotes e sem backend.

## Estrutura

- `index.html`: todo o texto, as seções, as funcionalidades e os preços.
- `styles.css`: cores, tipografia, organização da página e layout para celular.
- `script.js`: menu mobile, alternância de planos e demonstração da tela de assinatura.
- `assets/logo.svg`: logomarca vetorial editável.
- `assets/icons.svg`: conjunto de ícones vetoriais.

## Como personalizar

**Textos e informações:** use um editor como Visual Studio Code para alterar o conteúdo no `index.html`.

**Preços:** procure por `data-month` e `data-year` no `index.html`. Exemplo:

```html
<span class="price-amount" data-month="R$ 14,90" data-year="R$ 149">R$ 14,90</span>
```

**Cores:** ajuste as variáveis no início do arquivo `styles.css`, especialmente `--navy`, `--blue`, `--cyan`, `--canvas`.

**Marca:** substitua o `assets/logo.svg` e mantenha o mesmo nome; ou altere as referências no `index.html`.

**Telas demonstrativas:** o painel financeiro e o exemplo de conversa com Afinp AI são conteúdo **ilustrativo** no próprio HTML. Não exibem dados de clientes.

## Como publicar

- **GitHub Pages**: crie um repositório, envie todo o conteúdo desta pasta para a raiz do repositório e habilite Pages em Settings → Pages. Selecione a branch principal e a pasta `/ (root)`.
- **Vercel / Netlify**: importe o repositório ou faça deploy da pasta com os arquivos estáticos. Não é necessária compilação.

Não envie somente o `index.html`: os arquivos CSS, JavaScript e SVG precisam permanecer nas mesmas pastas.

## O que é demonstração

Este site é uma **landing page de apresentação**, não o aplicativo financeiro. Ele **não** oferece cadastro, banco de dados, assinatura, pagamento, envio de e-mails, API de IA, coleta de dados ou downloads do aplicativo.

Os valores são propostas de preços, **não uma oferta comercial ativa**. Recursos como compartilhamento familiar e IA preditiva estão descritos como planejados, não implementados. Ao lançar o aplicativo, revise todas as informações, políticas de privacidade, adequação à LGPD e links reais das lojas.

**Decisão da proposta:** não oferecer tentativas gratuitas de IA no lançamento; o botão "Conhecer o Afinp AI" mostra um exemplo de tela de planos sem usar API nem realizar cobrança.

## Evoluções sugeridas

- Incluir links reais de Android/iOS quando estiverem disponíveis.
- Adicionar formulário de interesse conectado a serviço autorizado, com aviso de privacidade.
- Conectar assinaturas ao backend e às regras das lojas.
- Criar área de suporte e política de privacidade revisada para a versão efetivamente publicada.

Criação: outubro de 2026. Conteúdo editável para evolução futura.
