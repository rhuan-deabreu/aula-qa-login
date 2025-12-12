## Do que precisa: 
- server.js           -> App Node/Express com formulário de login
- package.json        -> Scripts: start, test, lint
- tests/login.spec.js -> Testes E2E com Playwright
- azure-pipelines.yml -> Exemplo de pipeline para agente hospedado (Ubuntu)
- azure-pipelines-local.yml -> Exemplo para agente self-hosted Windows
- README.md

## Como rodar localmente (passo a passo)
1. Instale Node.js LTS (ex.: 18.x ou 20.x) e Git.
2. No terminal, dentro da pasta do projeto:
   npm install
3. Instale dependências do Playwright:
   npx playwright install
4. Inicie a aplicação:
   npm run start
   (ela ficará disponível em http://localhost:3000)
5. Em outro terminal rode os testes:
   npx playwright test
6. Para gerar relatório em HTML e JUnit:
   npx playwright test --reporter="junit,html"
   (os relatórios ficam em playwright-report/)

## Como versionar e enviar para Azure Repos
1. git init
2. git add .
3. git commit -m "App de exemplo e configurações iniciais"
4. git remote add origin URL_DO_SEU_PROJETO
5. git branch -M main
6. git push -u origin main

## Observações
- Testes E2E precisam que a aplicação esteja rodando; em CI use contêiner ou rode o start em background.
- Em ambientes Windows self-hosted a sintaxe de comandos muda (ex.: start /B, timeout /t).
- Consulte o documento original da aula para imagens de exemplo e instruções da professora.
