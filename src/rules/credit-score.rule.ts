/* eslint-disable @typescript-eslint/require-await */
import { BaseRule } from './base.rule';
import { CreditApplicationProcess } from '../model/credit-application-process';

export class CreditScoreRule extends BaseRule {
  readonly name = 'CreditScoreRule';

  protected async check(
    process: CreditApplicationProcess,
  ): Promise<{ success: boolean; reason?: string }> {
    return process.application.creditScore >= 600
      ? { success: true }
      : { success: false, reason: 'Score de crédito inferior a 600.' };
  }
}
