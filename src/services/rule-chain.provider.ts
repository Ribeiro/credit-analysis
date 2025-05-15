import { CreditRule } from '../rules/credit-rule.interface';
import { TerminalRule } from '../rules/terminal.rule';

export class RuleChain {
  static buildChain(rules: CreditRule[]): CreditRule {
    if (rules.length === 0) return new TerminalRule();

    for (let i = 0; i < rules.length - 1; i++) {
      rules[i].setNext(rules[i + 1]);
    }

    rules[rules.length - 1].setNext(new TerminalRule());

    return rules[0];
  }
}
