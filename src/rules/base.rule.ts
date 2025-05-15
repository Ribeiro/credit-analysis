import { CreditRule } from './credit-rule.interface';
import { CreditApplicationProcess } from '../model/credit-application-process';
import { TerminalRule } from './terminal.rule';

export abstract class BaseRule implements CreditRule {
  protected next: CreditRule = new TerminalRule();
  abstract readonly name: string;

  setNext(rule: CreditRule): CreditRule {
    this.next = rule;
    return rule;
  }

  async evaluate(process: CreditApplicationProcess): Promise<void> {
    const result = await this.check(process);
    if (!result.success) {
      process.addFailure(this.name, result.reason ?? 'Regra falhou.');
    }

    await this.next.evaluate(process);
  }

  protected abstract check(
    process: CreditApplicationProcess,
  ): Promise<{ success: boolean; reason?: string }>;
}
