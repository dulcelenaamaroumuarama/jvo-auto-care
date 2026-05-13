## Objetivo
Reescrever os metadados SEO de cada rota usando os termos com maior volume de busca no Brasil, mantendo a cidade (Umuarama-PR) para captar buscas locais ("perto de mim").

## Termos-alvo (Semrush, base BR)
- "oficina mecânica" — 6.600/mês
- "centro automotivo" — 9.900/mês
- "mecânico perto de mim" — 5.400/mês
- "mecânica automotiva" — 4.400/mês
- "auto mecânica" — 3.600/mês

## Mudanças por rota

**`src/routes/index.tsx`** (Home — termo principal)
- title: `Oficina Mecânica em Umuarama-PR | JVO Auto-Serviços`
- description: incluir "oficina mecânica", "centro automotivo", "Umuarama" e benefícios (25 anos, parcelamento 4x)
- og:title / og:description equivalentes
- adicionar `og:url` e `<link rel="canonical">` para a home

**`src/routes/servicos.tsx`**
- title: `Serviços de Mecânica Automotiva em Umuarama | JVO`
- description: cita "mecânica automotiva", "auto mecânica", lista serviços (freios, suspensão, injeção, leilão)

**`src/routes/sobre.tsx`**
- title: `Sobre o Mecânico Glauko Rangel | JVO Auto-Serviços Umuarama`
- description: foco em "mecânico" + experiência + cidade

**`src/routes/diferenciais.tsx`**
- title: `Por que escolher nossa oficina mecânica em Umuarama | JVO`
- description: reforça "oficina mecânica perto de você" + diferenciais

**`src/routes/galeria.tsx`**
- title: `Galeria — Estrutura da oficina em Umuarama | JVO Auto-Serviços`
- description: foto da estrutura, equipe, serviços feitos

**`src/routes/contato.tsx`**
- title: `Contato — Oficina Mecânica em Umuarama-PR | JVO`
- description: foco em "agende", "mecânico perto de mim", endereço Zona V

## Extras de SEO local
- Adicionar `og:url` e `<link rel="canonical">` em cada rota apontando para `https://jvo-care-connect.lovable.app/<rota>`
- Adicionar `og:type: "website"` consistente
- Manter o JSON-LD `AutoRepair` que já existe em `__root.tsx` (já é ideal para SEO local)

## O que NÃO vai mudar
- Conteúdo visível das páginas (H1, textos, imagens)
- Layout, cores, componentes
- JSON-LD existente
- Lógica de formulário, WhatsApp, navegação

## Resultado esperado
Páginas com títulos contendo termos de alta busca + cidade, melhorando ranqueamento para "oficina mecânica Umuarama" e variações "perto de mim". Sem mexer em UI nem em lógica.
