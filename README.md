# Caio Motorista Particular · Guarapari

Landing page premium de transporte executivo (Vitória ↔ Guarapari).
Foco: SEO local, conversão para WhatsApp e posicionamento do diferencial **carro elétrico BYD Dolphin Mini 2027**.

## Estrutura do projeto

```
MKT Uber/
├── index.html              # Landing principal (com schema.org completo)
├── obrigado.html           # Página de conversão (Google Ads)
├── 404.html                # Página de erro
├── robots.txt              # Indexação
├── sitemap.xml             # Mapa do site
├── manifest.json           # PWA / mobile
├── assets/
│   ├── css/style.css       # CSS premium
│   ├── js/
│   │   ├── main.js         # UI / animações
│   │   └── whatsapp-ai.js  # Assistente guiado WhatsApp
│   └── img/
│       ├── LEIA-ME.txt     # Instruções para colocar fotos
│       ├── favicon.svg     # Já criado
│       └── ... (suas fotos)
└── docs/
    ├── 01-ESTRATEGIA-SEO.md
    ├── 02-GOOGLE-ADS.md
    ├── 03-GOOGLE-MEU-NEGOCIO.md
    ├── 04-PALAVRAS-CHAVE.md
    └── 05-DOMINIO-HOSPEDAGEM.md
```

## Como publicar (em 10 minutos)

### Opção 1: Vercel (recomendado · grátis · CDN global · HTTPS automático)

1. Crie conta em [vercel.com](https://vercel.com) com seu Google.
2. Clique em "Add New" → "Project" → "Browse all templates" → arraste a pasta inteira ou conecte um repositório no GitHub.
3. Em "Configure" deixe tudo padrão (não tem build) e clique **Deploy**.
4. Em 30 segundos seu site está no ar em uma URL `caio-motorista.vercel.app`.
5. Em "Settings → Domains" conecte o seu domínio próprio (próximo passo).

### Opção 2: Cloudflare Pages (também grátis e ótimo)

1. Crie conta em [pages.cloudflare.com](https://pages.cloudflare.com).
2. "Create a project" → "Direct Upload" → arraste a pasta.
3. Conecte seu domínio em "Custom domains".

### Opção 3: Hostinger (se já tem hospedagem paga lá)

1. Acesse o **hPanel** → **Gerenciador de Arquivos**.
2. Entre na pasta `public_html` e suba **todo o conteúdo desta pasta** (não a pasta inteira, apenas o conteúdo).
3. Ative SSL grátis em "Sites → SSL".

## Antes de publicar (checklist rápido)

- [ ] Coloque as 5 imagens conforme `assets/img/LEIA-ME.txt`
- [ ] Decida o domínio (recomendações em `docs/05-DOMINIO-HOSPEDAGEM.md`)
- [ ] Substitua `https://www.motoristaguarapari.com.br/` pelo seu domínio final em:
  - `index.html` (todas as ocorrências de `motoristaguarapari.com.br`)
  - `sitemap.xml`
  - `robots.txt`
- [ ] Crie o Google Meu Negócio (passo a passo em `docs/03-GOOGLE-MEU-NEGOCIO.md`)
- [ ] Configure Google Search Console e envie o sitemap
- [ ] Configure Google Analytics 4 (cole o snippet no `<head>` do index.html)

## Próximos passos (ordem de impacto)

1. **Google Meu Negócio** → maior impacto imediato (aparecer no Maps)
2. **Domínio próprio + Search Console** → indexação Google
3. **Google Ads campanha de Pesquisa** → tráfego pago focado em conversão (`docs/02-GOOGLE-ADS.md`)
4. **Pedir avaliações** → 1 review novo por semana = explosão de ranking local
5. **Conteúdo** → blog mensal sobre rotas, dicas de viagem etc. (opcional, mas multiplica orgânico)

---

Site construído com mentalidade real de **agência premium especializada em transporte executivo**.
Cada detalhe foi pensado para o Google entender e o cliente clicar no WhatsApp.
