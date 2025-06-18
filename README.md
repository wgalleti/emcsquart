# 🧠 Enigma de Einstein - Zebra Puzzle

Uma aplicação web interativa em **Vue.js 3** para resolver o famoso **Enigma de Einstein**, também conhecido como **Zebra Puzzle**.

## 🎯 Sobre o Projeto

O Enigma de Einstein é um puzzle lógico que desafia o jogador a descobrir qual pessoa possui qual animal de estimação, baseado em 15 pistas lógicas. Diz-se que apenas 2% da população mundial consegue resolver este quebra-cabeças.

### 🏠 O Desafio

Existem 5 casas em uma rua, cada uma com:

- Uma cor diferente
- Um morador de nacionalidade diferente
- Uma bebida preferida diferente
- Uma marca de cigarro diferente
- Um animal de estimação diferente

**Pergunta**: Quem tem o peixe?

## 🛠️ Tecnologias Utilizadas

- **Vue 3** com Composition API
- **TypeScript** para tipagem estática
- **Vite** como bundler
- **TailwindCSS** para estilização
- **Pinia** para gerenciamento de estado
- **VueUse** para utilitários Vue
- **Design responsivo** com foco mobile-first
- **Modo escuro** suportado

## 🚀 Funcionalidades

### ✨ Principais

- **Grid interativa** com dropdowns para preenchimento
- **Timer** para medir tempo de resolução
- **Sistema de dicas** progressivo (15 pistas)
- **Verificação de solução** com feedback
- **Persistência** automática no localStorage
- **Estatísticas** (tempo, dicas usadas, erros)
- **Modo escuro/claro** com toggle

### 📱 Responsividade

- **Layout mobile-first** otimizado
- **Sidebar expansível** em dispositivos móveis
- **Grid com scroll horizontal** quando necessário
- **Interface adaptativa** para todos os tamanhos de tela

## 🎮 Como Jogar

1. **Preencha a grid** usando os dropdowns
2. **Use as dicas** para obter ajuda (com penalidade de tempo)
3. **Verifique sua solução** quando estiver pronto
4. **Tente resolver** com o menor tempo e menos dicas possível

### 💡 Dicas Iniciais (Sempre Visíveis)

1. O inglês vive na casa vermelha
2. O sueco tem cachorros como animais de estimação
3. O dinamarquês bebe chá
4. A casa verde fica imediatamente à esquerda da casa branca
5. O dono da casa verde bebe café

## 🔧 Instalação e Execução

### Pré-requisitos

- Node.js 16+
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone <repository-url>
cd emcsquart

# Instale as dependências
npm install

# Execute em modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build de produção
npm run preview
```

### Scripts Disponíveis

```bash
npm run dev           # Servidor de desenvolvimento
npm run build         # Build para produção
npm run preview       # Preview da build
npm run lint          # Linting com ESLint
npm run format        # Formatação com Prettier
npm run build:preview # Build + Preview em sequência
npm run clean         # Limpar diretório dist
npm run deploy:check  # Verificar tudo antes do deploy
```

## 🚀 Deploy

### GitHub Pages

Este projeto está configurado para deploy automático no **GitHub Pages**:

- **URL de Produção**: `https://wgalleti.github.io/emcsquart/`
- **Deploy automático** via GitHub Actions
- **Trigger**: Push para branch `main`

### Configuração

1. Habilite GitHub Pages nas configurações do repositório
2. Selecione **GitHub Actions** como source
3. Faça push para `main` - o deploy será automático

Veja [DEPLOY.md](DEPLOY.md) para instruções detalhadas.

## 🎨 Design System

### Cores (Suporte a Modo Escuro)

- **Primárias**: Azul, Verde, Amarelo, Vermelho
- **Neutras**: Cinza em vários tons
- **Semânticas**: Sucesso, Erro, Aviso, Informação

### Componentes

- **EinsteinGrid**: Grid principal do puzzle
- **PuzzleSidebar**: Painel lateral com controles
- **ThemeToggle**: Alternador de tema
- **Card**: Componente de card reutilizável
- **Button**: Botão com variantes

## 📊 Persistência de Dados

O jogo salva automaticamente no **localStorage**:

- ✅ Estado da grid (preenchimento)
- ✅ Dicas reveladas
- ✅ Tempo de início
- ✅ Estatísticas (erros, dicas usadas)
- ✅ Preferência de tema

## 🏆 Sistema de Pontuação

- **Tempo**: Menor tempo = melhor
- **Dicas**: Menos dicas = melhor
- **Erros**: Menos tentativas erradas = melhor

## 🎯 Estrutura do Projeto

```
src/
├── components/
│   ├── ui/              # Componentes base do design system
│   ├── EinsteinGrid.vue # Grid principal do puzzle
│   ├── PuzzleSidebar.vue# Painel lateral
│   └── ThemeToggle.vue  # Controle de tema
├── stores/
│   └── puzzle.ts        # Store Pinia do puzzle
├── lib/
│   └── utils.ts         # Utilitários
└── assets/             # Estilos e recursos
```

## 🔮 Melhorias Futuras

- [ ] **Múltiplos níveis** de dificuldade
- [ ] **Ranking online** de jogadores
- [ ] **Animações** mais elaboradas
- [ ] **Modo tutorial** interativo
- [ ] **Compartilhamento** de resultados
- [ ] **PWA** com funcionamento offline
- [ ] **Análise** de estratégias de resolução

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🎲 Solução

Spoiler Alert! 🚨 A solução está codificada no store, mas tente resolver sozinho primeiro!

---

**Desenvolvido com ❤️ em Vue.js**
