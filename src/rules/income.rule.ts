/* eslint-disable @typescript-eslint/require-await */
import { BaseRule } from './base.rule';
import { CreditApplicationProcess } from '../model/credit-application-process';

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
