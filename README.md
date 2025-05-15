# Credit Analysis Service

Projeto de análise de crédito desenvolvido em NestJS que avalia solicitações de crédito com base em regras personalizadas (idade, renda, score de crédito, etc). O sistema utiliza um padrão de *Chain of Responsibility* para orquestrar as regras de análise.

---

## Funcionalidades

- Análise de crédito com múltiplas regras (AgeRule, IncomeRule, CreditScoreRule).
- Arquitetura modular e extensível para adicionar novas regras facilmente.
- Uso de decorators para identificação automática de regras.
- Testes unitários para garantir a qualidade das regras.
- Configuração de Jest para testes automatizados.
  
---

## Tecnologias

- [NestJS](https://nestjs.com/) - Framework Node.js para aplicações server-side.
- TypeScript - Superset do JavaScript com tipagem estática.
- Jest - Framework para testes unitários.
- Reflect Metadata - Para manipulação de metadata em decorators.

---

## Instalação

```bash
git clone https://github.com/seu-usuario/credit-analysis.git
cd credit-analysis
npm install
````

---

## Rodando o projeto

```bash
npm run start
```

O servidor será iniciado em `http://localhost:3000`.

---

## Executando testes

```bash
npm run test
```

Testes unitários estão localizados na pasta `src/rules/__tests__` e cobrem as regras de análise de crédito.

---

## Decorator CreditRuleItem

O decorator `@CreditRuleItem()` é utilizado para marcar classes que implementam regras de crédito. Durante a construção da cadeia de regras, todas as classes decoradas são automaticamente registradas para avaliação.

Exemplo de uso:

```ts
import { CreditRuleItem } from '../decorators/credit-rule-item.decorator';

@CreditRuleItem()
export class AgeRule implements Rule {
  // implementação da regra
}
```

---

## Estrutura do Projeto

```
src/
 ├── decorators/
 │    └── credit-rule-item.decorator.ts
 ├── dto/
 │    └── credit-application.dto.ts
 ├── model/
 │    └── credit-application-process.ts
 ├── rules/
 │    ├── age.rule.ts
 │    ├── income.rule.ts
 │    ├── credit-score.rule.ts
 │    └── __tests__/
 │         ├── age.rule.spec.ts
 │         ├── income.rule.spec.ts
 │         └── credit-score.rule.spec.ts
 ├── services/
 │    └── credit-analysis.service.ts
 └── main.ts
```

---

## Contribuição

Contribuições são bem-vindas! Abra uma issue ou envie um pull request para melhorias, correções ou novas funcionalidades.

---

## Licença

MIT License © 2025 Geovanny Ribeiro

---

