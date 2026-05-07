# 🚀 DEPLOY AGORA · Passo a passo (15 minutos)

Este é o caminho mais rápido para subir o site. Siga **na ordem**.

---

## PARTE 1 · Atualizar o domínio nos arquivos (2 min)

O site foi construído com `caiomotoristaguarapari.com.br` como domínio padrão. Se você registrou esse mesmo, **pule para a Parte 2**.

Se registrou outro domínio (ex: `motoristaguarapari.com.br`), faça assim:

### Opção A — Pelo Bloco de Notas / VS Code (mais simples)
1. Abra a pasta `MKT Uber` no VS Code (ou outro editor).
2. Aperte `Ctrl + Shift + H` (Find & Replace em todos os arquivos).
3. **Buscar:** `caiomotoristaguarapari.com.br`
4. **Substituir por:** `seudominioaqui.com.br` (sem `https://`, sem `www.`)
5. Clique em **Replace All**.
6. Salve tudo (`Ctrl + K + S`).

### Opção B — Via script (Windows)
Dê dois cliques no arquivo **`atualizar-dominio.bat`** (criado na raiz do projeto), digite seu domínio e pronto.

---

## PARTE 2 · Subir na Vercel via GitHub (caminho mais fácil em 2026)

A Vercel não aceita mais drag & drop direto — agora puxa de um repositório. Vamos usar GitHub Web (zero instalação):

### 2.1 · Criar conta no GitHub (3 min)
1. Acesse [github.com](https://github.com) → **Sign up**.
2. Use o e-mail `caiorangel@hotmail.com` e crie uma senha forte.
3. Confirme o e-mail (caixa de entrada).
4. Após login, clique no `+` no canto superior direito → **New repository**.

### 2.2 · Criar o repositório
- **Repository name:** `caio-motorista-guarapari`
- **Description:** `Landing page transfer Vitória Guarapari`
- Marque **Public** (não tem dado sigiloso)
- ✅ Marque **Add a README file** (pode ser qualquer um, vamos sobrescrever)
- Clique em **Create repository**

### 2.3 · Subir os arquivos (drag & drop no GitHub)
1. No repositório que acabou de criar, clique em **Add file** → **Upload files**.
2. Abra a pasta `C:\Users\Caio\Documents\Claude\Projects\MKT Uber` no Explorador de Arquivos.
3. **Selecione TODOS os arquivos e pastas** (`Ctrl + A`) e arraste para a janela do GitHub.
   - ⚠ Importante: arraste o **conteúdo da pasta**, não a pasta `MKT Uber` em si.
4. Espere o upload terminar (1-2 min).
5. Em "Commit changes" clique em **Commit changes**.

### 2.4 · Conectar GitHub à Vercel (3 min)
1. Acesse [vercel.com](https://vercel.com) → **Sign Up** → **Continue with GitHub**.
2. Autorize a Vercel a acessar seu GitHub.
3. No painel, clique **Add New** → **Project**.
4. Procure o repositório `caio-motorista-guarapari` → **Import**.
5. **Project Name:** deixe como está
6. **Framework Preset:** detecta sozinho como `Other` (correto)
7. Clique em **Deploy**
8. Aguarde 30-60 segundos. ✅ Site no ar em `https://caio-motorista-guarapari.vercel.app`

---

## PARTE 3 · Conectar seu domínio próprio à Vercel (5 min)

### 3.1 · Adicionar o domínio na Vercel
1. No painel do projeto, vá em **Settings → Domains**.
2. Digite seu domínio (ex: `caiomotoristaguarapari.com.br`) e clique **Add**.
3. A Vercel vai te dar **2 registros DNS** que você precisa configurar:
   - Tipo `A` apontando para `76.76.21.21`
   - Tipo `CNAME` para `cname.vercel-dns.com` (no subdomínio `www`)

**Anote esses valores** — você vai usar no próximo passo.

### 3.2 · Configurar DNS no Registro.br
1. Acesse [registro.br](https://registro.br) e faça login.
2. Vá em **Painel → Meus domínios** → clique no seu domínio.
3. Clique em **DNS** → **Editar zona**.
4. Adicione os 2 registros que a Vercel pediu:
   - Registro 1: tipo `A`, nome (vazio ou `@`), valor `76.76.21.21`
   - Registro 2: tipo `CNAME`, nome `www`, valor `cname.vercel-dns.com`
5. Salve.
6. **Aguarde 1 a 4 horas** para o DNS propagar.

### 3.3 · Verificar se subiu
- Abra `https://www.seudominio.com.br` em uma aba anônima
- Veja se aparece o cadeado verde (HTTPS automático)
- Se aparecer "Vercel security checkpoint", aguarde mais 30 min — é normal na primeira propagação

---

## PARTE 4 · Após o site no ar (10 min)

### 4.1 · Google Search Console (essencial para Google indexar)
1. Acesse [search.google.com/search-console](https://search.google.com/search-console)
2. **Adicionar propriedade** → **Prefixo do URL** → cole `https://www.seudominio.com.br`
3. Verificação por **Tag HTML**: copie a meta tag e cole dentro do `<head>` do `index.html`, faça commit no GitHub e a Vercel re-deploya em 30s.
4. Depois de verificado: **Sitemaps** → adicione `sitemap.xml`.
5. **Solicitar indexação**: na URL de inspeção, cole sua home e clique em "Solicitar indexação".

### 4.2 · Vincular o site ao Google Meu Negócio
1. No painel do **Google Meu Negócio** → **Editar perfil** → **Site**.
2. Atualize com seu domínio próprio.
3. Salve.

### 4.3 · Google Analytics 4 (opcional, mas recomendado)
1. Acesse [analytics.google.com](https://analytics.google.com) e crie uma propriedade.
2. Copie o trecho de código `gtag.js`.
3. Cole logo antes de `</head>` no `index.html`.
4. Commit no GitHub → Vercel re-deploya.

---

## ⚡ TROUBLESHOOTING (problemas comuns)

| Problema | Solução |
|---|---|
| "404 Not Found" na Vercel | Verifique se `index.html` está na **raiz** do repositório (não dentro de uma subpasta) |
| Imagens não aparecem | Confira se os nomes batem (`byd-dolphin-mini-azul.jpg` etc) e se estão em `assets/img/` |
| HTTPS demora muito | Normal na primeira hora. Aguarde até 4h. |
| DNS não propaga | Use [dnschecker.org](https://dnschecker.org) para conferir. Pode levar até 48h em casos raros. |
| WhatsApp não abre | Verifique o número no `index.html` (deve estar `5527999849371` sem espaços) |

---

## 🎯 CHECKLIST FINAL

Marque conforme for fazendo:

- [ ] Domínio atualizado nos arquivos
- [ ] Repositório no GitHub criado e arquivos subidos
- [ ] Vercel conectada e site no ar (URL `.vercel.app` funcionando)
- [ ] Domínio próprio adicionado na Vercel
- [ ] DNS configurado no Registro.br
- [ ] HTTPS ativo (cadeado verde)
- [ ] Google Search Console verificado + sitemap enviado
- [ ] Google Meu Negócio com URL atualizada
- [ ] Mensagem teste enviada pelo botão WhatsApp do site

---

## 💬 Atalho mental

> "GitHub guarda meus arquivos. Vercel pega do GitHub e publica. Registro.br aponta meu domínio para a Vercel."

É só isso. Cada vez que você quiser atualizar o site (mudar texto, foto, preço), você edita o arquivo no GitHub direto pelo navegador, salva, e em 30 segundos a Vercel re-publica automaticamente.
