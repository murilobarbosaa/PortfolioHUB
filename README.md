# PortfolioHUB

Hub de projetos acadêmicos e pessoais de **Murilo Barbosa Cardoso**, estudante de Ciência da Computação no UniCEUB (conclusão prevista em dezembro de 2026) e Full-Stack AI Engineer.

**GitHub Page:** https://murilobarbosaa.github.io/PortfolioHUB/
**Slides da apresentação:** https://murilobarbosaa.github.io/PortfolioHUB/docs/slides/

## Sobre

Este repositório reúne, em um só lugar, os projetos que desenvolvi na graduação e na minha atuação profissional. Cada projeto tem uma pasta própria com um README descritivo. O site publicado no GitHub Pages apresenta os projetos, os documentos e os slides da apresentação.

Atuação atual:

- CTO e cofundador do Bora na Tech
- Engenheiro de IA na SinergyRH

## Planejamento do repositório

O repositório foi dividido em três seções:

| Seção | Pasta | Conteúdo |
| --- | --- | --- |
| Acadêmicos | `academicos/` | Trabalhos e projetos das disciplinas do curso |
| Pessoais e profissionais | `pessoais/` | Estudos de caso de produtos que desenvolvi. Só README, pois os repositórios reais são privados |
| Documentação | `docs/` | Slides da apresentação e documentos de apoio |

A raiz guarda a página do GitHub Pages (`index.html`) e seus arquivos estáticos (`assets/`).

## Estrutura de diretórios

```
PortfolioHUB/
├── README.md                  # este arquivo: planejamento e índice
├── index.html                 # página do GitHub Pages
├── assets/
│   ├── css/                   # estilos da página
│   ├── js/                    # scripts da página
│   └── img/                   # imagens
├── academicos/
│   ├── sistema-veterinario/   # README.md + docs/
│   ├── sistemas-embarcados/   # README.md + docs/
│   └── portfoliohub/          # README.md
├── pessoais/
│   ├── bora-na-tech/          # README.md
│   ├── connecta-plus/         # README.md
│   └── murilocardoso-dev/     # README.md
├── docs/
│   └── slides/index.html      # slides da apresentação
├── .gitignore
└── LICENSE                    # MIT
```

## Índice de projetos

### Acadêmicos

| Projeto | Descrição |
| --- | --- |
| [Sistema Veterinário](academicos/sistema-veterinario/README.md) | Proposta de aplicação web para clínicas e médicos-veterinários, com documento de software e documento de requisitos |
| [Sistemas Embarcados](academicos/sistemas-embarcados/README.md) | Relatórios da disciplina Sistemas em Tempo Real e Embarcados, com portas lógicas e contagem com Arduino |
| [PortfolioHUB](academicos/portfoliohub/README.md) | Este hub: repositório versionado e página no GitHub Pages |

### Pessoais e profissionais

| Projeto | Descrição |
| --- | --- |
| [Bora na Tech](pessoais/bora-na-tech/README.md) | Plataforma brasileira de carreira em tecnologia, onde sou CTO |
| [Connecta+](pessoais/connecta-plus/README.md) | Plataforma web em que fiz toda a engenharia |
| [murilocardoso.dev](pessoais/murilocardoso-dev/README.md) | Meu portfólio profissional, em desenvolvimento |

## Versionamento

- **Tags semânticas:** cada entrega estável recebe uma tag anotada (`v1.0`, `v1.1`) e uma release no GitHub com notas das mudanças.
- **Branches por funcionalidade:** mudanças são feitas em branches `feat/<assunto>`, `fix/<assunto>` ou `docs/<assunto>`, nunca direto na `main`.
- **Pull requests:** toda branch volta para a `main` por pull request, com descrição do que mudou. Depois do merge, a branch é apagada.
- **Commits padronizados:** mensagens em inglês no formato [Conventional Commits](https://www.conventionalcommits.org/), por exemplo `feat(pages): add projects section`.

## Boas práticas de colaboração

1. Abra uma issue descrevendo a mudança antes de começar trabalhos maiores.
2. Crie uma branch a partir da `main` atualizada.
3. Faça commits pequenos, com uma mudança lógica por commit.
4. Abra um pull request, descreva o que mudou e peça revisão.
5. Só faça merge depois da revisão. Apague a branch em seguida.
6. Não versione arquivos gerados, dependências (`node_modules/`) ou dados pessoais.

## Contato

- GitHub: [murilobarbosaa](https://github.com/murilobarbosaa)
- LinkedIn: [murilocardoso-dev](https://www.linkedin.com/in/murilocardoso-dev)
- E-mail: murilobarbosa2811@gmail.com
- Site: [murilocardoso.dev](https://murilocardoso.dev)

## Licença

Distribuído sob a licença MIT. Veja [LICENSE](LICENSE).
