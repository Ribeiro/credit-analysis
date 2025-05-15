/* eslint-disable @typescript-eslint/require-await */
import { BaseRule } from './abstract/base.rule';
import { CreditApplicationProcess } from '../model/credit-application-process';
import { CreditRuleItem } from '../decorators/credit-rule-item.decorator';

@CreditRuleItem()
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
