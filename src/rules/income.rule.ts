/* eslint-disable @typescript-eslint/require-await */
import { BaseRule } from './abstract/base.rule';
import { CreditApplicationProcess } from '../model/credit-application-process';
import { CreditRuleItem } from '../decorators/credit-rule-item.decorator';

@CreditRuleItem()
export class IncomeRule extends BaseRule {
  readonly name = 'IncomeRule';
  protected async check(
    process: CreditApplicationProcess,
  ): Promise<{ success: boolean; reason?: string }> {
    return process.application.income >= 1500
      ? { success: true }
      : { success: false, reason: 'Renda mínima é R$1500.' };
  }
}
