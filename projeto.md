# 🧠 Projeto Web: Enigma de Einstein (Zebra Puzzle)

Crie uma aplicação web interativa em **Vue.js 3**, utilizando **shadcn/ui** e **TailwindCSS**, baseada no famoso **Enigma de Einstein**.

---

## ⚙️ Requisitos Técnicos

- **Vue 3 + Vite + TypeScript**
- **shadcn/ui** para todos os componentes (botões, selects, cards etc)
- **TailwindCSS** com design **mobile-first** e suporte a **modo escuro**
- **Pinia** para gerenciamento de estado
- **localStorage** para salvar:
  - Preenchimento das casas
  - Histórico de tentativas
  - Tempo decorrido
- Organização em **componentes reutilizáveis**, **composables** e **stores**

---

## 🎨 Layout

- Interface principal com uma **tabela de 5 colunas (casas)** e **5 linhas (atributos)**:
  - Cor da casa
  - Nacionalidade do morador
  - Bebida
  - Cigarro
  - Animal de estimação
- Cada célula da tabela terá um dropdown (select estilizado com shadcn/ui)
- **Painel lateral ou expansível em mobile** contendo:
  - Lista das **15 pistas**
  - Botões de ação: verificar solução, resetar, dicas
  - Relógio com tempo de resolução

---

## 🧑‍🎓 Experiência do Usuário (UX)

- Layout 100% adaptado ao mobile (mobile-first)
- Feedback visual com **ícones, cores e mensagens** para acertos/erros
- Ajuda progressiva:
  - Mostrar uma dica por vez (com penalidade de tempo)
- Mensagem de conclusão com:
  - Tempo total
  - Dicas usadas
  - Quantidade de erros
- Botões de:
  - Resetar jogo
  - Salvar progresso
  - Ver estatísticas

---

## 🧱 Estrutura de Componentes (sugestão)

- `EinsteinGrid.vue` – tabela com as 5 casas e dropdowns
- `Sidebar.vue` – dicas, ações e relógio
- `PuzzleStore.ts` – estado e progresso do usuário
- `usePuzzleLogic.ts` – lógica das regras e verificação

---

## 💾 Armazenamento em localStorage

- Usar `useStorage()` ou equivalente
- Auto-save ao selecionar qualquer campo
- Restaurar estado salvo no `onMounted`

---

## 📱 UI e Estilo

- Visual limpo, moderno e intuitivo
- Tipografia clara e legível
- Espaçamento adequado entre elementos
- Animações suaves e interações visuais com shadcn/ui
- Ícones com HeroIcons ou Lucide
- Componentes com bordas arredondadas e sombras suaves

---

## 📈 Funcionalidades Extras

- Dashboard final com:
  - Tempo total
  - Número de erros
  - Dicas utilizadas
- Opção para **exportar resultado como imagem ou PDF** (opcional)

---