# Domínio e Hospedagem · Recomendação

## Domínio · Qual nome registrar?

Critérios para um bom domínio:
1. Curto (até 22 caracteres ajuda)
2. Fácil de falar no telefone
3. Sem hífens, sem números
4. Contém palavra-chave (impulsiona SEO)
5. Local (cidade ou tema)

### Sugestões em ordem de preferência

| # | Domínio | Pontos fortes | Pontos fracos |
|---|---|---|---|
| 1 | **motoristaguarapari.com.br** ⭐ | Tem o seu nome (autoridade pessoal) + cidade + serviço. Memorável. | Comprido. |
| 2 | motoristaguarapari.com.br | Curto, com palavra-chave perfeita. | Sem o seu nome (menos autoridade pessoal). |
| 3 | transferguarapari.com.br | Direto ao serviço mais buscado. | Sem o seu nome. |
| 4 | caiotransfer.com.br | Curto + nome. | Não tem cidade. |
| 5 | transfervitoria-guarapari.com.br | Combina origem + destino exatos. | Tem hífen (perde pontos). |

**Minha recomendação**: `motoristaguarapari.com.br`

Motivos:
- O Google entende cada parte da URL como sinal de relevância
- Você está construindo uma marca pessoal — começar com seu nome facilita o crescimento
- "guarapari" no domínio é um boost de SEO local poderoso

### Extensão · `.com.br` ou `.com`?

**`.com.br`** ✅ — para serviço local no Brasil é a escolha certa. Google dá prioridade local, é o que clientes esperam ver, e é mais barato (~R$ 40/ano no Registro.br).

**`.com`** — só vale se você pretende crescer para outros países (não é o caso).

### Onde registrar

Use o [Registro.br](https://registro.br) — é o registro oficial brasileiro, sem intermediário, sem upsell, ~R$ 40/ano. Você tem CPF, então cadastra direto.

> 💡 Registre **dois domínios** (custo R$ 80/ano):
> - `motoristaguarapari.com.br` (principal)
> - `motoristaguarapari.com.br` (defensivo, redireciona pro principal)
> Isso evita que um concorrente compre o "motoristaguarapari.com.br" depois e te confunda.

## Hospedagem · Onde colocar o site no ar?

| Opção | Custo | Performance | SEO | Dificuldade |
|---|---|---|---|---|
| **Vercel** ⭐ | Grátis | ★★★★★ | ★★★★★ | Fácil |
| Cloudflare Pages | Grátis | ★★★★★ | ★★★★★ | Fácil |
| Netlify | Grátis | ★★★★ | ★★★★★ | Fácil |
| Hostinger Premium | R$ 12/mês | ★★★★ | ★★★★ | Média |
| HostGator | R$ 15/mês | ★★★ | ★★★ | Média |

**Recomendação: Vercel**.

Por quê?
- **Grátis** para sites estáticos como o seu
- **CDN global** — o site abre rápido em qualquer cidade
- **HTTPS automático** (Google penaliza site sem HTTPS)
- **Deploy em 30 segundos**: arrasta a pasta e pronto
- **Sem manutenção** (não precisa atualizar PHP, MySQL etc.)

## Conectando o domínio à hospedagem

1. Registre `motoristaguarapari.com.br` no Registro.br.
2. Faça deploy no Vercel (drag & drop da pasta).
3. No Vercel: `Settings → Domains → Add` e cole `motoristaguarapari.com.br`.
4. O Vercel vai mostrar 2 DNS para apontar (algo como `cname.vercel-dns.com`).
5. Volte ao Registro.br: `Painel → DNS → Editar`. Coloque os registros que o Vercel pediu.
6. Aguarde 1–4 horas para propagar.
7. Pronto: `https://motoristaguarapari.com.br` no ar com SSL.

## Configuração de redirecionamento essencial

No Vercel, crie um arquivo `vercel.json` na raiz para redirecionamento `www`:

```json
{
  "redirects": [
    { "source": "/", "destination": "/", "has": [{ "type": "host", "value": "www.motoristaguarapari.com.br" }] }
  ]
}
```

Decida UM padrão (com ou sem `www`) e mantenha consistente em todos os lugares: domínio, sitemap, schema.org, Google Search Console, Google Meu Negócio.

> Eu recomendo **com www** (ex: `www.motoristaguarapari.com.br`) — é o que está configurado no `index.html` desde o início.

## E-mail profissional opcional (alta conversão B2B)

Se você quer atender empresas, ter `caio@motoristaguarapari.com.br` em vez de `caiorangel@hotmail.com` faz diferença. Custos:
- **Zoho Mail** — grátis (1 conta) → zoho.com/mail
- **Google Workspace** — R$ 24/mês, mais profissional → workspace.google.com

## Checklist final

- [ ] Domínio principal registrado
- [ ] Domínio defensivo registrado (opcional mas recomendado)
- [ ] Hospedagem no Vercel
- [ ] DNS apontando corretamente
- [ ] HTTPS ativo (verificar cadeado verde no navegador)
- [ ] Search Console verificado (envie o sitemap)
- [ ] Google Meu Negócio com URL atualizada
- [ ] Todos os links do site (`index.html`, `sitemap.xml`, schema.org) usando o domínio final
- [ ] E-mail profissional (opcional)
