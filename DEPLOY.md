# 🚀 Deploy para GitHub Pages

Este projeto está configurado para deploy automático no GitHub Pages usando GitHub Actions.

## ⚙️ Configurações Implementadas

### 1. **Vite Config (vite.config.ts)**

- `base`: Configurado para `/emcsquart/` em produção
- `build.outDir`: Diretório de saída `dist`
- `build.rollupOptions`: Chunks otimizados para melhor performance

### 2. **GitHub Actions (.github/workflows/deploy.yml)**

- Trigger automático no push para `main`
- Build com Node.js 18
- Deploy automático para GitHub Pages
- Permissões configuradas para Pages

## 📋 Passos para Configurar no GitHub

### 1. **Habilitar GitHub Pages**

1. Vá para o repositório no GitHub
2. Acesse **Settings** → **Pages**
3. Em **Source**, selecione **GitHub Actions**
4. Salve as configurações

### 2. **Fazer o Push**

```bash
git add .
git commit -m "feat: configurar deploy para GitHub Pages"
git push origin main
```

### 3. **Verificar Deploy**

1. Vá para **Actions** no repositório
2. Acompanhe o workflow "Deploy to GitHub Pages"
3. Após sucesso, acesse: `https://wgalleti.github.io/emcsquart/`

## 🔧 Comandos Úteis

### **Build Local**

```bash
npm run build
npm run preview
```

### **Deploy Manual (se necessário)**

```bash
npm run build
# Depois fazer upload manual do diretório dist/
```

## 📁 Estrutura de Deploy

```
dist/
├── index.html
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── logo-[hash].png
└── favicon.ico
```

## 🌐 URLs

- **Desenvolvimento**: `http://localhost:5173/`
- **Produção**: `https://wgalleti.github.io/emcsquart/`

## 🚨 Troubleshooting

### **Paths não funcionam**

- Verifique se `base` está correto no `vite.config.ts`
- Certifique-se que o nome do repositório está correto

### **Build falha**

- Verifique se todas as dependências estão no `package.json`
- Confirme se não há erros de TypeScript ou ESLint

### **404 na página**

- Confirme que GitHub Pages está habilitado
- Verifique se o workflow executou com sucesso
- Aguarde alguns minutos para propagação

## 📈 Melhorias Futuras

- [ ] Configurar domínio customizado
- [ ] Adicionar cache de dependências
- [ ] Implementar deploy preview para PRs
- [ ] Adicionar testes automatizados no workflow

---

**🎯 Enigma de Einstein** - Deploy automatizado com GitHub Pages
